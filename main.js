let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnersAge = 18;

if (runnersAge > 18 && registeredEarly){
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`For the ${raceNumber}, your race will start at 9.30am`);
} else if(runnersAge > 18 && !registeredEarly){
    console.log(`For the ${raceNumber}, your race will start at 11.00am`);
} else if(runnersAge < 18){
    console.log(`For the ${raceNumber}, your race will start at 12.30am`);
} else if (runnersAge == 18){
    console.log(`For the ${raceNumber}, please go to the registration desk`)
}
