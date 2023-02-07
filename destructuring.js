let person = {
    name:"Alen",
    place:"Kannur",
    age:23
}


const destructure = () => {
    const {
        name,place,age
    } = person
    console.log(person)
}

destructure()