//Fake stores API
var title = document.createElement('div');
title.className="title";
title.innerHTML="Fake Store";

var container = document.createElement("div");
container.className="container"

var row = document.createElement("div");
row.className = "row"

//fetching info from API using async and await function 
async function foo(){
    var ele = await fetch("https://fakestoreapi.com/products")
    var ele2 = await ele.json();
    console.log(ele2);
    //using for loop to Get and Display every element 
    for (var i=0;i<ele2.length;i++){
        var col = document.createElement("div");
        col.className = "row"
        col.innerHTML  = `<div class="card" style="width: 22rem;">
        <img src="${ele2[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5>${ele2[i].title}</h5>
          <h6>${ele2[i].category}</h6>
          <p>${ele2[i].description}</p>
          <h6>Price : ${ele2[i].price}</h6>
          <button type='button'>Buy</button>
        </div>
      </div>`  
  row.append(col);
  container.append(title,row);
  document.body.append(container);
}
}
foo()