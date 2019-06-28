$('.submit').on('click', function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var contactEmail = {
    firstName: $('#firstName')
      .val()
      .trim(),
    lastName: $('#lastName')
      .val()
      .trim(),
    email: $('#email')
      .val()
      .trim(),
    message: $('#message')
      .val()
      .trim()
  };

  $.post('/contact', contactEmail, function(data) {
    if (data === 'OK') {
      Swal.fire({
        title: 'Message Sent',
        text: 'Josh will get back to you soon!',
        imageUrl: '../images/gob.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        width: 450
      });
      // Clear the form when submitting
      $('#firstName').val('');
      $('#lastName').val('');
      $('#email').val('');
      $('#message').val('');
    } else {
      console.log('Something went wrong', data);
      Swal.fire({
        title: 'Whoops!',
        text: 'Looks like you missed something. Please try again!',
        imageUrl: '../images/frank.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        width: 450
      });
    }
  });
});
