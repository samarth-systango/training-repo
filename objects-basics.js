    //creating object literal
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
    