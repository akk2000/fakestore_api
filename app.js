let list = ""; 
let tableRows = document.getElementById("table_rows");

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(result => {
    for(i =0; i < result.length; i++){
        list += `<tr>
                    <td>${result[i].id}</td>
                    <td>${result[i].category}</td>
                    <td>${result[i].price}</td>
                    <td><img src="${result[i].image}" class="api_images"/></td>
                </tr> `;
        tableRows.innerHTML = list;
    }
    
});

        