
let responseRecipes =[];
let pizza = document.getElementById("pizza");
let Onion = document.getElementById("Onion");
let Cherry = document.getElementById("Cherry");
let Melon = document.getElementById("Melon");

async function calling(DataApi) {
  let Respons = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${DataApi}`);
  let responseData = await Respons.json();
  responseRecipes = responseData.recipes;
  // console.log(responseRecipes)
}

function displayData() {
  let cartona =``;
  for (let i = 0; i < responseRecipes.length; i++) {
    if (i<4 && i>=0) {
      cartona+=`<div class="col-md-4">
    <img src="${responseRecipes[i].image_url}" alt="" class="img-fluid rounded mb-3 imgThree">
    <h5>${responseRecipes[i].title}</h5>
    <p>publisher : ${responseRecipes[i].publisher}</p>
</div>`
    }
  }
  document.getElementById("DataRow").innerHTML = cartona;
}

(async function () {
  await calling('pizza');
  await displayData();
})();


pizza.addEventListener('click',async function () {
  await calling('pizza');
  await displayData();
})
Onion.addEventListener('click',async function () {
  await calling('Onion');
  await displayData();
})


Cherry.addEventListener('click',async function () {
  await calling('Cherry');
  await displayData();
})

Melon.addEventListener('click',async function () {
  await calling('Melon');
  await displayData();
})

