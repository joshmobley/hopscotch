$(document).ready( function() {

  forms();
  video();
  menu();
  overlay();

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
      $('h1').after('<p style="max-width: 600px; margin: 2em auto; text-align: center;">Thanks! We&rsquo;ll get back to you soon.</p>');
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

var menu = function() {
  $('.nav-toggle a').on('click', function(ev) {
    ev.preventDefault();
    $('.site-nav').toggleClass('is-visible');
    $(this).closest('.nav-toggle').toggleClass('is-fixed');
  });
}

var overlay = function() {
  if( localStorage.getItem('hopscotch-closed-alert') ) {
    $('.alert-message').remove();
  }
  $('.alert-message a').on('click', function(ev) {
    ev.preventDefault();
    $('.alert-message').remove();
    localStorage.setItem('hopscotch-closed-alert', 'true');
  });
}
