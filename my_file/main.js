// // JavaScript code for the Static Campus Map project

// // Sample dataset of campus buildings
// const campusBuildings = [
//     { name: 'Building A', coordinates: { x: 100, y: 150 } },
//     { name: 'Building B', coordinates: { x: 300, y: 200 } },
//     // Add more buildings with coordinates as needed
//   ];
  
//   // Function to create map elements and handle click interactions
//   function createCampusMap() {
//     const mapContainer = document.getElementById('map');
  
//     // Create elements for buildings on the map
//     campusBuildings.forEach(building => {
//       const buildingElement = document.createElement('div');
//       buildingElement.classList.add('building');
//       buildingElement.textContent = building.name;
//       buildingElement.style.left = `${building.coordinates.x}px`;
//       buildingElement.style.top = `${building.coordinates.y}px`;
  
//       // Add click event to show building details
//       buildingElement.addEventListener('click', () => {
//         alert(`Clicked on ${building.name}`);
//         // You can add more functionality here to display building details
//       });
  
//       mapContainer.appendChild(buildingElement);
//     });
//   }
  
//   // Call the function to create the campus map when the page loads
//   window.onload = createCampusMap;
  



// JavaScript code for the Static Campus Map project

// Sample dataset of campus buildings with details
const campusBuildings = [
    { 
      name: 'Building A', 
      coordinates: { x: 100, y: 150 }, 
      description: 'This is Building A. It houses the Science Department.',
      image: 'building_a.jpg',
      road: 'Main Street'
    },
    { 
      name: 'Building B', 
      coordinates: { x: 300, y: 200 }, 
      description: 'This is Building B. It is the Library building.',
      image: 'building_b.jpg',
      road: 'Library Avenue'
    },
    // Add more buildings with coordinates and details as needed
  ];
  
  // Function to create map elements and handle click interactions
  function createCampusMap() {
    const mapContainer = document.getElementById('map');
    const buildingDetails = document.getElementById('buildingDetails');
    const buildingName = document.getElementById('buildingName');
    const buildingDescription = document.getElementById('buildingDescription');
    const buildingImage = document.getElementById('buildingImage');
    const road = document.getElementById('road');
  
    // Create elements for buildings on the map
    campusBuildings.forEach(building => {
      const buildingElement = document.createElement('div');
      buildingElement.classList.add('building');
      buildingElement.textContent = building.name;
      buildingElement.style.left = `${building.coordinates.x}px`;
      buildingElement.style.top = `${building.coordinates.y}px`;
  
      // Add click event to show building details
      buildingElement.addEventListener('click', () => {
        buildingName.textContent = building.name;
        buildingDescription.textContent = building.description;
        buildingImage.src = building.image;
        road.textContent = building.road;
  
        buildingDetails.classList.remove('hidden');
      });
  
      mapContainer.appendChild(buildingElement);
    });
  
    // Hide building details when clicked outside the details box
    document.addEventListener('click', function(event) {
      if (!buildingDetails.contains(event.target)) {
        buildingDetails.classList.add('hidden');
      }
    });
  }
  
  // Call the function to create the campus map when the page loads
  window.onload = createCampusMap;
  