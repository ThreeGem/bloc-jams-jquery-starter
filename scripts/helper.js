class Helper {
constructor(song) {
  this.song = song;
}
  playPauseAndUpdate(song) {
    const totalTimeElement = $('.total-time');
    const duration = player.getDuration();
    totalTimeElement.text( duration );
    player.playPause(song);
  }
}
var helper = new Helper;
