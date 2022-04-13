let responseRecipes=[];
async function DataApi () {
    let Respons = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=onion`);
    let responseData = await Respons.json();
    responseRecipes = responseData.recipes;
};


function displayData() {
    let cartona =``;
    for (let i = 0; i < responseRecipes.length; i++) {
      cartona+=`<div class="col-md-4">
      <img src="${responseRecipes[i].image_url}" alt="" class="img-fluid rounded mb-3 imgThree">
      <h5>${responseRecipes[i].title}</h5>
      <p>publisher : ${responseRecipes[i].publisher}</p>
  </div>`
    }
    document.getElementById("DataRow").innerHTML = cartona;
  }

(async function () {
    await DataApi();
    await displayData();
})();