$(document).ready( function() {

  forms();
  video();
  menu();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KCBmdW5jdGlvbigpIHtcblxuICBmb3JtcygpO1xuICB2aWRlbygpO1xuICBtZW51KCk7XG5cbn0pO1xuXG52YXIgZm9ybXMgPSBmdW5jdGlvbigpIHtcblxuICQoJ2Zvcm0gaW5wdXQsIGZvcm0gdGV4dGFyZWEnKVxuICAgLm9uKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICQodGhpcylcbiAgICAgICAucHJldignbGFiZWwnKVxuICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgIH0pXG4gICAub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcblxuICAgICBpZiggJCh0aGlzKS52YWwoKS5sZW5ndGggPT0gMCApIHtcbiAgICAgICAkKHRoaXMpXG4gICAgICAgICAucHJldignbGFiZWwnKVxuICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgfVxuXG4gIH0pO1xuXG4gICQoJy5mb3JtLWNvbnRhY3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG5cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIGZvcm0gPSAkKCcuZm9ybS1jb250YWN0Jyk7XG4gICAgdmFyIHVybCA9ICQoZm9ybSkuYXR0cignYWN0aW9uJyk7XG4gICAgdmFyIGVtYWlsID0gJChmb3JtKS5maW5kKCdbbmFtZT1cIl9yZXBseXRvXCJdJykudmFsKCk7XG4gICAgdmFyIG5hbWUgPSAkKGZvcm0pLmZpbmQoJ1tuYW1lPVwibmFtZVwiXScpLnZhbCgpO1xuICAgIHZhciBvcmcgPSAkKGZvcm0pLmZpbmQoJ1tuYW1lPVwib3JnYW5pemF0aW9uXCJdJykudmFsKCk7XG4gICAgdmFyIG1lc3NhZ2UgPSAkKGZvcm0pLmZpbmQoJ1tuYW1lPVwibWVzc2FnZVwiXScpLnZhbCgpO1xuXG4gICAgaWYoICggZW1haWwubGVuZ3RoIHx8IG1lc3NhZ2UubGVuZ3RoICkgPT0gMCApe1xuICAgICAgaWYoICQoJy5lcnJvcicpLmxlbmd0aCAhPSAwICkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXhpc3RzJyk7XG4gICAgICAgICQoJy5lcnJvcicpLnRleHQoJ1NvcnJ5LCBidXQgZW1haWwgYW5kIG1lc3NhZ2UgYXJlIHJlcXVpcmVkLicpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICQoZm9ybSkucHJlcGVuZCgnPHAgY2xhc3M9XCJlcnJvclwiPlNvcnJ5LCBidXQgZW1haWwgYW5kIG1lc3NhZ2UgYXJlIHJlcXVpcmVkLjwvcD4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogb3JnLFxuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICB9LFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiXG4gICAgfSkuZG9uZSggZnVuY3Rpb24ocmVzKSB7XG4gICAgICAkKGZvcm0pLmZhZGVPdXQoKTtcbiAgICAgICQoJ2gxJykuYWZ0ZXIoJzxwIHN0eWxlPVwibWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAyZW0gYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyO1wiPlRoYW5rcyEgV2UmcnNxdW87bGwgZ2V0IGJhY2sgdG8geW91IHNvb24uPC9wPicpO1xuICAgIH0pLmZhaWwoIGZ1bmN0aW9uKGVycikge1xuICAgICAgaWYoICQoJy5lcnJvcicpICkge1xuICAgICAgICAkKCcuZXJyb3InKS50ZXh0KGVyci5yZXNwb25zZUpTT04uZXJyb3IpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICQoZm9ybSkucHJlcGVuZCgnPHAgY2xhc3M9XCJlcnJvclwiPlNvcnJ5LCAnICsgZXJyLnJlc3BvbnNlSlNPTi5lcnJvciArICc8L3A+Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuXG52YXIgdmlkZW8gPSBmdW5jdGlvbigpIHtcblxuICB2YXIgc3JjID0gJCgnLnByb21vX19wbGF5ZXIgaWZyYW1lJykuYXR0cignc3JjJyk7XG5cbiAgJCgnLnByb21vLS12aWRlbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICQoJy5wcm9tb19fcGxheWVyJylcbiAgICAgIC5maW5kKCdpZnJhbWUnKVxuICAgICAgLmF0dHIoJ3NyYycsIHNyYyk7XG5cbiAgICAkKCcucHJvbW9fX3BsYXllcicpXG4gICAgICAuZmFkZUluKClcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcucHJvbW9fX3BsYXllcicpLmZhZGVPdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykuZmluZCgnaWZyYW1lJykuYXR0cignc3JjJywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG5cbiAgfSk7XG5cbn1cblxudmFyIG1lbnUgPSBmdW5jdGlvbigpIHtcbiAgJCgnLm5hdi10b2dnbGUgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCcuc2l0ZS1uYXYnKS50b2dnbGVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICQodGhpcykuY2xvc2VzdCgnLm5hdi10b2dnbGUnKS50b2dnbGVDbGFzcygnaXMtZml4ZWQnKTtcbiAgfSk7XG59XG4iXSwiZmlsZSI6InNjcmlwdHMuanMifQ==
