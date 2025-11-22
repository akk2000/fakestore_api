let list = ""; 
let tableRows = document.getElementById("table_rows");
let cardBody = document.getElementById("card_body")

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(result => {
    for(i =0; i < result.length; i++){
        list += `<tr onclick="showDetail(${result[i].id})">
                    <td>${result[i].id}</td>
                    <td>${result[i].title}</td>
                    <td>${result[i].price}$</td>
                    <td><img src="${result[i].image}" class="api_images"/></td>
                </tr> `;        
        tableRows.innerHTML = list;
    }
});

function showDetail(id){
    console.log(id);
    fetch("https://fakestoreapi.com/products/" + id)
    .then(response => response.json())
    .then(data => {
        cardBody.innerHTML = `   
        <img src="${data.image}">    
        <div class="card-data">      
            <h4>${data.title}</h4>
            <h6>${data.description} </h6>     
        </div>
        `;
    });
    

}

        