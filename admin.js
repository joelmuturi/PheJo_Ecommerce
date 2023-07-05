let products= [
    {id: 1, name: 'Desktop', price: 45$, image: 'Admin pics/Desktop.jpg'},
    {id: 1, name: 'Laptop', price: 25$, image: 'Admin pics/Laptop.jpg'},
    {id: 1, name: 'Headphone', price: 10$, image: 'Admin pics/Headphones.png'},
];
//function to render the product list
function renderProductList() {
    const productList=document.getElementById('product-list');
    productList.innerHTML= '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><img src="${product.image}" alt="Product Image" width="50"></td>
        <td><button onclick="deleteProduct(${product.id})">Delete</button></td>
        `;
        productList.appendChild(row);
    });
}
//add new product
function addProduct(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const imageInput = document.getElementById('image');
    const newProduct= {
        id: products.length + 1,
        name: nameInput.value,
        price: parseFloat(priceInput.value),
        image: URL.createObjectURL(imageInput.files[0])
    };
    products.push(newProduct);
    nameInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
    renderProductList();
}
function deleteProduct(productId) {
    const index = products.findIndex(product => product.id ===productId);
    if(index !== -1){
        products.splice(index, 1);
        renderProductList();
    }
}