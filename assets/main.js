$(document).ready(function(){
$('#mainH').fadeIn(2000);
$('#mainP').delay( 800 ).fadeIn(2000);

   $('.contactMe').on('click', function(){

    $('#contactModal').fadeIn()
    $('body').append('<div class = "modal-backdrop"></div>')
   })
  $('.cl').on('click', function(){
      $('#contactModal').fadeOut();
      $('.modal-backdrop').remove();
  })

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
})
