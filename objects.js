//Create a *object* called User which has the following properties
//username, email, password, birthday

  var User = {
    username: 'jwakley',
    email: 'jeramywakley@gmail.com',
    password: 'password123',
    birthday: '07/01/1978'
  };



//edit the username to be 'js_slinger'
  
  User.username = 'js_slinger';


//Add a property of favoriteBook and set it to 'Mike Tyson learns to Whistle'

  User.favoriteBook = 'Mike Tyson learns to Whistle';


//Remove the password property from your object
  
  delete User.password;


//Create an array called 'values'. Loop through your object and push every value
//from  your object into your 'values' array. So for example, you'll eventually have
//an array that looks similar to ['js_slinger', 'tm@gmail.com', '5/2/1990'];

  var values = [];

  for (var key in User) {
    values.push(User[key]);
  }

  alert(values);