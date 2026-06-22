// Verified, mobile-friendly games with real Playvio-style thumbnails
const games = [
    { 
        name: "Moto X3M", 
        thumb: "https://img.gamedistribution.com/6c0a0df2555541609121855e714d2328-512x512.jpeg", 
        url: "https://html5.gamedistribution.com/6c0a0df2555541609121855e714d2328/" 
    },
    { 
        name: "Stickman Hook", 
        thumb: "https://img.gamedistribution.com/830b5e3ed5c345b59714878a1005a769-512x512.jpeg", 
        url: "https://html5.gamedistribution.com/830b5e3ed5c345b59714878a1005a769/" 
    },
    { 
        name: "Vex 7", 
        thumb: "https://img.gamedistribution.com/001cdbb4c00445d4a6311ceef21ec84e-512x512.jpeg", 
        url: "https://html5.gamedistribution.com/001cdbb4c00445d4a6311ceef21ec84e/" 
    },
    { 
        name: "Subway Clash", 
        thumb: "https://img.gamedistribution.com/2b3795551fa049b49b380dc5bb6fbd0e-512x512.jpeg", 
        url: "https://html5.gamedistribution.com/2b3795551fa049b49b380dc5bb6fbd0e/" 
    },
    { 
        name: "Traffic Rush", 
        thumb: "https://img.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed-512x512.jpeg", 
        url: "https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/" 
    },
    { 
        name: "Gold Miner", 
        thumb: "https://img.gamedistribution.com/b2ffed9f30b949bc80630fc2ec01d0ab-512x512.jpeg", 
        url: "https://html5.gamedistribution.com/b2ffed9f30b949bc80630fc2ec01d0ab/" 
    }
];

const grid = document.getElementById("arcade-grid");
const player = document.getElementById("game-player");
const gameFrame = document.getElementById("game-frame");
const gameTitle = document.getElementById("current-game-title");

// Build the image-based grid
function loadArcadeGrid() {
    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "card";
        // Sets the real game thumbnail as the background image
        card.style.backgroundImage = `url('${game.thumb}')`;
        
        card.innerHTML = `
            <div class="card-overlay">
                <h3>${game.name}</h3>
            </div>
        `;
        
        card.onclick = () => launchGame(game.name, game.url);
        grid.appendChild(card);
    });
}

function launchGame(title, url) {
    gameTitle.innerText = title;
    gameFrame.src = url;
    player.style.display = "flex";
}

function closeGame() {
    player.style.display = "none";
    gameFrame.src = ""; // Stops game audio instantly when closed
}

loadArcadeGrid();
