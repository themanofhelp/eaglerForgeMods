ModAPI.require("player");
ModAPI.require("settings");

//MODULE FUNCTIONS
let fullbrightToggled = false;

function fullbrightToggle() {
  if (fullbrightToggled == false) {
    ModAPI.blocks.air.lightValue = 12
    ModAPI.blocks.reload()
    fullbrightToggled = !fullbrightToggled
  } else if (fullbrightToggled == true) {
    ModAPI.blocks.air.lightValue = 0
    ModAPI.blocks.reload()
    fullbrightToggled = !fullbrightToggled
  }
}


// Function to create a modular button
function createButton(text, onClick) {
  const button = document.createElement("button");
  button.innerText = text;
  Object.assign(button.style, {
    width: "auto", // Default width
    height: "auto", // Default height
    fontSize: "14px", // Optionally adjust the font size as needed
    background: "#333",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "10px",
  });
  button.addEventListener("click", onClick);
  return button;
}

function getLocalTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

let uiVisible = true;

function toggleUI() {
  uiVisible = !uiVisible;
  ui.style.display = uiVisible ? "grid" : "none";
}

ModAPI.require("player");
ModAPI.require("settings");
let playerFound = false;

function checkForGame() {
    if (typeof ModAPI.player !== 'undefined') {
        playerFound = true;
    } else {
        console.warn('Player doesn\'t exist yet, please join a server or singleplayer world...');
    }
}

checkForGame();

const intervalId = setInterval(() => {
    if (playerFound) {
        clearInterval(intervalId); // Stop the interval
        ModAPI.displayToChat({msg: "§5StatsHud is now loading..."})
        initializeHud();
    } else {
        checkForGame();
    }
}, 1000);

function initializeHud() {
    setTimeout(async function () {
        const url_to_font_name =
            "https://raw.githubusercontent.com/AstralisLLC/fonts/main/PressStart2P.ttf";
        const font_name = new FontFace("pressStart", `url(${url_to_font_name})`);
        await font_name.load();
        document.fonts.add(font_name);

        const clientTitle = document.createElement("div");
        document.body.appendChild(clientTitle);
        clientTitle.id = "clientTitle"; // Set the id to "clientTitle"
        clientTitle.style.position = "fixed";
        clientTitle.style.width = "350px"; // Set the width to 350px
        clientTitle.style.height = "55px"; // Set the height to 55px
        clientTitle.style.top = "10px";
        clientTitle.style.left = "10px";
        clientTitle.style.background = "rgba(0, 0, 0, 0.7)";
        clientTitle.style.zIndex = "1000";
        clientTitle.style.boxShadow = "0 0 30px #00ffee"; // Light blue glow with 30px blur radius
        clientTitle.style.borderRadius = "20px"; // Rounded corners
        clientTitle.style.backdropFilter = "blur(3px)";
        
        // Additional styling to center content within clientTitle
        clientTitle.style.display = "grid";
        clientTitle.style.placeItems = "center";
      
        const titleText = document.createElement("p");
        clientTitle.appendChild(titleText);
        titleText.style.fontFamily = "'pressStart', sans-serif";
        titleText.style.color = "#00ffee";
        titleText.style.fontSize = "14px"; // Adjust the font size as needed
      
        function updateTitleText() {
          const localTime = getLocalTime();
          const formattedHours = localTime.hours < 10 ? '0' + localTime.hours : localTime.hours;
          const formattedMinutes = localTime.minutes < 10 ? '0' + localTime.minutes : localTime.minutes;
          const formattedSeconds = localTime.seconds < 10 ? '0' + localTime.seconds : localTime.seconds;
      
          const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        
          // Assuming 'titleText' is already defined
          titleText.innerText = "ASTRALIS.DEV \| " + formattedTime;
        }
      
        updateTitleText(); // Initial update
      
        const ui = document.createElement("div");
        document.body.appendChild(ui);
        ui.style.position = "fixed";
        ui.style.fontFamily = "'pressStart', sans-serif";
        ui.style.width = "66%";
        ui.style.height = "66%";
        ui.style.top = "50%";
        ui.style.left = "50%";
        ui.style.transform = "translate(-50%, -50%)"; // Center the div
        ui.style.background = "rgba(0, 0, 0, 0.7)";
        ui.id = "ui";
        ui.style.borderRadius = "20px";
        ui.style.zIndex = "1001";
        ui.style.display = "grid";
        ui.style.gridTemplateColumns = "repeat(3, 1fr)";
        ui.style.gridTemplateRows = "repeat(2, 1fr)";
        ui.style.gap = "10px";
        ui.style.padding = "20px";
        ui.style.boxShadow = "0 0 30px #00ffee";
        ui.style.backdropFilter = "blur(3px)";
      
        // Create modular buttons
      const flightButton = createButton("Flight", function() {
        console.log("Button 1 clicked");
        // Add your logic for Button 1 here
      });
      
      const fullbrightButton = createButton("Fullbright", function() {
        console.log("Button 2 clicked");
        // Add your logic for Button 2 here
        fullbrightToggle
      });
      
      const speedButton = createButton("Speed", function() {
        console.log("Button 3 clicked");
        // Add your logic for Button 3 here
      });
      
      // Append buttons to the 'ui' element
      ui.appendChild(flightButton);
      ui.appendChild(fullbrightButton);
      ui.appendChild(speedButton);
      
        // Update time every minute
        setInterval(updateTitleText, 10);
      
        ModAPI.displayToChat({msg: "§5Client has succesfully loaded!"})
        ModAPI.displayToChat({msg: "§5Menu bind is currently set to \"§3P§5\"!"})

    }, 500);
}

ModAPI.addEventListener("key", event => {
  if(event.key == 54){
      toggleUI()
  }
})

// §


