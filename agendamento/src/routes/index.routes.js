const { addHours, addMinutes, isBefore, format } = require("date-fns");
const { Router } = require("express");

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index');
});

routes.post('/agendar-consulta', async (req, res) => {
    const mappedFieldsName = {
        name: 'Nome',
        lastName: 'Ultimo nome',
        cpf: 'CPF',
        birthdate: 'Data de nascimento',
        phone: 'Telefone',
        zipcode: 'CEP',
        address: 'Endereço',
        hospital: 'Clínica',
        specification: 'Especialidade',
        date: 'Data',
        hour: 'Hora',
        observation: 'Observações',
    }

    const data = {
        name: req.body.name,
        lastName: req.body.lastName,
        cpf: req.body.cpf,
        birthdate: req.body.birthdate,
        phone: req.body.phone,
        zipcode: req.body.zipcode,
        address: req.body.address,
        hospital: req.body.hospital,
        specification: req.body.specification,
        date: req.body.date,
        hour: req.body.hour,
        observation: req.body.observation,
    }

    const emptyFields = [];
    let isInvalid = false;
    let dateValidation = '';

    Object
        .entries(data)
        .forEach(([key, value]) => {
            if (!value) emptyFields.push({ target: mappedFieldsName[key], message: 'Não pode ser vazio!' });
        });

    if (data.date) {
        let date = new Date(data.date);
        const now = Date.now() - (1000 * 60 * 60 * 3);

        if (data.hour) {
            const [hour, minute] = data.hour.split(':').map(Number);

            date = addHours(date, hour || 0);
            date = addMinutes(date, minute || 0);
        }

        if (isBefore(date, now)) {
            const formattedDate = format(addHours(date, 3), `dd/MM/yyyy HH:mm`);

            dateValidation = `A data do agendamento ${formattedDate} está no passado!`;
        }
    }

    if (emptyFields.length || !!dateValidation) isInvalid = true;

    res.render('index', { invalid: isInvalid, invalids: emptyFields, data, invalidDate: dateValidation });
});

module.exports = routes;
