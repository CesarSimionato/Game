let light = 20;
let position = {x: 0, y: 0};

const btnLight = document.querySelector('#light');

btnLight.addEventListener('click', handleLight)

document.addEventListener('mousemove', e => setLight(e.pageX, e.pageY))

function setLight(x, y){
  var X = x;
  var Y = y;
  position.x = X;
  position.y = Y;
  const bg = document.querySelector('.light');
  bg.style.background = `radial-gradient( circle at ${X}px ${Y}px, transparent, rgba(0,0,0, 0.95) ${light}%)`;
}

function handleLight(e){
  if(light === 20){
    light = 30;
    btnLight.innerHTML = 'flash_on';
    setLight(position.x, position.y)
    return
  }
  if(light === 30){
    light = 0;
    btnLight.innerHTML = 'flash_off';
    setLight(position.x, position.y)
    return
  }
  if(light === 0){
    light = 20;
    btnLight.innerHTML = 'flash_auto';
    setLight(position.x, position.y)
    return
  }
};