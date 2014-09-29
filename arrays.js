//create an array called family which has your family members in order of their age

  var family = ['Jeramy','Heidi','Madison','Lindsay','Macie','Alexis'];


//Remove the oldest member of your family

  family.shift();


//Add a new family member as the youngest member

  family.push('Spot');


//LOOP over your array to see if you have a family member named 'Tyler'
// If you do, alert ('I have a Tyler'), if you do not, alert ('I have no Tylers')

  var flag = false;

  for(var i=0; i<family.length; i++) {
    if (family[i] === 'Tyler') {
      flag = true;
      break;
    }
  }

  if (flag) {
      alert('I have a Tyler');
  } else {
      alert('I have no Tylers');
  }


// Remove the second oldest member of your family

  family.splice(1,1);


//Write a function called 'reverse' that takes in a string and returns that string in reverse order

  var reverse = function(str) {
    str = str.split('');
    str = str.reverse();
    str = str.join('');
    return str;
  };

  alert(reverse('Hello reader, this is one awesome message!'));