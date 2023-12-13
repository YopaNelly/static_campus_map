import { buildingDetails } from "../data/buildings.js";

const searchBtn = document.querySelector('.js-search-btn');

function getInputValue(){
  const inputButtonValue = document.querySelector('.js-search-bar').value;
  return inputButtonValue;
}

  searchBtn.addEventListener('click', ()=>{
    displaybuildingCard();
  });


function displaybuildingCard(){
  getInputValue()
  const buildingName = getInputValue();
  buildingDetails.forEach((building) => {
    if(buildingName.toLowerCase() === building.name.toLocaleLowerCase() || buildingName.toLowerCase() === building.id){
      const htmlCode = `<div class="building-card js-building-card">
        <figure>
          <div class="img-container">
            <img class="building-img" src="./images/pics/${building.image}" alt="${building['image-alt']}">
            <button onclick="const buildingCard = document.querySelector('.js-building-card');
            buildingCard.remove();" class="delete-icon-btn js-delete-icon-btn"><img src="./images/icons/delete.svg" class="delete-icon"></button>
          </div>
          <div class="building-info">
            <div>
              <img src="./images/icons/location_64px.png" alt="">
              <p class="building-name">The University of Bamenda, ${building.name}</p>
            </div>
            <div>
              <img src="./images/icons/route_32px.png" alt="">
              <p class="building-direction">${building.direction}</p>
            </div>
            <div>
              <img src="./images/icons/resume_50px.png" alt="">
              <p class="building-description">${building.desc}</p>
            </div> 
            <div class="tel-container">
              <img src="./images/icons/phone_50px.png" alt="">
              <p><a href="tel:${building.tel}" class="tel">${building.tel}</a></p>
            </div> 
            <div class="website-container">
              <img src="./images/icons/globe_24px.png" alt="">
              <p class="building-site"><a href="https://www.${building.website}">${building.website}</a></p>
            </div>
         </div>  
        </figure>
        </div>`;
        document.querySelector('.js-map-container').innerHTML = htmlCode;
        if(building.tel === ''){
          document.querySelector('.tel-container').remove();
        }
        else if(building.website === ''){
          document.querySelector('.website-container').remove();
        }
    }
});
}

const inputButton = document.querySelector('.js-search-bar');
inputButton.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    displaybuildingCard();
  }
});

document.querySelectorAll('.building');
















