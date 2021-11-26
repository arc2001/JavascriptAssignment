function printPerson(p)
{
  console.log("Name: "+p.FirstName);
  console.log("LastName: "+p['LastName']);
  console.log("OfficeAddress: "+p.OfficeAddress);
}

//person1'
const person1 = {
  FirstName: "Anjali",
  LastName: "Kumari",
  OfficeAddress: "Uttar Pradesh",
};
printPerson(person1);


//person2
const person2=new Object(person1);
person2.FirstName="Aryan";
person2.LastName="Gupta";
person2.OfficeAddress="Allahabad";

printPerson(person2);

//person3
const person3 = {
  FirstName: "Shipra",
  LastName: "Singh",
  OfficeAddress: "Chennai",
};
printPerson(person3);