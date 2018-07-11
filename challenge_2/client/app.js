$('#form').on('submit', function(e){
  e.preventDefault();

  var input = $("#input").val();

  $.ajax({
    url: '/',
    data: input,
    contentType: 'application/json',
    method: 'POST',
    success(data) {
      console.log('success');
      console.log(data);
      $('#results span').html(data);
    },
    error(err) {
      console.log(err, 'error');
    }
  });

});


