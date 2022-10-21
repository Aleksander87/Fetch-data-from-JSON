fetch("produkty.json")
.then(function(response) {
    return response.json();
})

.then(function(produkty) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let product of produkty) {
        out +=`

        <tr>
            <td> <img src='${product.image}'> </td>
            <td>${product.name}</td>
            <td>${product.inventory}</td>
            <td>${product.productCode}</td>
            <td>${product.price}</td>
        </tr>
        `;
    }

    placeholder.innerHTML = out;
})