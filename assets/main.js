$(document).ready(function(){
   $('.contactMe').on('click', function(){

    $('#contactModal').fadeIn()
    $('body').append('<div class = "modal-backdrop"></div>')
   })
  $('.cl').on('click', function(){
      $('#contactModal').fadeOut();
      $('.modal-backdrop').remove();
  })


})