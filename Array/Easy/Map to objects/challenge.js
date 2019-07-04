/*
  Title:
    Map to objects

  Description:
    You have an array of user objects, each one has name, surname and id.
    Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.    

  Examples:
    const john = {name: "John", surname: "Smith", id: 1};
    const pete = {name: "Pete", surname: "Hunt", id: 2};
    const mary = {name: "Mary", surname: "Key", id: 3};

    const users = [john, pete, mary];

    const usersMapped = // ... your code ... //

    usersMapped = [
      {fullName: "John Smith", id: 1},
      {fullName: "Pete Hunt", id: 2},
      {fullName: "Mary Key", id: 3}
    ]

    console.log(usersMapped[0].id) 
    // -> 1

    console.log(usersMapped[0].fullName) 
    // -> John Smith

  Link:
    http://javascript.info/task/map-objects
*/