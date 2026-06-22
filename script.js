// THE MASTER DATABASE (You can expand this to 10,000 games if you want)
const gameDatabase = [
    { name: "Moto X3M", thumb: "https://img.gamedistribution.com/6c0a0df2555541609121855e714d2328-512x512.jpeg", url: "https://html5.gamedistribution.com/6c0a0df2555541609121855e714d2328/" },
    { name: "Stickman Hook", thumb: "https://img.gamedistribution.com/830b5e3ed5c345b59714878a1005a769-512x512.jpeg", url: "https://html5.gamedistribution.com/830b5e3ed5c345b59714878a1005a769/" },
    { name: "Vex 7", thumb: "https://img.gamedistribution.com/001cdbb4c00445d4a6311ceef21ec84e-512x512.jpeg", url: "https://html5.gamedistribution.com/001cdbb4c00445d4a6311ceef21ec84e/" },
    { name: "Subway Clash 3D", thumb: "https://img.gamedistribution.com/2b3795551fa049b49b380dc5bb6fbd0e-512x512.jpeg", url: "https://html5.gamedistribution.com/2b3795551fa049b49b380dc5bb6fbd0e/" },
    { name: "Sniper Clash", thumb: "https://img.gamedistribution.com/30637801603e46ec82b342b77f539cf3-512x512.jpeg", url: "https://html5.gamedistribution.com/30637801603e46ec82b342b77f539cf3/" },
    { name: "Traffic Rush", thumb: "https://img.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed-512x512.jpeg", url: "https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/" },
    { name: "City Car Stunt", thumb: "https://img.gamedistribution.com/8aecee66beb44ddb9281b2b036b0500c-512x512.jpeg", url: "https://html5.gamedistribution.com/8aecee66beb44ddb9281b2b036b0500c/" },
    { name: "Extreme Asphalt", thumb: "https://img.gamedistribution.com/95a7eb46911a48ae845dd8e58ea1dba2-512x512.jpeg", url: "https://html5.gamedistribution.com/95a7eb46911a48ae845dd8e58ea1dba2/" },
    { name: "Tower Twist", thumb: "https://static.gamezop.com/gTD1yQp3R/square.png", url: "https://zv1y2i8p.play.gamezop.com/g/gTD1yQp3R" },
    { name: "Ludo With Friends", thumb: "https://static.gamezop.com/S1yZqKzQ_qQ/square.png", url: "https://zv1y2i8p.play.gamezop.com/g/S1yZqKzQ_qQ" },
    { name: "Chess Grandmaster", thumb: "https://static.gamezop.com/rkPlk2T7qe/square.png", url: "https://zv1y2i8p.play.gamezop.com/g/rkPlk2T7qe" },
    { name: "8 Ball Pool", thumb: "https://static.gamezop.com/r1z11z_7qe/square.png", url: "https://zv1y2i8p.play.gamezop.com/g/r1z11z_7qe" },
    { name: "Solitaire Gold", thumb: "https://static.gamezop.com/rkGll2pX5e/square.png", url: "https://zv1y2i8p.play.gamezop.com/g/rkGll2pX5e" },
    { name: "Fruit Chop", thumb: "https://static.gamezop.com/rkWf2pX5e/square.png", url: "https://zv1y2i8p.play.gamezop.com/g/rkWf2pX5e" },
    { name: "Gold Miner", thumb: "https://img.gamedistribution.com/b2ffed9f30b949bc80630fc2ec01d0ab-512x512.jpeg", url: "https://html5.gamedistribution.com/b2ffed9f30b949bc80630fc2ec01d0ab/" },
    { name: "Onet Connect", thumb: "https://img.gamedistribution.com/3e3bcab3e8a44bfda28560c038ff5976-512x512.jpeg", url: "https://html5.gamedistribution.com/3e3bcab3e8a44bfda28560c038ff5976/" },
    { name: "Bubble Shooter", thumb: "https://img.gamedistribution.com/7cd661a59cc4416693b71d686b06d25d-512x512.jpeg", url: "https://html5.gamedistribution.com/7cd661a59cc4416693b71d686b06d25d/" },
    { name: "Mahjong Story", thumb: "https://img.gamedistribution.com/6fdee70ee76d41db878c6da5d7bb39c5-512x512.jpeg", url: "https://html5.gamedistribution.com/6fdee70ee76d41db878c6da5d7bb39c5/" },
    { name: "Word Search", thumb: "https://img.gamedistribution.com/abb97dc299864544ad4d776045b937f1-512x512.jpeg", url: "https://html5.gamedistribution.com/abb97dc299864544ad4d776045b937f1/" }
    
    // To add more, just copy one of the lines above and change the name, thumb, and url!
];

// DOM Elements
const grid = document.getElementById("arcade-grid");
const searchInput = document.getElementById("search-input");
const player = document.getElementById("game-player");
const gameFrame = document.getElementById("game-frame");
const gameTitle = document.getElementById("current-game-title");

// Function to render games to the screen based on a provided array
function renderGames(gamesArray) {
    grid.innerHTML = ""; // Clear the grid first
    
    if (gamesArray.length === 0) {
        grid.innerHTML = "<p style='color: #888; grid-column: 1 / -1; text-align: center; margin-top: 50px;'>No games found matching your search. 🕵️‍♂️</p>";
        return;
    }

    gamesArray.forEach(game => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.backgroundImage = `url('${game.thumb}')`;
        
        card.innerHTML = `
            <div class="card-overlay">
                <h3>${game.name}</h3>
            </div>
        `;
        
        // Launch game on click/tap
        card.onclick = () => launchGame(game.name, game.url);
        grid.appendChild(card);
    });
}

// Live Search Engine: Triggers every time you type a letter
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Filter the master database
    const filteredGames = gameDatabase.filter(game => 
        game.name.toLowerCase().includes(searchTerm)
    );
    
    // Render only the matching games
    renderGames(filteredGames);
});

// Fullscreen Player Controls
function launchGame(title, url) {
    gameTitle.innerText = title;
    gameFrame.src = url;
    player.style.display = "flex";
}

function closeGame() {
    player.style.display = "none";
    gameFrame.src = ""; // Stops game memory/audio instantly
}

// Boot up the site by rendering the full database initially
renderGames(gameDatabase);    
