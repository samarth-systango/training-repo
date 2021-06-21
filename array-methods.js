    let sampleArray=[1,2.5,3,"hello","person"];
    //Printing array as it is 
    console.log(sampleArray);
    //converting array values to string format where value will be seperated by commas
    console.log(sampleArray.toString());
    console.log("Heya!!!!!!!!!!");
    console.log(typeof(sampleArray.toString()));
    //join behaves same as to string but instead of , operatore you can specify 
    //your own operator
    console.log(sampleArray.join("*"));
    //seperator is of string type format if not specified by default comma would be considered
    console.log(sampleArray.join());
    
    /*Important Methods: 
    1. PUSH  (Add elements at the end of the array)             (STACK concept)
    2. POP    (Removes elements from the TOP)                   (STACK concept)
    3. SHIFT   (Removes elements from the front)                (QUEUE concept)
    4. UNSHIFT  (Add elements at the front of the array)        (QUEUE concept)
    */

    //Example of the above methods

    let citiesArray=["Indore","Bangalore","Chennai","Hyderabad","Nagpur"];
    console.log(citiesArray);
    citiesArray.push("Delhi");
    console.log(citiesArray);
    citiesArray.pop();
    console.log(citiesArray);
    citiesArray.unshift("gurugram");
    console.log(citiesArray);
    citiesArray.shift();
    console.log(citiesArray);
    console.log("\n");
    let names=["samarth","aman", "amit", "pushpak", "vinayak"];
    console.log(names);
    console.log(names.length);
    //splice method used to add new items in the array
    //splice actual meaning is that to join two things together
    names.splice(2,0,"hello","world","geeks");
    console.log(names);
    console.log(names.length);
    
    //splice(start_index, delete_count, items)
    //to delete elements from the array

    let fruits=["apple", "banana", "papaya", "gvava"];
    console.log(fruits);
    console.log(fruits.length);
    fruits.splice(0,3,"mango", "oranges");
    console.log(fruits);
    console.log(fruits.length);

    let departmentsArray=["IT", "Finance", "Sales", "Marketing"];
    console.log(departmentsArray);
    console.log(departmentsArray.length);
    departmentsArray.splice(0,1);
    console.log(departmentsArray);


    //concat method of array used to concat any number of arrays
    //it returns new array and old arrays remain as it is.
    let newArray=sampleArray.concat(fruits,departmentsArray);
    console.log(newArray);

    //slice(start_index,end_index)
    //but it does not includes end index
    //if end index not specified it takes up to the end of the array
    let relationshipArray=["brother", "sister", "spouse", "husband", "mother"];
    console.log(relationshipArray);
    let slicedArray=relationshipArray.slice(0,3);
    console.log(slicedArray);
    let demoSlicedArray=relationshipArray.slice(2);
    console.log(demoSlicedArray);