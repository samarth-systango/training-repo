    function demoPromiseCreation()
    {
        let promiseObject=new Promise(function(resolve,reject){
            let valueFetched=5;
            if(valueFetched==5)
            {
                resolve("Success");
            }
            reject("Failure");
        });
        return promiseObject;
    }

    demoPromiseCreation().then(function(message){
        console.log(message);
    }).catch(function(error){
        console.log(error);
    })
    
