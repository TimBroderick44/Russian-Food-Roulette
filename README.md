<h1 style="font-weight: 900"> Russian (Food) Roulette (Promise Practise) </h1>

We were challenged to respond to the following promise:

```
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
```

## What did I use to create it?

This project uses:

-   HTML
-   SCSS
-   JS

## Features of the Project:

-   This app solves zero real-world problems. The user chooses a meal (i.e. Breakfast, lunch or dinner) and the app decides whether the user will eat or not. If they are allowed to eat, they are given food from an array and a link to a recipe for it.

<h1 style="font-weight: 900"> Here are some of the lessons I learnt:</h1>

## Able to handle promises using .then(), .catch() and .finally().

-   I was able to get good practise in learning how to handle promises.
-   I was able to get pratise (pronounced 'pretend') working with a synchronous functions (i.e. the fake loading screen while the data is being 'fetched')

## Thank You!

Thank you for taking the time to look at this project. I really hope you enjoy it.
Feel free to reach out and ask any questions.

[Tim Broderick]
