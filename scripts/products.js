$(document).ready(function(){

    //$("#header").load("menu.html");

});


loadProducts();

function loadProducts() {

    var productsTable = document.getElementById("productsTable");

    if (productsTable != null)
    {
        var rows = "<tr><th>Navn</th><th>Beskrivelse</th><th>Pris</th></tr>";

        if (localStorage.products)
        {
            var products = JSON.parse(localStorage.products);
            products.forEach(element => {
                rows += "<tr><td>" + element.name + "</td><td>" + element.description + "</td><td>" + element.price + "</td></tr>";
            });   
        }
        
        productsTable.innerHTML = rows;
    }   
}

function saveProduct() {
                
    var products = [];
    if (localStorage.products)
    {
        products = JSON.parse(localStorage.products);
    }


    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
    
    var product = {
        name: name,
        description: description,
        price: price
    };

    products.push(product);
    localStorage.products = JSON.stringify(products);

    document.getElementById("name").value = "";
    document.getElementById("description").value  = "";
    document.getElementById("price").value  = "";
    alert("Produkt tilføjet")
}