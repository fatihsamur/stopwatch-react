export function formatTimer(ms) {
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }
  let seconds = ms / 100;
  seconds = parseInt(seconds % 60);
  let minutes = ms / 6000;
  minutes = parseInt(minutes % 60);
  let hours = ms / 360000;
  hours = parseInt(hours % 60);
  let sss = ms;
  sss = parseInt(sss % 1000);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(sss)}`;
}
