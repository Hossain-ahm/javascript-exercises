const findTheOldest = function(people) {
    people.sort((a , b) => {
        if (age(a) > age(b)){
            return -1
        }else return 1
    })
    return people[0]
};

function age(person){
    if (person.yearOfDeath !== undefined){
        return person.yearOfDeath - person.yearOfBirth
    }
    return (new Date().getFullYear()) - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
