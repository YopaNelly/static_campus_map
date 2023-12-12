import { locationDetails } from "../data/locations.js";

const searchBtn = document.querySelector('.js-search-btn');

function getInputValue(){
  const inputButtonValue = document.querySelector('.js-search-bar').value;
  return inputButtonValue;
}

  searchBtn.addEventListener('click', ()=>{
    displaySideBar();
  });


function displaySideBar(){
  getInputValue()
  const locationName = getInputValue();
  locationDetails.forEach((location) => {
    if(locationName.toLowerCase() === location.name.toLocaleLowerCase() || locationName.toLowerCase() === location.id){
        const htmlCode = `<div class="location-card js-location-card">
        <figure>
          <div class="img-container">
            <img class="location-img" src="/images/pics/${location.image}" alt="${location['image-alt']}">
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
            <div class="tel-container">
              <img src="/images/icons/phone_50px.png" alt="">
              <p><a href="tel:${location.tel}" class="tel">${location.tel}</a></p>
            </div> 
            <div class="website-container">
              <img src="/images/icons/globe_24px.png" alt="">
              <p class="location-site"><a href="https://www.${location.website}">${location.website}</a></p>
            </div>
         </div>  
        </figure>
        </div>`;
        document.querySelector('.js-map-container').innerHTML = htmlCode;
        if(location.tel === ''){
          document.querySelector('.tel-container').remove();
        }
        else if(location.website === ''){
          document.querySelector('.website-container').remove();
        }
    }
});
}

const inputButton = document.querySelector('.js-search-bar');
inputButton.addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    displaySideBar();
  }
});

document.querySelectorAll('.building');
















