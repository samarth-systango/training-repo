    //This loop mainly works with objects as it is used to iterate over keys
    //It can also be used with arrays
    //In case of objects it access keys
    //In case of array it access index of the array
    let employeeDetails={
        employeeName:"Samarth Wath",
        employeeDepartment:"Nodejs",
        employeeSalary:22000,
        employeeCity:"Indore",
        employeeCode:10696
    };
    console.log("Keys of object: ","employeeDetails");
    for(let keys in employeeDetails){
        console.log(keys);
    }
    console.log("Values of object: ","employeeDetails");
    for(let keys in employeeDetails){
        console.log(employeeDetails[keys]);
    }
    let randomArray=[100,200,300,400,500];
    for(let value in randomArray){
        console.log(randomArray[value]);
    }
