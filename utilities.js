function showSectionById(id){
    document.getElementById('home-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden');
  
  }

  document.getElementById('show-donation-button')
  .addEventListener('click', function(){
    showSectionById('donetion-button')
  })