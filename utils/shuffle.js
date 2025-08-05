// utils/shuffle.js

// Function to shuffle an array randomly
export const shuffleArray = (array) => {
    let shuffledArray = [...array];  // Copy the array to avoid mutating the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };
  

  