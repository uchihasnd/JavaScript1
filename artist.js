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

function SortingSongs(album) {
  album.songs.sort(function (a, b) {
    return a.duration - b.duration;
  });

  for (let i = 0; i < album.songs.length; i++) {
    const song = album.songs[i];
    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;

    console.log(`${song.name} - ${minutes}m ${seconds}s`);
  }
};

SortingSongs(album);
