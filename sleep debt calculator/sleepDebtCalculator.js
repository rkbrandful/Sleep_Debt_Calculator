const getSleepHours = day => {
  
 switch(day) {
   case 'Monday':
    return 8;
      break;
   case 'Tuesday':
    return 6;
      break;
   case 'Wednesday':
    return 8;
      break;
   case 'Thursday':
    return 9;
      break;
    case 'Friday':
    return 7;
      break;
   case 'Saturday':
    return 7;
      break;
   case 'Sunday':
    return 8;
      break;
    default:
    return 'Error';                
  }
};
 const getActualSleepHours = () => {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
 };

 //console.log(getSleepHours('Friday'));
 //console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 8
  return 8*7;
}
//console.log(getIdealSleepHours());
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log('Perfect, You have the right amount of sleep')
  } else if (actualSleepHours > idealSleepHours){
    console.log('Man what\'s up? Wake up and grind because you have overslept by ' + (actualSleepHours - idealSleepHours) + ' hours.' )
  } else if (actualSleepHours < idealSleepHours){
    console.log(`Relax small,you need ${idealSleepHours - actualSleepHours} hours more sleep.`)
  }
  else {
    console.log('Spy your code be like you get error')
  }
};
calculateSleepDebt();



