var playlist ={
  Nas: 'Ether'
}

var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName]= songTitle;
}

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistname]
}
