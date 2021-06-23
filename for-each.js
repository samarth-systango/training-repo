    //This loop mainly works with the array
    let numbersArray=[10,20,30,40,50,60];
    console.log(numbersArray);
    numbersArray.forEach((value)=>{
        console.log(value);
    });
    function PersonDetails(firstName,lastName,age,city)
    {   
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.city=city;
    }
    let firstPerson=new PersonDetails("Samarth","Wath",21,"Indore");
    let secondPerson=new PersonDetails("Amit","Raghuwanshi",22,"Indore");
    let demoArray=[];
    demoArray.unshift(secondPerson);
    demoArray.unshift(firstPerson);
    console.log(demoArray);
    //Iterating array of objects using for-each loop displaying only names

    demoArray.forEach((value)=>{
        console.log(value.firstName+" "+value.lastName);
    });
