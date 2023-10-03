let arr = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneer-tikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fish-tacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

// Add this to your JavaScript file or script tag at the end of your HTML body

function toggleMenu() {
  var sideNav = document.getElementById("sideNav");
  var menuBtn = document.getElementById("menuBtn");
  var closeBtn = document.getElementById("close");

  if (sideNav.style.width === "50%") {
    sideNav.style.width = "0";
    menuBtn.innerHTML = "☰ Menu";
  } else {
    sideNav.style.width = "50%";
    closeBtn.innerHTML = "&times; Close";
  }
}

function addRecipes() {
  // Get the container element
  var container = document.getElementById("parent");

  // Loop through the array and create elements for each recipe
  arr.forEach(function (recipe, index) {
    // Create a new div element for the recipe
    var recipeDiv = document.createElement("div");

    // Add the "card" class to the recipe div
    recipeDiv.classList.add("card");

    // Set the HTML content for the recipe div
    recipeDiv.innerHTML = `
            <div class="card-img">
                <img id="recipeImage_${index}" height="100%" width="100%" src="${
      recipe.imageSrc
    }" alt="${recipe.name}">
            </div>
            <div class="type">${recipe.type}</div>
            <div class="food-name">
                <h1>${recipe.name}</h1>
                <div class="star-rate">
                    <img src="./images/Star.svg" alt="">
                    <label>${recipe.rating}</label>
                </div>
            </div>
            <div class="time">
                <div class="time-text">${recipe.time}</div>
                <div class="icons">
                    <img height="23px" id="likeImage_${index}" onclick="toggleLike(${index}, ${
      recipe.isLiked
    })" src="${
      recipe.isLiked ? "./images/like.png" : "./images/unlike.png"
    }" alt="">
                    <img src="./images/comments.png" alt="">
                </div>
            </div>
        `;

    // Append the recipe div to the container
    container.appendChild(recipeDiv);
  });

  // Call the function to filter recipes when the search input changes
  document.getElementById("search").addEventListener("input", filterRecipes);
  // Call the function to filter recipes when the rating checkboxes change
  document.getElementById("above4").addEventListener("change", filterRecipes);
  document.getElementById("below4").addEventListener("change", filterRecipes);
}
// Function to filter recipes based on the search input and ratings
function filterRecipes() {
  // Get the search input value
  var searchTerm = document.getElementById("search").value.toLowerCase();

  // Get the checkboxes for ratings
  var above4Checkbox = document.getElementById("above4");
  var below4Checkbox = document.getElementById("below4");

  // Get all recipe cards
  var recipeCards = document.querySelectorAll(".card");

  // Loop through each recipe card and check if it matches the search term and rating criteria
  recipeCards.forEach(function (recipeCard) {
    var recipeName = recipeCard
      .querySelector(".food-name h1")
      .textContent.toLowerCase();
    var recipeRating = parseFloat(
      recipeCard.querySelector(".star-rate label").textContent
    );

    // Check if the recipe name contains the search term
    var nameMatches = recipeName.includes(searchTerm);

    // Check if the rating criteria match
    var above4Matches =
      !above4Checkbox.checked || (above4Checkbox.checked && recipeRating >= 4);
    var below4Matches =
      !below4Checkbox.checked || (below4Checkbox.checked && recipeRating < 4);

    // If both checkboxes are selected, show the card; otherwise, check individual criteria
    if (
      (above4Checkbox.checked && below4Checkbox.checked) ||
      (nameMatches && above4Matches && below4Matches)
    ) {
      recipeCard.style.display = "block";
    } else {
      recipeCard.style.display = "none";
    }
  });
}

// Function to filter recipes based on the selected type
function filterByType(type) {
  // Get all recipe cards
  var recipeCards = document.querySelectorAll(".card");

  // Loop through each recipe card and check if it matches the selected type
  recipeCards.forEach(function (recipeCard) {
    var recipeType = recipeCard
      .querySelector(".type")
      .textContent.toLowerCase();

    // If the selected type is "all" or matches the recipe type, show the card; otherwise, hide it
    if (type === "all" || type === recipeType) {
      recipeCard.style.display = "block";
    } else {
      recipeCard.style.display = "none";
    }
  });

  // Update the checkboxes to show all ratings when a type filter is applied
  document.getElementById("above4").checked = false;
  document.getElementById("below4").checked = false;
}

// Function to toggle the "like" status
function toggleLike(index) {
  // Get the "like" image element
  var likeImage = document.getElementById(`likeImage_${index}`);

  // Toggle the like status (update the array, backend, etc.)
  arr[index].isLiked = !arr[index].isLiked;

  // Update the image source based on the like status
  likeImage.src = arr[index].isLiked
    ? "./images/like.png"
    : "./images/unlike.png";

  // Show an alert message based on the current like status
  // alert(arr[index].isLiked ? "Recipe Liked" : "Recipe Unliked");
}

// Call the function to add recipes when the page loads
window.onload = addRecipes;
