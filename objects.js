var playlist ={
  Nas: 'Ether'
}

var updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName]= songTitle;
  return playlist
}

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName]
  return playlist

}
