    //1st way of decleration
    let names=["samarth","amit","pushpak"];
    console.log(names);
    //2nd way of decleration
    let cities=[];
    cities[0]="Indore";
    cities[1]="Ujjain";
    cities[2]="Bangalore"
    console.log(cities);
    //3rd way of decleration
    let animals=[
        "dog",
        "cat",
        "lion"
    ];
    console.log(animals);
    //4th way of decleration
    let relations=new Array("brother","sister","wife","child");
    console.log(relations);
    console.log(typeof(cities));
    //type of arrays is object in nature arrays are objects 
    //in which the array are special type of object in which 
    //array members are accessed by the indexing concepts
    
    //array memeber can be of any different type there is no strict restriction
    //on the members of array they can be of any data types
    //they can be function,objects,integer value etc.
    let sampleObject={
        fistName:"Samarth Wath",
        City:"Indore",
        Department:"Node.js"
    };
    let demoFunction=()=>{
        // console.log("Inside basic arrow function");
        // console.log("Inside demo function");
        return "Hello-World";
    }
    console.log("The Sample-Object: ",sampleObject);
    demoFunction();
    let dynamicArray=[];
    dynamicArray[0]=sampleObject;
    dynamicArray[1]=45.2;
    dynamicArray[2]=demoFunction();
    console.log(dynamicArray);
    //length is property of array not a method which returns the number of elements
    //present in the array
    console.log(dynamicArray.length);
    //access last element of the array
    console.log(dynamicArray[dynamicArray.length-1]);
    //adding an element to the dynamic array
    dynamicArray.push(100);
    console.log(dynamicArray);
    console.log(dynamicArray.length);
    dynamicArray[dynamicArray.length]="hey geeks!!!!"
    console.log(dynamicArray);
    /*
    1. In javascript there only exists numbered indexes named indexes is not available 
       in javascript
    2. If named indexes still used javascript will define it as objects and some 
       methods of javascript would run incorrectly
    3. Named Indexes arrays are also known as associative arrays.
    4. Javascript does not support associative arrays.
    */

    /* 
    Difference between objects and arrays in javascript
    1. Objects works on Named Indexes whereas array works on numbered indexes.
    */

    //No need to use javascript built in constructor using new keyword
    //This will take more time for execution at the same time it also creates ambiguity
    //Example: 

    //This creates an array with 2 elements that are 40 & 200
    let numbersArray=new Array(40,200);
    console.log(numbersArray);
    console.log(numbersArray.length);

    //This creates an array with 10 elements of undefined elements.
    let anotherNumbersArray=new Array(10);
    console.log(anotherNumbersArray);
    console.log(anotherNumbersArray[5]);
    console.log(anotherNumbersArray.length);

    /*
    1. In order to avoid the ambiguity to check whether the the given
       variable is array or object ES5 has given its own method of 
    2. Array.isArray(variable-name) true---->array
                                    false--->array
    Eg:
    */
   
    let demoArray=["hello","sitara"];
    console.log(demoArray);
    console.log(Array.isArray(demoArray));

    let demoObject={
        firstName:"Amit",
        lastName:"surana",
        city:"Delhi"
    };
    console.log(demoObject);
    console.log(Array.isArray(demoObject));
    