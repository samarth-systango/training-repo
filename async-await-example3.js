    //await keyword can only be used inside an async function only
    //await keyword makes the function wait for a promise 
    function checkData()
    {
        let promiseValue=new Promise(function(resolve,reject){
            let value=100;
            if(value==5)
            {
                resolve("Data Validated");
            }
            else
                reject("Invalid Data");
        });
        return promiseValue;
    }
    async function finalResults()
    {
        let result=await checkData();
        try
        {
            console.log(result);
        }
        catch
        {
            console.log(result);
        }
    }
    finalResults().then().catch(function(error){
        console.log(error);
    });



