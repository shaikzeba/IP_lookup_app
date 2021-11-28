const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");

lookupBtn.addEventListener("click", function(){
  loader.style.display = "flex";
  details.style.display = "none";
  axios.get("https://ipapi.co/json/").then(response => {

    loader.style.display = "none";
    details.style.display = "block";

    ipDisplay.textContent = `IP ADDRESS : ${response.data.ip}`;

    locDisplay.textContent = `LOCATION : ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;

    geoDisplay.textContent = `GEO-LOCATION : ${response.data.latitude}, ${response.data.longitude}`;

  });
});
