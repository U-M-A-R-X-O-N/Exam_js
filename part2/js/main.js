var music = ["Jazz", "Blues"];
console.log(music);
music.push("Rock-n-roll");
console.log(music);
music[Math.floor((music.length - 1) / 2)] = "Classic";
console.log(music);
music.shift();
console.log(music);
music.unshift("Rap", "Reggae");
console.log(music);
