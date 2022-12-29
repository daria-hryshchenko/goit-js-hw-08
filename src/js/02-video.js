import {
  throttle
} from 'lodash';
import Player from "@vimeo/player";

const vimeoPlayerEl = document.querySelector("#vimeo-player");

const player = new Vimeo.Player(vimeoPlayerEl).catch(err => {
  console.warn(err);
});

player.on('timeupdate', throttle(event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000)).catch(err => {
  console.warn(err);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(err => {
  console.warn(err);
});