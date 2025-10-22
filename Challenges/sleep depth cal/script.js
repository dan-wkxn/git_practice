//sleeping hours for each day
const getSleepHours = day => {
    switch(day) {
        case 'monday' : return 8;
        case 'tuesday' : return 7.4;
        case 'wednesday' : return 8.3;
        case 'thursday' : return 6.5;
        case 'friday' : return 8;
        case 'saturday' : return 7.7;
        case 'sunday' : return 10;
        }
    };

  //total sleeping hours
  const getActualSleepingHours = () => {
    return (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
    );
  };
  
//ideal sleeping hours i want
const getIdealSleepingHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepingHours();
    const idealSleepHours = getIdealSleepingHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('perfect amount of sleep');
    } else if (actualSleepHours >= idealSleepHours) {
        const extraHours = actualSleepHours - idealSleepHours;
        console.log(`u got ${extraHours} more sleep than needed`);
    } else if (actualSleepHours <= idealSleepHours ) {
        const sleepDept = idealSleepHours - actualSleepHours;
        console.log(`hey u need to sleep ${sleepDept} more`);
    }
};

calculateSleepDebt();