    let promiseObject=new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Hello ");
        },3000)
    });
    async function displayFinal()
    {
        let greetings=await promiseObject;
        console.log(greetings+"Everyone!!");
    }
    displayFinal();