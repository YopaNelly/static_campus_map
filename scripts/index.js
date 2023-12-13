import { buildingDetails } from "../data/buildings.js";

const searchBtn = document.querySelector('.js-search-btn');

const myPath = document.getElementById('school-field');

function getInputValue(){
  const inputButtonValue = document.querySelector('.js-search-bar').value;
  return inputButtonValue;
}

  searchBtn.addEventListener('click', ()=>{
    const buildingName = getInputValue();
    displaybuildingCard(buildingName);
  });
  


  myPath.addEventListener('click', ()=>{
    const elementId = myPath.id
    displaybuildingCard(elementId);
    console.log('hello');
  })



function displaybuildingCard(buildingName) {
  buildingDetails.forEach((building) => {
    if (
      buildingName.toLowerCase() === building.name.toLowerCase() ||
      buildingName.toLowerCase() === building.id
    ) {
      const buildingCard = document.createElement("div");
      buildingCard.classList.add("building-card", "js-building-card");

      const closeButton = document.createElement("button");
      closeButton.classList.add("close-button", "js-close-button");
      closeButton.innerHTML = "&times;";

      closeButton.addEventListener("click", () => {
        buildingCard.remove();
      });

      const buildingContent = document.createElement("div");
      buildingContent.innerHTML = `
        <div>
          <div class="img-container">
            <img class="building-img" src="./images/pics/${building.image}" alt="${building["image-alt"]}">
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
      `;

      buildingCard.appendChild(closeButton);
      buildingCard.appendChild(buildingContent);

      document.querySelector(".js-map-container").innerHTML = "";
      document.querySelector(".js-map-container").appendChild(buildingCard);

      if (building.tel === "") {
        document.querySelector(".tel-container").remove();
      } else if (building.website === "") {
        document.querySelector(".website-container").remove();
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






















