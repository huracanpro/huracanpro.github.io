// Database storing all 13 verified interactive game items
const games = [
    { name: "Drive Mad", tag: "Premium", src: "drive-mad.html", bg: "linear-gradient(135deg, #f57c00, #ff9800)" },
    { name: "A Dance of Fire and Ice", tag: "Rhythm", src: "adofai.html", bg: "linear-gradient(135deg, #d32f2f, #f44336)" },
    { name: "AdVenture Capitalist", tag: "Idle Tycoon", src: "adventure-capitalist.html", bg: "linear-gradient(135deg, #388e3c, #4caf50)" },
    { name: "Motorcycle Madness", tag: "Racing", src: "https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #1976d2, #2196f3)" },
    { name: "City Sniper", tag: "Action", src: "https://html5.gamedistribution.com/30637801603e46ec82b342b77f539cf3/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #455a64, #607d8b)" },
    { name: "Retro Combat", tag: "Arcade", src: "https://html5.gamedistribution.com/abb97dc299864544ad4d776045b937f1/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #7b1fa2, #9c27b0)" },
    { name: "Tactical Base", tag: "Strategy", src: "https://html5.gamedistribution.com/7cd661a59cc4416693b71d686b06d25d/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #00796b, #009688)" },
    { name: "Neon Surge", tag: "Fun", src: "https://html5.gamedistribution.com/95a7eb46911a48ae845dd8e58ea1dba2/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #e65100, #ff9800)" },
    { name: "Quest Runner", tag: "Adventure", src: "https://html5.gamedistribution.com/8aecee66beb44ddb9281b2b036b0500c/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #5d4037, #795548)" },
    { name: "Hyper Skill", tag: "Skill", src: "https://html5.gamedistribution.com/6fdee70ee76d41db878c6da5d7bb39c5/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #c2185b, #e91e63)" },
    { name: "Gamezop Arena", tag: "Classic", src: "https://zv1y2i8p.play.gamezop.com/g/gTD1yQp3R", bg: "linear-gradient(135deg, #0288d1, #03a9f4)" },
    { name: "Gamezop Royale", tag: "Premium Arena", src: "https://zv1y2i8p.play.gamezop.com/g/XuSI73Wi5", bg: "linear-gradient(135deg, #fbc02d, #ffeb3b)" },
    { name: "Chill Casual", tag: "Casual", src: "https://html5.gamedistribution.com/3e3bcab3e8a44bfda28560c038ff5976/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}", bg: "linear-gradient(135deg, #111116, #222230)" }
];

const grid = document.getElementById("arcade-grid");
const player = document.getElementById("game-player");
const gameFrame = document.getElementById("game-frame");
const gameTitle = document.getElementById("current-game-title");

// Render card layouts procedurally
function loadArcadeGrid() {
    games.forEach(game => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.background = game.bg;
        
        card.innerHTML = `
            <span class="tag">${game.tag}</span>
            <h3>${game.name}</h3>
        `;
        
        // Open the game window dynamically on trigger selection
        card.onclick = () => launchGame(game.name, game.src);
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
    gameFrame.src = ""; // Unloads context resources instantly to zero background lag
}

// Initialize layout pipeline
loadArcadeGrid();
