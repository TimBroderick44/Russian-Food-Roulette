// 1. Imports and Dependencies
import meals, { mealTypes } from "./meals.js";

// 2. Function Declarations

    // Function to update button text based on the current selection
function updateButtonText(mealButton, mealSelect) {
    mealButton.textContent = `Do I get to eat ${mealSelect.value} today?`;
}

    // Creates the loading screen.
function createLoadingScreen(menuContainer) {
    const loadingScreen = document.createElement("div");
    loadingScreen.className = "loading__block";
    loadingScreen.style.display = "none";
    menuContainer.appendChild(loadingScreen);

    const loadingImage = document.createElement("img");
    loadingImage.src = "./assets/1Vv.gif";
    loadingImage.className = "loading__block__image";
    loadingScreen.appendChild(loadingImage);

    const loadingText = document.createElement("p");
    loadingText.textContent = "Loading...";
    loadingText.className = "loading__block__text";
    loadingScreen.appendChild(loadingText);

    return loadingScreen;
}

    // Creates the meal elements
function createElements(menuContainer, meal) {
    const mealContainer = document.createElement("div");
    mealContainer.className = "meal__container";

    const mealName = document.createElement("h2");
    mealName.textContent = meal.name;
    mealName.className = "meal__container__name";

    const howToMakeThat = document.createElement("a");
    howToMakeThat.textContent = "How do you make that?";
    howToMakeThat.href = `https://www.google.com/search?q=${meal.name} + recipe`;
    howToMakeThat.target = "_blank";
    howToMakeThat.className = "meal__container__link";

    const mealImage = document.createElement("img");
    mealImage.src = meal.image || "./assets/starwars.gif";
    mealImage.className = "meal__container__image";

    mealContainer.appendChild(mealName);
    mealContainer.appendChild(howToMakeThat);
    mealContainer.appendChild(mealImage);

    menuContainer.appendChild(mealContainer);
}

    // Function for when there's no food
function youGoHungry(menuContainer) {
    const mealContainer = document.createElement("div");
    mealContainer.className = "meal__container";

    const mealName = document.createElement("h2");
    mealName.textContent = "You go hungry!";
    mealName.className = "meal__container__name";

    const mealImage = document.createElement("img");
    mealImage.src = "./assets/seinfeld.gif";
    mealImage.className = "meal__container__image";

    mealContainer.appendChild(mealName);
    mealContainer.appendChild(mealImage);

    menuContainer.appendChild(mealContainer);
}

    // Martyna's code
const randomFoodGenerator = (arr, mealType, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * arr.length);

            if (arr[randomIndex].type === mealType) {
                resolve(arr[randomIndex]);
            } else {
                reject("No meal found for the selected type");
            }
        }, delay);
    });
};

// 3. Executing Code and Event Listeners
window.onload = function () {
    // Container for styling
    const menuContainer = document.getElementById("menu__container");

    // Create a dropdown element
    const mealSelect = document.createElement("select");
    mealSelect.className = "meal__dropdown";

    // Create an option for each meal type
    mealTypes.forEach((type) => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        mealSelect.appendChild(option);
    });

    menuContainer.appendChild(mealSelect);

    // Create a button element
    const mealButton = document.createElement("button");
    mealButton.className = "meal__button";
    updateButtonText(mealButton, mealSelect);
    menuContainer.appendChild(mealButton);

    // Event listener: change the text of the button when there's a change detected
    mealSelect.addEventListener("change", () =>
        updateButtonText(mealButton, mealSelect)
    );

    // Cqreate a loading screen (starts off display: none)
    const loadingScreen = createLoadingScreen(menuContainer);

    mealButton.addEventListener("click", () => {
        // Event listener: when the button is clicked, show the loading screen and then display the meal
        loadingScreen.style.display = "flex";

        // Remove existing meal container if it exists
        const existingContainer = document.querySelector(".meal__container");
        if (existingContainer) {
            existingContainer.remove();
        }

        // Make it more unpredicatable
        let delay = Math.round(Math.random() * 10000);

        // Generate a random meal based on the selected meal type
        randomFoodGenerator(meals, mealSelect.value, delay)
            .then((meal) => {
                createElements(menuContainer, meal);
            })
            .catch((e) => {
                console.warn(e);
                youGoHungry(menuContainer);
            })
            .finally(() => {
                loadingScreen.style.display = "none";
            });
    });
};
