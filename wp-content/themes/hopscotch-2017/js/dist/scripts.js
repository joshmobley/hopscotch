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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KCBmdW5jdGlvbigpIHtcblxuICBmb3JtcygpO1xuICB2aWRlbygpO1xuICBtZW51KCk7XG4gIG92ZXJsYXkoKTtcblxufSk7XG5cbnZhciBmb3JtcyA9IGZ1bmN0aW9uKCkge1xuXG4gJCgnZm9ybSBpbnB1dCwgZm9ybSB0ZXh0YXJlYScpXG4gICAub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgJCh0aGlzKVxuICAgICAgIC5wcmV2KCdsYWJlbCcpXG4gICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgfSlcbiAgIC5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xuXG4gICAgIGlmKCAkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PSAwICkge1xuICAgICAgICQodGhpcylcbiAgICAgICAgIC5wcmV2KCdsYWJlbCcpXG4gICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICB9XG5cbiAgfSk7XG5cbiAgJCgnLmZvcm0tY29udGFjdCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcblxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgZm9ybSA9ICQoJy5mb3JtLWNvbnRhY3QnKTtcbiAgICB2YXIgdXJsID0gJChmb3JtKS5hdHRyKCdhY3Rpb24nKTtcbiAgICB2YXIgZW1haWwgPSAkKGZvcm0pLmZpbmQoJ1tuYW1lPVwiX3JlcGx5dG9cIl0nKS52YWwoKTtcbiAgICB2YXIgbmFtZSA9ICQoZm9ybSkuZmluZCgnW25hbWU9XCJuYW1lXCJdJykudmFsKCk7XG4gICAgdmFyIG9yZyA9ICQoZm9ybSkuZmluZCgnW25hbWU9XCJvcmdhbml6YXRpb25cIl0nKS52YWwoKTtcbiAgICB2YXIgbWVzc2FnZSA9ICQoZm9ybSkuZmluZCgnW25hbWU9XCJtZXNzYWdlXCJdJykudmFsKCk7XG5cbiAgICBpZiggKCBlbWFpbC5sZW5ndGggfHwgbWVzc2FnZS5sZW5ndGggKSA9PSAwICl7XG4gICAgICBpZiggJCgnLmVycm9yJykubGVuZ3RoICE9IDAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGlzdHMnKTtcbiAgICAgICAgJCgnLmVycm9yJykudGV4dCgnU29ycnksIGJ1dCBlbWFpbCBhbmQgbWVzc2FnZSBhcmUgcmVxdWlyZWQuJyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJChmb3JtKS5wcmVwZW5kKCc8cCBjbGFzcz1cImVycm9yXCI+U29ycnksIGJ1dCBlbWFpbCBhbmQgbWVzc2FnZSBhcmUgcmVxdWlyZWQuPC9wPicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgb3JnYW5pemF0aW9uOiBvcmcsXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCJcbiAgICB9KS5kb25lKCBmdW5jdGlvbihyZXMpIHtcbiAgICAgICQoZm9ybSkuZmFkZU91dCgpO1xuICAgICAgJCgnaDEnKS5hZnRlcignPHAgc3R5bGU9XCJtYXgtd2lkdGg6IDYwMHB4OyBtYXJnaW46IDJlbSBhdXRvOyB0ZXh0LWFsaWduOiBjZW50ZXI7XCI+VGhhbmtzISBXZSZyc3F1bztsbCBnZXQgYmFjayB0byB5b3Ugc29vbi48L3A+Jyk7XG4gICAgfSkuZmFpbCggZnVuY3Rpb24oZXJyKSB7XG4gICAgICBpZiggJCgnLmVycm9yJykgKSB7XG4gICAgICAgICQoJy5lcnJvcicpLnRleHQoZXJyLnJlc3BvbnNlSlNPTi5lcnJvcik7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJChmb3JtKS5wcmVwZW5kKCc8cCBjbGFzcz1cImVycm9yXCI+U29ycnksICcgKyBlcnIucmVzcG9uc2VKU09OLmVycm9yICsgJzwvcD4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cbnZhciB2aWRlbyA9IGZ1bmN0aW9uKCkge1xuXG4gIHZhciBzcmMgPSAkKCcucHJvbW9fX3BsYXllciBpZnJhbWUnKS5hdHRyKCdzcmMnKTtcblxuICAkKCcucHJvbW8tLXZpZGVvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnLnByb21vX19wbGF5ZXInKVxuICAgICAgLmZpbmQoJ2lmcmFtZScpXG4gICAgICAuYXR0cignc3JjJywgc3JjKTtcblxuICAgICQoJy5wcm9tb19fcGxheWVyJylcbiAgICAgIC5mYWRlSW4oKVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5wcm9tb19fcGxheWVyJykuZmFkZU91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5maW5kKCdpZnJhbWUnKS5hdHRyKCdzcmMnLCAnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICB9KTtcblxufVxuXG52YXIgbWVudSA9IGZ1bmN0aW9uKCkge1xuICAkKCcubmF2LXRvZ2dsZSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5zaXRlLW5hdicpLnRvZ2dsZUNsYXNzKCdpcy12aXNpYmxlJyk7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcubmF2LXRvZ2dsZScpLnRvZ2dsZUNsYXNzKCdpcy1maXhlZCcpO1xuICB9KTtcbn1cblxudmFyIG92ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgaWYoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob3BzY290Y2gtY2xvc2VkLWFsZXJ0JykgKSB7XG4gICAgJCgnLmFsZXJ0LW1lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgfVxuICAkKCcuYWxlcnQtbWVzc2FnZSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5hbGVydC1tZXNzYWdlJykucmVtb3ZlKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hvcHNjb3RjaC1jbG9zZWQtYWxlcnQnLCAndHJ1ZScpO1xuICB9KTtcbn1cbiJdLCJmaWxlIjoic2NyaXB0cy5qcyJ9
