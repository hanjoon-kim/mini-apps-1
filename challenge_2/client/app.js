console.log('hello');

$('#form').on('submit', function(e){
  e.preventDefault();
  
  var input = $("input").val();
  console.log('form submitted')
  console.log(input);

  $.post('/', function(err, data) {
    console.log(data);
    $('#results span').text(input);
  });

});

//action="http://127.0.0.1:3000 method="POST"