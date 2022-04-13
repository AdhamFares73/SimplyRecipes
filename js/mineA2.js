responseRecipes =[];

async function callingAbout() {
    let Respons = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`);
    let responseData = await Respons.json();
    responseRecipes = responseData.recipes;
  }



function displayData2() {
  let cartona2 =``;
  for (let i = 0; i < responseRecipes.length; i++) {
      if (i<4 && i >= 0) {
        cartona2 +=`<div class="col-md-4">
        <img src="${responseRecipes[i].image_url}" alt="" class="img-fluid rounded mb-3 imgThree">
        <h5>${responseRecipes[i].title}</h5>
        <p>publisher : ${responseRecipes[i].publisher}</p>
        </div>`
      }
    
  }
   document.getElementById("AboutData").innerHTML = cartona2;
  //console.log(cartona2);
}
(async function () {
    await callingAbout();
    await displayData2();
  })();
  