function openModal(id){
  const modal = document.getElementById(id);
  modal.classList.add('open');
}

function closeModal(id){
  const modal = document.getElementById(id);
  modal.classList.remove('open');
}

function toggleModal(id){
  const modal = document.getElementById(id);
  if(modal.classList.contains('open')){
    modal.classList.remove('open');
  }
  else{
    modal.classList.add('open');
  }
}


