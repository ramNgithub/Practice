const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});




    // const locationInput = document.getElementById("locationInput");
    // const dateInput = document.getElementById("dateInput");
    // const membersInput = document.getElementById("memberInput");
    // const searchButton = document.getElementById("searchButton");
    // const resultsList = document.getElementById("resultsList");


    // searchButton.addEventListener("click", function(){
    //   // resultsList.innerHTML = '';

    //   const locationTerm = locationInput.value.toLowerCase();
    //   const dateTerm = dateInput.value;
    //   const membersTerm = parseInt(membersInput.value, 10);


    //   const filteredHotels = hotelData.filter(hotel =>
    //     hotel.location.toLowerCase() == locationTerm &&
    //     hotel.date === dateTerm &&
    //     hotel.capacity >= membersTerm
    //   );


    //   filteredHotels.forEach(hotel => {
    //     const li = document.createElement("li");
    //     li.textContent = `${hotel.name} - ${hotel.location} - Date: ${hotel.date} - Capacity: ${hotel.capacity}`;
    //     resultsList.appendChild(li);
    //   });
    //   window.location.href="hotelList.html";
      
    // })



const hotelData = [
  { name: "Taj Mahal Palace", location: "Mumbai", date: "2024/01/01", capacity: 200 },
  { name: "The Oberoi, New Mumbai", location: "Mumbai", date: "2024/01/01", capacity: 150 },
  { name: "ITC Grand Chola", location: "Delhi", date: "2024/01/02", capacity: 180 },
  { name: "The Leela Palace", location: "Delhi", date: "2024/01/02", capacity: 220 },
  { name: "JW Marriott Chennai Resort & Spa", location: "Chennai", date: "2024/01/03", capacity: 120 },
  { name: "Chennai Marriott Resort & Spa", location: "Chennai", date: "2024/01/03", capacity: 250 },
  { name: "Hyatt Regency Bangalore", location: "Bangalore", date: "2024/01/04", capacity: 200 },
  { name: "Radisson Blu Bangalore", location: "Bangalore", date: "2024/01/04", capacity: 180 },
  { name: "Sheraton Grand Goa", location: "Goa", date: "2024/01/05", capacity: 160 },
  { name: "ITC Windsor, Goa", location: "Goa", date: "2024/01/05", capacity: 190 },
  { name: "The Westin Hyderabad Mindspace", location: "Hyderabad", date: "2024/01/06", capacity: 220 },
  { name: "Radisson Blu Resort Temple Bay Mamallapuram", location: "Hyderabad", date: "2024/01/06", capacity: 180 },
  { name: "Le Méridien Jaipur Resort & Spa", location: "Jaipur", date: "2024/01/07", capacity: 150 },
  { name: "Novotel Jaipur Dona Sylvia Resort", location: "Jaipur", date: "2024/01/07", capacity: 200 },
  { name: "The Lalit Great Eastern Kolkata", location: "Kolkata", date: "2024/01/08", capacity: 170 },
  { name: "Vivanta by Taj - President, Kolkata", location: "Kolkata", date: "2024/01/08", capacity: 210 },
  { name: "Hyatt Regency Agra", location: "Agra", date: "2024/01/09", capacity: 230 },
  { name: "ITC Maurya, New Agra", location: "Agra", date: "2024/01/09", capacity: 190 },
  { name: "The Ritz - Carlton Kashmir", location: "Kashmir", date: "2024/01/10", capacity: 250 },
  { name: "Grand Hyatt Kashmir", location: "Kashmir", date: "2024/01/10", capacity: 220 },
  { name: "JW Marriott Hotel Mumbai", location: "Mumbai", date: "2024/01/11", capacity: 180 },
  { name: "Fairmont Bangalore", location: "Bangalore", date: "2024/01/11", capacity: 200 },
  { name: "Courtyard by Marriott Delhi", location: "Delhi", date: "2024/01/12", capacity: 150 },
  { name: "The Leela Ambience Convention Hotel, Delhi", location: "Delhi", date: "2024/01/12", capacity: 220 },
  { name: "Sheraton Grand Pune", location: "Pune", date: "2024/01/13", capacity: 160 },
  { name: "Hyatt Pune", location: "Pune", date: "2024/01/13", capacity: 180 },
  { name: "JW Marriott Hotel Pune", location: "Pune", date: "2024/01/13", capacity: 200 },
  { name: "The Westin Pune Koregaon Park", location: "Pune", date: "2024/01/05", capacity: 190 },
  { name: "Radisson Blu Hotel Pune Kharadi", location: "Pune", date: "2024/01/14", capacity: 170 },
  { name: "Novotel Pune Nagar Road", location: "Pune", date: "2024/01/14", capacity: 220 },
  { name: "Vivanta Pune, Hinjawadi", location: "Pune", date: "2024/01/01", capacity: 210 },
  { name: "DoubleTree by Hilton Pune - Chinchwad", location: "Pune", date: "2024/01/03", capacity: 200 },
  { name: "Courtyard by Marriott Pune Chakan", location: "Pune", date: "2024/01/05", capacity: 180 },
  { name: "Conrad Pune", location: "Pune", date: "2024/01/05", capacity: 230 },

];



const locationInput = document.getElementById("locationInput");
const dateInput = document.getElementById("dateInput");
const membersInput = document.getElementById("memberInput");
const searchButton = document.getElementById("searchButton");
const resultsList = document.getElementById("resultsList");

function bookNow(hotelName) {
 
  window.location.href = `personalDetails.html?hotel=${encodeURIComponent(hotelName)}`;
}

function openModal() {
  document.getElementById("searchResultModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("searchResultModal").style.display = "none";
   
}


// window.addEventListener("click", function(event) {
//   const modal = document.getElementById("searchResultModal");
//   if (event.target === modal) {
//     closeModal();
//   }

 


searchButton.addEventListener("click", function(event) {
  event.preventDefault();

  
  const locationTerm = locationInput.value.toLowerCase();
  const dateTerm = dateInput.value.replace(/-/g, '/'); ;
  const membersTerm = parseInt(membersInput.value, 10);

  

  const filteredHotels = hotelData.filter(hotel =>
    hotel.location.toLowerCase() === locationTerm &&
    hotel.date === dateTerm &&
    hotel.capacity >= membersTerm
  );
  

  if (filteredHotels.length === 0) {
    // No matching results, show a popup
    alert("No matching results found. Please try different search criteria.");
  }
  else{
    
    const modalResultsList = document.getElementById("modalResultsList");
    modalResultsList.innerHTML = '';
    filteredHotels.forEach(hotel => {
      const li = document.createElement("li");
      
  li.innerHTML = `${hotel.name} - ${hotel.location} - Date: ${hotel.date} - Capacity: ${hotel.capacity}
                 <button class="bookNowButton" onclick="bookNow('${hotel.name}')">Book Now</button>`;
  
      
      // li.addEventListener("click", function() {
      //   openHotelDescriptionModal(hotel);
      // });
      modalResultsList.appendChild(li);
    
     
    });
    openModal();
    // let cls =document.getElementById("Close");
    // cls.addEventListener("click",function(event){
    //   if(event.target)
    //   closeModal()
    // })
   
  }
  
  function isValidDateFormat(date) {
    const regex = /^\d{4}\/\d{2}\/\d{2}$/; // YYYY/MM/DD
    return regex.test(date);
  }

  
});


document.getElementById("checkBtn").addEventListener("click", function (event) {
  event.preventDefault();

  document.getElementById("searchSection").scrollIntoView({
    behavior: "smooth"
  });
});
document.getElementById("bookBtn").addEventListener("click", function (event) {
  event.preventDefault();

  document.getElementById("searchSection").scrollIntoView({
    behavior: "smooth"
  });
});
document.getElementById("onlineBookBtn").addEventListener("click", function (event) {
  event.preventDefault();

  

 
  document.getElementById("searchSection").scrollIntoView({
    behavior: "smooth"
  });
});

// Function to open the hotel description modal
// function openHotelDescriptionModal(hotel) {
//   const modal = document.getElementById("hotelDescriptionModal");
//   const hotelName = document.getElementById("hotelName");
//   const hotelDescription = document.getElementById("hotelDescription");

//   hotelName.textContent = hotel.name;
//   // Add hotel description or other details as needed
//   hotelDescription.textContent = "This is a sample description for the hotel.";

//   modal.style.display = "block";
// }

// Function to close the hotel description modal
// function closeModal() {
//   const modal = document.getElementById("hotelDescriptionModal");
//   modal.style.display = "none";
// }



function showRoomDetails(name, description, price) {
  document.getElementById("modalThreeRoomName").innerText = name;
  document.getElementById("modalThreeRoomDescription").innerText = description;
  document.getElementById("modalThreeRoomPrice").innerText = `Price: ₹${price}/night`;

  document.getElementById("threeroomModal").style.display = "block";
}

function closeRoomModal() {
  document.getElementById("threeroomModal").style.display = "none";
}