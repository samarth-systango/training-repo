    //creating object literal
    //diffrence between objects and variable: 
    //variable can contain only single value whereas object can hold many values
    let demoObject={
        firstName:"Samarth",
        lastName:"Wath",
        department:"Backend/Nodejs",
        location:"Indore"
    };
    console.log(demoObject);
    //accessing objects value in differnt ways
    console.log(demoObject["firstName"]);
    console.log(demoObject.firstName);
    console.log(demoObject.location);
    demoObject.location="Gurgaon"
    console.log(demoObject);
    console.log(demoObject.location);
    demoObject.myWeigth=85;
    console.log(demoObject);
    console.log(demoObject.myWeigth);

    let sampleObject={
        productName:"onePlus",
        price:15000,
        displayData: function(){
            console.log("In display data function");
            return 100;
        }
    }
    console.log(sampleObject);
    let fetchValue=sampleObject.displayData();
    console.log(fetchValue);
    function helloWorld()
    {
        console.log("In Hello World function");
    }
    console.log(typeof(helloWorld()));
    let randomArray=[10,20,30];
    console.log(typeof(randomArray));


    //creating object using new keyword
    let objectFirst=new Object();
    objectFirst.name="Samarth Wath";
    objectFirst.city="Bangalore";
    objectFirst.department="Nodejs"

    console.log(objectFirst);

    //objects are mutable they are refered by reference but not by value
    //both x and objectFirst is same they are not different
    let x=objectFirst;
    x.city="Indore"
    console.log(x);
    console.log(objectFirst);

    //JSON.stringify() method converts object to string it does not stringify functions
    let stringConvertedArray=JSON.stringify(objectFirst);
    console.log(stringConvertedArray);

    //object to array using Object.values() method
    let convertedArray=Object.values(objectFirst);
    console.log(convertedArray);

    //object constructor
    function personDetails(name,age,contact)
    {   
        this.name=name;
        this.age=age;
        this.contact=contact;
    }
    //object constructors
    let firstPerson=new personDetails("samarth",21,2554140);
    let secondPerson=new personDetails("amit",22,2558241);
    console.log(firstPerson);
    console.log(secondPerson);

    