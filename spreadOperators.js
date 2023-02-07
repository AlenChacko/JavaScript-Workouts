const obj1 = {
  name: "Alen",
  age: 23,
  place: "Cherupuzha",
};

//Here assigning the object to a new varibable.So variable copy  will have a referance  of object 1;
const copy = obj1;

//If I changed anything in this copy . It will change in the original object too.
// copy.name = "Amal"
// console.log(obj1);



//Here  cloned the object using spered operators. So this will not affect the original one. We will get a entirely new object;
const obj2 = { ...obj1 }
obj2.name = "Arjun";
console.log(obj1);
console.log(obj2);


