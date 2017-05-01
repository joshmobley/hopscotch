$(document).ready( function() {

  forms();
  video();

});

var forms = function() {

 $('form input, form textarea')
   .on('focus', function() {

     $(this)
       .prev('label')
       .addClass('is-active');

   })
   .on('blur', function() {

     if( $(this).val().length == 0 ) {
       $(this)
         .prev('label')
         .removeClass('is-active');
     }

  });

  $('.form-contact input[type="submit"]').on('click', function(ev) {

    ev.preventDefault();

    var form = $('.form-contact');
    var url = $(form).attr('action');
    var email = $(form).find('[name="_replyto"]').val();
    var name = $(form).find('[name="name"]').val();
    var org = $(form).find('[name="organization"]').val();
    var message = $(form).find('[name="message"]').val();

    if( ( email.length || message.length ) == 0 ){
      if( $('.error').length != 0 ) {
        console.log('exists');
        $('.error').text('Sorry, but email and message are required.');
      }else{
        $(form).prepend('<p class="error">Sorry, but email and message are required.</p>');
      }
      return false;
    }

    $.ajax({
      url: url,
      method: "POST",
      data: {
        name: name,
        email: email,
        organization: org,
        message: message
      },
      dataType: "json"
    }).done( function(res) {
      $(form).fadeOut();
      $('h1').after('<p style="max-width: 600px; margin: 2em; text-align: center;">Thanks! We&rsquo;ll get back to you soon.</p>');
    }).fail( function(err) {
      if( $('.error') ) {
        $('.error').text(err.responseJSON.error);
      }else{
        $(form).prepend('<p class="error">Sorry, ' + err.responseJSON.error + '</p>');
      }
    });
  });
};


var video = function() {

  var src = $('.promo__player iframe').attr('src');

  $('.promo--video').on('click', function(ev) {
    ev.preventDefault();

    $('.promo__player')
      .find('iframe')
      .attr('src', src);

    $('.promo__player')
      .fadeIn()
      .on('click', function(ev) {
        ev.preventDefault();
        $('.promo__player').fadeOut( function() {
          $(this).find('iframe').attr('src', '');
        });
        return false;
      });

  });

}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KCBmdW5jdGlvbigpIHtcblxuICBmb3JtcygpO1xuICB2aWRlbygpO1xuXG59KTtcblxudmFyIGZvcm1zID0gZnVuY3Rpb24oKSB7XG5cbiAkKCdmb3JtIGlucHV0LCBmb3JtIHRleHRhcmVhJylcbiAgIC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcblxuICAgICAkKHRoaXMpXG4gICAgICAgLnByZXYoJ2xhYmVsJylcbiAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICB9KVxuICAgLm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgaWYoICQodGhpcykudmFsKCkubGVuZ3RoID09IDAgKSB7XG4gICAgICAgJCh0aGlzKVxuICAgICAgICAgLnByZXYoJ2xhYmVsJylcbiAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgIH1cblxuICB9KTtcblxuICAkKCcuZm9ybS1jb250YWN0IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihldikge1xuXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBmb3JtID0gJCgnLmZvcm0tY29udGFjdCcpO1xuICAgIHZhciB1cmwgPSAkKGZvcm0pLmF0dHIoJ2FjdGlvbicpO1xuICAgIHZhciBlbWFpbCA9ICQoZm9ybSkuZmluZCgnW25hbWU9XCJfcmVwbHl0b1wiXScpLnZhbCgpO1xuICAgIHZhciBuYW1lID0gJChmb3JtKS5maW5kKCdbbmFtZT1cIm5hbWVcIl0nKS52YWwoKTtcbiAgICB2YXIgb3JnID0gJChmb3JtKS5maW5kKCdbbmFtZT1cIm9yZ2FuaXphdGlvblwiXScpLnZhbCgpO1xuICAgIHZhciBtZXNzYWdlID0gJChmb3JtKS5maW5kKCdbbmFtZT1cIm1lc3NhZ2VcIl0nKS52YWwoKTtcblxuICAgIGlmKCAoIGVtYWlsLmxlbmd0aCB8fCBtZXNzYWdlLmxlbmd0aCApID09IDAgKXtcbiAgICAgIGlmKCAkKCcuZXJyb3InKS5sZW5ndGggIT0gMCApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXN0cycpO1xuICAgICAgICAkKCcuZXJyb3InKS50ZXh0KCdTb3JyeSwgYnV0IGVtYWlsIGFuZCBtZXNzYWdlIGFyZSByZXF1aXJlZC4nKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAkKGZvcm0pLnByZXBlbmQoJzxwIGNsYXNzPVwiZXJyb3JcIj5Tb3JyeSwgYnV0IGVtYWlsIGFuZCBtZXNzYWdlIGFyZSByZXF1aXJlZC48L3A+Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICBvcmdhbml6YXRpb246IG9yZyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgfSxcbiAgICAgIGRhdGFUeXBlOiBcImpzb25cIlxuICAgIH0pLmRvbmUoIGZ1bmN0aW9uKHJlcykge1xuICAgICAgJChmb3JtKS5mYWRlT3V0KCk7XG4gICAgICAkKCdoMScpLmFmdGVyKCc8cCBzdHlsZT1cIm1heC13aWR0aDogNjAwcHg7IG1hcmdpbjogMmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7XCI+VGhhbmtzISBXZSZyc3F1bztsbCBnZXQgYmFjayB0byB5b3Ugc29vbi48L3A+Jyk7XG4gICAgfSkuZmFpbCggZnVuY3Rpb24oZXJyKSB7XG4gICAgICBpZiggJCgnLmVycm9yJykgKSB7XG4gICAgICAgICQoJy5lcnJvcicpLnRleHQoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJChmb3JtKS5wcmVwZW5kKCc8cCBjbGFzcz1cImVycm9yXCI+U29ycnksICcgKyBlcnIucmVzcG9uc2VKU09OLmVycm9yICsgJzwvcD4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cbnZhciB2aWRlbyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciBzcmMgPSAkKCcucHJvbW9fX3BsYXllciBpZnJhbWUnKS5hdHRyKCdzcmMnKTtcblxuICAkKCcucHJvbW8tLXZpZGVvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnLnByb21vX19wbGF5ZXInKVxuICAgICAgLmZpbmQoJ2lmcmFtZScpXG4gICAgICAuYXR0cignc3JjJywgc3JjKTtcblxuICAgICQoJy5wcm9tb19fcGxheWVyJylcbiAgICAgIC5mYWRlSW4oKVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5wcm9tb19fcGxheWVyJykuZmFkZU91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCAnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICB9KTtcblxufVxuIl0sImZpbGUiOiJzY3JpcHRzLmpzIn0=
