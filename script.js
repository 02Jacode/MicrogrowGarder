
function underline(temp){
    temp.style.color = '#73913f';
    temp.style.textDecoration = 'underline'; 
 
    temp.style.textDecorationColor = '#73913f';
    temp.style.textDecorationThickness = '.2rem';
}
function removeUnderline(temp){
    temp.style.textDecoration = 'none'; 
    temp.style.color = '#546931';
}


let homeLink = document.querySelector('#homeLink');
let plantLink = document.querySelector('#plantLink');
let supLink = document.querySelector('#supLink');
let storeLink = document.querySelector('#storeLink');
let contactLink = document.querySelector('#contactLink');

// for nav bar
document.querySelector('#homeLink').addEventListener('click', function(){
    underline(homeLink);
    removeUnderline(plantLink);
    removeUnderline(supLink);
    removeUnderline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#plantLink').addEventListener('click', function(){
    
    removeUnderline(homeLink);
    underline(plantLink);
    removeUnderline(supLink);
    removeUnderline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#supLink').addEventListener('click', function(){
    removeUnderline(homeLink);
    removeUnderline(plantLink);
    underline(supLink);
    removeUnderline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#storeLink').addEventListener('click', function(){
    removeUnderline(homeLink);
    removeUnderline(plantLink);
    removeUnderline(supLink);
    underline(storeLink);
    removeUnderline(contactLink);
})
document.querySelector('#contactLink').addEventListener('click', function(){
    removeUnderline(homeLink);
    removeUnderline(plantLink);
    removeUnderline(supLink);
    removeUnderline(storeLink);
    underline(contactLink);
})


// for product
document.querySelector("#viewAllPlant").addEventListener("click", function () {
    document.querySelector("#viewAllPlant").style.display = "none";
    document.querySelector("#showPlant").style.display = "flex";
    document.querySelector("#collapsePlant").style.display = "inline";
})
document.querySelector("#collapsePlant").addEventListener("click", function () {
    document.querySelector("#viewAllPlant").style.display = "inline";
    document.querySelector("#showPlant").style.display = "none";
    document.querySelector("#collapsePlant").style.display = "none";

})
// for plant
document.querySelector("#viewAllPot").addEventListener("click", function () {
    document.querySelector("#viewAllPot").style.display = "none";
    document.querySelector("#showPot").style.display = "flex";
    document.querySelector("#collapseAllPot").style.display = "inline";
})
document.querySelector("#collapseAllPot").addEventListener("click", function () {
    document.querySelector("#viewAllPot").style.display = "inline";
    document.querySelector("#showPot").style.display = "none";
    document.querySelector("#collapseAllPot").style.display = "none";

})
// for supply
document.querySelector("#viewAllSupply").addEventListener("click", function () {
    document.querySelector("#viewAllSupply").style.display = "none";
    document.querySelector("#showSupply").style.display = "flex";
    document.querySelector("#collapseAllSupply").style.display = "inline";
})
document.querySelector("#collapseAllSupply").addEventListener("click", function () {
    document.querySelector("#viewAllSupply").style.display = "inline";
    document.querySelector("#showSupply").style.display = "none";
    document.querySelector("#collapseAllSupply").style.display = "none";

})


//for plant
var plantCards = document.querySelectorAll('.productCard');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("click", function () {
        plantCard.querySelector('.filter').style.display = 'block';
        plantCard.querySelector('.description').style.display = 'block';
    });
});
var plantCards = document.querySelectorAll('.productCardplant');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("click", function () {
        plantCard.querySelector('.filter').style.display = 'block';
        plantCard.querySelector('.description').style.display = 'block';
    });
});

var plantCards = document.querySelectorAll('.productCard');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseleave", function () {
        plantCard.querySelector('.filter').style.display = 'none';
        plantCard.querySelector('.description').style.display = 'none';
        plantCard.querySelector('img').style.height = '22rem';
        plantCard.querySelector('img').style.width = '18rem';
    });
});
var plantCards = document.querySelectorAll('.productCardplant');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseleave", function () {
        plantCard.querySelector('.filter').style.display = 'none';
        plantCard.querySelector('.description').style.display = 'none';
        plantCard.querySelector('img').style.height = '22rem';
        plantCard.querySelector('img').style.width = '18rem';
    });
});

//delete later
var plantCards = document.querySelectorAll('.productCard');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseover", function () {
        plantCard.querySelector('img').style.height = '30rem';
        plantCard.querySelector('img').style.width = '26rem';
    });
});
var plantCards = document.querySelectorAll('.productCardplant');
plantCards.forEach(function (plantCard) {
    plantCard.addEventListener("mouseover", function () {
        plantCard.querySelector('img').style.height = '30rem';
        plantCard.querySelector('img').style.width = '26rem';
    });
});

let viewPotButtonTxt = document.querySelector("#viewPot");
let viewSupplyButtonTxt = document.querySelector("#viewSupply");

document.querySelector("#viewPot").addEventListener("click", function () {
    document.querySelector("#wrapperPot").style.display = "flex";
    document.querySelector("#wrapperSupply").style.display = "none";

    document.querySelector("#potButtonWrapper").style.display = "block";
    document.querySelector("#supplyButtonWrapper").style.display = "none";
    
    document.querySelector("#potTitle").style.display = "block";
    document.querySelector("#supplyTitle").style.display = "none"; 

    underline(viewPotButtonTxt);
    removeUnderline(viewSupplyButtonTxt);
})

document.querySelector("#viewSupply").addEventListener("click", function () {
    document.querySelector("#wrapperPot").style.display = "none";
    document.querySelector("#wrapperSupply").style.display = "flex";

    document.querySelector("#potButtonWrapper").style.display = "none";
    document.querySelector("#supplyButtonWrapper").style.display = "block"; 

    document.querySelector("#potTitle").style.display = "none";
    document.querySelector("#supplyTitle").style.display = "block"; 

    removeUnderline(viewPotButtonTxt);
    underline(viewSupplyButtonTxt);
})















// Function to filter products based on search query
const filterProducts = (query) => {
    const searchTerm = query.toLowerCase().trim();
    allProducts.forEach((product) => {
        const productName = product.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = "flex"; // Show matching products
        } else {
            product.style.display = "none"; // Hide non-matching products
        }
    });
};

// Event listener for the search input
searchInput.addEventListener("input", function (event) {
    const searchQuery = event.target.value.trim(); // Get the search query

    // If the search query is not empty
    if (searchQuery !== "") {
        filterProducts(searchQuery); // Filter products based on the query
    } else {
        // If the search query is empty, display all products
        allProducts.forEach((product) => {
            product.style.display = "flex";
        });
    }
});
;
// Get the modal element and the link that triggers the modal
const modal = document.getElementById('contactModal');
const link = document.getElementById('contactLink');

// Function to display/hide the modal when the link is clicked
link.addEventListener('click', function(event) {
event.preventDefault(); // Prevent the default behavior of the anchor tag
modal.classList.toggle('show-modal'); // Toggle the visibility of the modal
});

// Close the modal when the close button is clicked
const closeBtn = document.querySelector('.modal-content .close');
closeBtn.addEventListener('click', function() {
modal.classList.remove('show-modal');
});

