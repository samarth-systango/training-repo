    function samplePromise()
    {
        let createPromise=new Promise(function(resolve,reject){
            //In this we basically write producing code 
            let age=2;
            if(age>=18)
            {
                resolve("Person is Elligible to vote");
            }
            reject("Not elligible to vote");
        })
        return createPromise;
    }
    //here we basically wait for the results
    samplePromise().then(function(value){
        console.log(value)
    }).catch(function(error){
        console.log(error);
    });