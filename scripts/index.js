import { locationDetails } from "../data/locations.js";

const searchBtn = document.querySelector('.js-search-btn');

searchBtn.addEventListener('click', ()=>{
  const inputButton = document.querySelector('.js-search-bar');
  const locationName = inputButton.value
  displaySideBar(locationName);
});

function displaySideBar(locationName){
  locationDetails.forEach((location) => {
    if(locationName.toLowerCase() === location.name){
        const htmlCode = `<div class="location-card js-location-card">
        <figure>
          <div class="img-container">
            <img class="location-img" src="images/${location.image}.jpg" alt="naphi-image">
            <button onclick="const sideBar = document.querySelector('.js-location-card');
            sideBar.remove();" class="delete-icon-btn js-delete-icon-btn"><img src="/images/icons/delete.svg" class="delete-icon"></button>
          </div>
          <div class="location-info">
            <div>
              <img src="/images/icons/location_64px.png" alt="">
              <p class="location-name">The University of Bamenda, ${location.name}</p>
            </div>
            <div>
              <img src="/images/icons/route_32px.png" alt="">
              <p class="location-direction">${location.direction}</p>
            </div>
            <div>
              <img src="/images/icons/resume_50px.png" alt="">
              <p class="location-description">${location.desc}</p>
            </div> 
            <div>
              <img src="/images/icons/phone_50px.png" alt="">
              <p><a href="tel:${location.tel}" class="tel">${location.tel}</a></p>
            </div> 
            <div>
              <img src="/images/icons/globe_24px.png" alt="">
              <p class="location-site"><a href="https://www.${location.site}">${location.site}</a></p>
            </div>
         </div>  
        </figure>
        </div>`;
        document.querySelector('.js-map-container').innerHTML = htmlCode;
    }
    else{
        alert('Not found');
    }
});
}

const pathButton = document.querySelectorAll('.building');

pathButton.forEach(building =>{
  building.addEventListener('click', ()=>{
    displaySideBar();
  });
});















