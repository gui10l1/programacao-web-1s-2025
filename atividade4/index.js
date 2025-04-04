const express = require('express');
const fs = require('fs/promises');
const { createProduct, listProducts, deleteProduct, updateProduct } = require('./storage');

const APP_PORT = 8080;
const app = express();

app.get('/', async (req, res) => {
    const page = await fs.readFile('index.html', {
        encoding: 'utf8',
    });

    res.send(page);
});

app.get('/adicionar/:nome/:qtd', async (req, res) => {
    const { nome, qtd } = req.params;

    await createProduct({ nome, qtd });

    res.send('Produto adicionado com sucesso!');
});

app.get('/listar', async (req, res) => {
    res.send(await listProducts());
});

app.get('/remover/:id', async (req, res) => {
    const { id } = req.params;
    
    await deleteProduct(id);

    res.send('Produto removido com sucesso!');
});

app.get('/editar/:id/:qtd', async (req, res) => {
    const { id, qtd } = req.params;
    
    await updateProduct(id, qtd);

    res.send('Produto atualizado com sucesso!');
});

app.listen(APP_PORT, () => console.log(`Server started on port: ${APP_PORT}`));
