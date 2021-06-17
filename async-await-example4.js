    function promiseValue()
    {
        let promiseVariable=new Promise(function(resolve,reject){
            let value=5;
            if(value==5)
            {
                resolve("Correct Value");
            }
            throw new Error("Invalid Value");
        });
        return promiseVariable;
    }
    async function displayResults()
    {
        try 
        {
            let evaluatedData=await promiseValue(); 
            console.log(evaluatedData);   
        } 
        catch (error) 
        {
            console.log(error.message);   
        }
        //return 1;
    }
    displayResults().then();
    //displayResults();
    //both syntaxes would work