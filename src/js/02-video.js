import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {});

const getCurrentTime = function(currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY)));