document.addEventListener('keypress', (e) => verifyKey(e));

function verifyKey(key) {
  console.log(key);
  switch (key.code) {
    case 'Space':
      toggleModal('modalResponse');
      break;
    case 'KeyM':
      mute()
      break;
    case 'KeyL':
      handleLight()
      break;
    case 'Comma':
      decreaseVolume()
      break;
    case 'Period':
      increaseVolume()
      break;
  }

}