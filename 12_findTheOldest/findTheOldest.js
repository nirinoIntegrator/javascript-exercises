const findTheOldest = peaple => {
    const currentYear = new Date().getFullYear();

    return peaple.reduce((oldest, person) => {
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
