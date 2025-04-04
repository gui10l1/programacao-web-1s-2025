const products = [];

async function createProduct(data) {
    const { nome, qtd } = data;

    const product = {
        id: products.length + 1,
        name: nome,
        quantity: Number(qtd) || 1,
    };

    products.push(product);

    return product;
}

async function listProducts() {
    return products;
}

async function deleteProduct(id) {
    const productId = Number(id);

    const productIndex = products.findIndex(
        product => product.id === productId,
    );

    if (productIndex < 0) {
        return;
    }

    products.splice(productIndex, 1);
}

async function updateProduct(id, quantity) {
    const productId = Number(id);

    const productIndex = products.findIndex(
        product => product.id === productId,
    );

    if (productIndex < 0) {
        return;
    }

    const product = products.at(productIndex);
    const updatedProduct = { ...product, quantity: Number(quantity) || product.quantity };

    products.splice(productIndex, 1, updatedProduct);
}

module.exports = {
    createProduct,
    listProducts,
    deleteProduct,
    updateProduct
};
