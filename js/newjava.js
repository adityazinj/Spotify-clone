let songs = [
    "http://127.0.0.1:5500/Projects/Spotify-Clone/Songs/goat.mp3",
    "http://127.0.0.1:5500/Projects/Spotify-Clone/Songs/bhulaDena.mp3",
    "http://127.0.0.1:5500/Projects/Spotify-Clone/Songs/Ilahi.mp3",
    "http://127.0.0.1:5500/Projects/Spotify-Clone/Songs/glory.mp3",
    "http://127.0.0.1:5500/Projects/Spotify-Clone/Songs/photo.mp3",
    "http://127.0.0.1:5500/Projects/Spotify-Clone/Songs/raanjhan.mp3",
];

let currentAudio = new Audio(); // Only one audio instance

function getRandomSong() {
    let randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}

function playSong(songUrl) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.src = songUrl;
    currentAudio.play();
}

function playFunction() {
    playSong(getRandomSong());
}

function prevFunction() {
    playSong(getRandomSong());
}

function nextFunction() {
    playSong(getRandomSong());
}

// Attach event listeners to actual buttons
document.querySelector(".playTheSong").addEventListener("click", playFunction);
document.querySelector(".prevsong").addEventListener("click", prevFunction);
document.querySelector(".nextsong").addEventListener("click", nextFunction);
