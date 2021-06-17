    //producing code take some time to produce the results 
    //consuming code must wait for the results 
    //Promise basically links producing code as well as consuming code
    //promise object contains both the producing code and calls to the consuming code 

    let promiseObject=new Promise((resolve,reject)=>{
        console.log("Perform Calculation....");
        isValue=false;
        if(isValue)
        {
            resolve("Success");
        }
        reject("Failure");
    });
    promiseObject.then(function(val){
        console.log(val)
    }).catch(function(error){
        console.log(error);
    });
    //Promise.then()-->It takes two arguments a callback for success and a callback for failure
    //both are optional you can add only one also either of resolve or of reject 
    //when by using promise if only value is to be returned then just simply make use of resolve and from .then(callback) you can 
    //get the returned value. 