// Array of jokes
const jokes = [
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
    { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts." },
    { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
    { setup: "What do you get if you cross a snowman and a vampire?", punchline: "Frostbite." },
    { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
    { setup: "Why don’t some couples go to the gym?", punchline: "Because some relationships don’t work out." },
    { setup: "I would avoid the sushi if I was you.", punchline: "It’s a little fishy." },
    { setup: "Want to hear a joke about construction?", punchline: "I’m still working on it." },
    { setup: "Why don't programmers like nature?", punchline: "It has too many bugs." }
];

// Function to get a random joke
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Event listener for the button
document.getElementById('generateBtn').addEventListener('click', () => {
    const joke = getRandomJoke();
    document.getElementById('joke').innerText = `${joke.setup} - ${joke.punchline}`;
});
