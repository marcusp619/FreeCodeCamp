var month = prompt("What month is it?").toLowerCase();
var day = prompt("What day is it of the month").toLowerCase();


switch (month) {
  case 1:
      if (month == 'january' && day < 32) {
        console.log("Take a jacket with you!");  
      }
      else {
        console.log("You're going to freeze out there");  
      }
    break;
  case 2:
    if (month == 'febuary' || month == 'march') {
        console.log("Still a little cold you're almost there");  
      }
      else {
        console.log("You're going to freeze out there");  
      }  
    break;
  case 3:
    if (month == 'april' && day < 32) {
        console.log("You made it! Its going to warm up");  
      }
      else {
        console.log("Start working out!");  
      }
    break;
  default:
    console.log("Enjoy the weather");
}
