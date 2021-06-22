    let namesArray=["samarth", "abhilash", "ankit", "suresh", "ramesh"];
    console.log(namesArray);
    //forEach() is method used on array but it is also a known as a 
    //loop which is used to iterate over the elements
    //it basically takes a callback function
    namesArray.forEach((name)=>{
        console.log(name);
    });
    /*
    1. The map() creates a new array by performing a function on each array element.
    2. The map() method does not change the original array values.
    3. The callback function takes 3 parameters index, value, array 
    4. The order of parameters are value, index, array 
    */
   
    let numbersArray=[10,20,30,40,50];
    console.log(numbersArray); 
    let finalArray=numbersArray.map((value)=>{
        value++;
        return value;
    });
    console.log(finalArray);
    console.log(numbersArray);
    let indexValues=numbersArray.map((value,index,array)=>{
        return index;
    });
    console.log(indexValues);

    let arrayObjects=[
        {
            name:"onePlus",
            price:"25000"
        },
        {
            name:"oppo",
            price:"15000"
        },
        {
            name:"vivo",
            price:"20000"
        },
        {
            name:"mi",
            price:"12000"
        }];
        console.log(arrayObjects);
        let priceArray=arrayObjects.map((value)=>{
            return value.price;
        });
        console.log(priceArray);

        let productNames=arrayObjects.map((value)=>{
            return value.name;
        });
        console.log(productNames);

        /*
        1. filter method when implemented on array returns new array.
        2. It works same as map method that its callback function perfrom operation on each and every element of the array.
        3. The callback function specific task is to filter the data if and when required.
        4. Same parameters are present that are value, index and array.
        */

        let agesArray=[25,15,35,45,8,21,18];
        console.log(agesArray);
        let validAges=agesArray.filter((value,index,array)=>{
            if(value>=18)
            {
                return value;
            }
        });
        console.log(validAges);

        /*
        1. The reduce method runs a function on each and every element of the array. 
        2. It is used to reduce the entire array to a single value.
        3. It does not reduces original array.
        4. It takes 4 arguments total, value, index, array.
        */
        /*
        Working: 
        1. initially total=0    value=10;
        2.           total=10   value=20;
        3.           total=30   value=30;
        4.           total=60   value=40;
        5.           total=100  value=50;
                     total=150;
         
         */


        let randomValuesArray=[10,20,30,40,50];
        let sum=randomValuesArray.reduce((total,value)=>{
            return total+value;
        },0);
        //initial value of total=0;
        console.log(sum);
        console.log(randomValuesArray);

        /*
        1. every() method checks whether some given condition/test is passed by all array elements or not 
        2. return type of this method is boolean
        */

        let checkedValues=randomValuesArray.every((value,index,array)=>{
            return value%10==0;
        });
        console.log(checkedValues);

        /* 
        1. some() method checks whether some given condition/test is passed by some array elements or not
        2. return type of this method is boolean
        */

        let someCorrect=randomValuesArray.some((value,index,array)=>{
            return value%400==0;
        });
        console.log(someCorrect);


