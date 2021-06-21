    //sort() function sorts the string array in ascending order
    let stringsArray=["hello", "world", "cello"];
    console.log(stringsArray);
    stringsArray.sort();
    console.log(stringsArray);
    console.log(Array.isArray(stringsArray));
    let numbersArray=[5,10,100,1,4,3,200];
    console.log(numbersArray);
    numbersArray.sort((a,b)=>{
        return a-b;
    });
    console.log(numbersArray);
