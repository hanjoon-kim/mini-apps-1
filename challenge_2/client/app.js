$('#form').on('submit', function(e){
  e.preventDefault();

  var input = $("input").val();
  inputObj = JSON.parse(input);
  input = createCsv(inputObj);


  console.log('input', input);

  $.post('/', function(err, data) {
    console.log(data);
    console.log('input', input);
    $('#results span').html(input);
  });

});

var createCsv = function(inputObj) {

  var listEmployees = function(inputObj) {
    console.log(inputObj)
    let row = '';
    
    for (let key in inputObj) {
      if (!Array.isArray(inputObj[key])) {
        row += ', ' + inputObj[key];
      }
    }
    
    row = row.slice(2) + '<br>';

    final += row;

    for (let i = 0; i < inputObj.children.length; i++) {

      listEmployees(inputObj.children[i]);
    }
    
    console.log(final);

  };

  var final = setHeaders(inputObj);
  listEmployees(inputObj);

  console.log('final', final);
  return final;
};

var setHeaders = function(inputObj) {
  var final = '';
  
  for (let key in inputObj) {
    final += ', ' + key;
  }
  
  final = final.slice(2);
  final = final.substring(0, final.length - 10) + '<br>';

  return final;
};



