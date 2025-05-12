//Objects
const album = {
  artist: "Radiohead",
  songs: [
    { name: "1. 15 Steps", duration: 238 },
    { name: "2. Bodysnatchers", duration: 243 },
    { name: "3. Nude", duration: 256 },
    { name: "4. Weird Fishes/Arpeggi", duration: 319 },
    { name: "5. All I Need", duration: 229 },
    { name: "6. Faust Arp", duration: 130 },
    { name: "7. Reckoner", duration: 291 },
    { name: "8. House Of Cards", duration: 329 },
    { name: "9. Jigsaw Falling Into Place", duration: 249 },
    { name: "10. Videotape", duration: 280 },
  ]
};

const album2 = {
  artist: "The Killers",
  songs: [
    {name: "1. Jenny Was A Friend Of Mine", duration: 244},
    {name: "2. Mr. Brightside", duration: 224},
    {name: "3. All These Thing That I've Done", duration: 302},
    {name: "4. Somebody Told Me", duration: 199},
    {name: "5. When You Were Young", duration: 218},
    {name: "6. Read My Mind", duration: 244},
    {name: "7. Human", duration: 249},
    {name: "8. Spaceman", duration: 285},
    {name: "9. A Dustland Fairytale", duration: 226},
    {name: "10. Be Still", duration: 274},
    {name: "11. Runaways", duration: 245},
    {name: "12. The Man", duration: 249},
    {name: "13. Caution", duration: 270},
    {name: "14. My Own Soul's Warning", duration: 274},
    {name: "15. Dying Breed", duration: 246},
    {name: "16. Pressure Machine", duration: 284},
    {name: "17. Quiet Town", duration: 257},
    {name: "18. Boy", duration: 214},
    {name: "19. Your Side of Town", duration: 188},
    {name: "20. Spirit", duration: 179}
  ]
};

const album3 = {
  artist: "Pink Floyd",
  songs: [
    {name: "1. One Of These Days", duration: 356},
    {name: "2. A Pillow Of Winds", duration: 313},
    {name: "3. Fearless", duration: 369},
    {name: "4. San Tropez", duration: 224},
    {name: "5. Seamus", duration: 135},
    {name: "6. Echoes", duration: 1415}
  ]
}

const undefinedObject = undefined

const newArtistObject = {
  artist: "New Artist",
  songs: []
};

const evilArtistObject = {
  artist: "Evil Artist",
  songs: [
    { name: "1. First", duration: 0 },
    { name: "2. Second", duration: 'null' },
    { name: "3. Third", duration: 123124 },
    { name: "4...", duration: 1 },
    { name: "5...", duration: 2 },
    { name: "6...", duration: 3 },
    { name: "7...", duration: 4 },
    { name: "8...", duration: 5 },
    { name: "9...", duration: 6 },
    { name: "10...", duration: 7 },
    { name: "11...", duration: 8 },
    { name: "12...", duration: 9 },
  ]
};

function verifyObject(album) {
  if (album === undefined || !Array.isArray(album.songs) || album.songs.length === 0){
    console.log("Invalid album");
    return false;
  }
  return true;
}

function sortingSongs(album) {
  album.songs.sort(( a, b) => a.duration - b.duration);

  console.log("=======================");
  console.log(album.artist);
  console.log("=======================");
}


function secondsConverter(album) {
  for (let i = 0; i < 10; i++) {
    const song = album.songs[i];
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;
    const duration = Number(song.duration);

    if (isNaN(duration)) {
      console.log(`${song.name} - Invalid duration`);
      continue;
    }

    if (minutes < 60) {
      console.log(`${song.name} - ${minutes}m ${seconds}s`);
    }
    else {
      const hours = Math.floor(minutes / 60);
      const minutesRemaining = minutes - (hours * 60);
      console.log(`${song.name} - ${hours}h ${minutesRemaining}m ${seconds}s`);
    }
  }
}

function executeFunctions() {
  if (!verifyObject(album3)) {
    return;
  }
  sortingSongs(album3);
  secondsConverter(album3);
}

executeFunctions();