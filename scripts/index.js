import { buildingDetails } from "../data/buildings.js";

const searchBtn = document.querySelector('.js-search-btn');

function getInputValue(){
  const inputButtonValue = document.querySelector('.js-search-bar').value;
  return inputButtonValue;
}

  searchBtn.addEventListener('click', ()=>{
    const buildingName = getInputValue();
    displaybuildingCard(buildingName);
  });
  
function displaybuildingCard(buildingName){
  buildingDetails.forEach((building) => {
    if(buildingName.toLowerCase() === building.name.toLocaleLowerCase() || buildingName.toLowerCase() === building.id){
      const htmlCode = `<div class="building-card js-building-card">
        <div>
          <div class="img-container">
            <img class="building-img" src="../images/pics/${building.image}" alt="${building['image-alt']}">
          </div>
          <div class="building-info">
            <div>
              <img src="../images/icons/place_marker_40px.png" alt="">
              <p class="building-name">The University of Bamenda, ${building.name}</p>
            </div>
            <div>
              <img src="../images/icons/route_40px.png" alt="">
              <p class="building-direction">${building.direction}</p>
            </div>
            <div>
              <img src="./images/icons/resume_50px.png" alt="">
              <p class="building-description">${building.desc}</p>
            </div> 
            <div class="tel-container">
              <img src="../images/icons/ringing_phone_64px.png" alt="">
              <p><a href="tel:${building.tel}" class="tel">${building.tel}</a></p>
            </div> 
            <div class="website-container">
              <img src="../images/icons/website_64px.png" alt="">
              <p class="building-site"><a href="https://www.${building.website}">${building.website}</a></p>
            </div>
         </div>  
        </div>
        </div>`;
        document.querySelector('.js-map-container').innerHTML = htmlCode;
        if(building.tel === ''){
          document.querySelector('.tel-container').remove();
        }
        if(building.website === ''){
          document.querySelector('.website-container').remove();
        }
    }
});
}

const inputButton = document.querySelector('.js-search-bar');
inputButton.addEventListener('keydown', (event)=>{
  const buildingName = getInputValue();
  if(event.key === 'Enter'){
    displaybuildingCard(buildingName);
  }
});

document.querySelectorAll('.building').forEach((building) =>{
  const buildingId = building.id;
  building.addEventListener('click', ()=>{
    displaybuildingCard(buildingId);
    console.log('hello')
  });
});

document.querySelector('.js-delete-icon-btn').addEventListener('click', ()=> {
  const buildingCard = document.querySelector('.js-building-card');
  buildingCard.remove();
});
























