console.log("Shirkie: Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("Shirkie: This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("Shirkie: This code runs once core initialization is ready and game data is available.");
});