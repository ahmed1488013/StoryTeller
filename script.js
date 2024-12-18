// Sample Story Paths
const storyPaths = {
    start: {
        text: "Once upon a time, in a land far away, there lived a curious traveler. The traveler came across two paths. Which one will they take?",
        choices: [
            { text: "Take the forest path", next: "forest" },
            { text: "Take the mountain path", next: "mountain" }
        ]
    },
    forest: {
        text: "The forest path is dark and mysterious. You hear strange sounds around you. Do you keep walking or turn back?",
        choices: [
            { text: "Keep walking", next: "deepForest" },
            { text: "Turn back", next: "start" }
        ]
    },
    mountain: {
        text: "The mountain path is steep and challenging. After a long climb, you reach a cliff. Do you continue up or rest?",
        choices: [
            { text: "Continue up", next: "summit" },
            { text: "Rest", next: "start" }
        ]
    },
    deepForest: {
        text: "The deeper you go into the forest, the darker it becomes. Suddenly, you find a hidden village. Do you explore it?",
        choices: [
            { text: "Explore the village", next: "village" },
            { text: "Leave the forest", next: "start" }
        ]
    },
    summit: {
        text: "You’ve reached the summit of the mountain. The view is breathtaking. Do you want to take a photo or descend?",
        choices: [
            { text: "Take a photo", next: "photo" },
            { text: "Descend", next: "start" }
        ]
    },
    village: {
        text: "The village is full of life and mystery. A local offers you a tour. Do you accept?",
        choices: [
            { text: "Accept the tour", next: "tour" },
            { text: "Decline", next: "start" }
        ]
    },
    photo: {
        text: "You take a beautiful photo and savor the moment. As you descend, you feel accomplished. Your journey ends here. The End.",
        choices: []
    },
    tour: {
        text: "The village tour takes you to fascinating places. You discover ancient artifacts and learn about the culture. Your journey ends here. The End.",
        choices: []
    }
};

// Initialize the Story
let currentStoryPath = "start";

function renderStory(path) {
    const storyData = storyPaths[path];
    const storyText = document.getElementById("story-text");
    const choicesContainer = document.getElementById("choices-container");

    // Set the story text
    storyText.textContent = storyData.text;

    // Clear existing choices
    choicesContainer.innerHTML = "";

    // Add new choices
    storyData.choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("choice-button");
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            currentStoryPath = choice.next;
            renderStory(currentStoryPath);
        });
        choicesContainer.appendChild(button);
    });
}

// Load the initial story
renderStory(currentStoryPath);
