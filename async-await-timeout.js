    let promiseObj=new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Hello ");
        },3000)
    })
    async function display()
    {
        let greetings=await promiseObj;
        return greetings+"Samarth";
    }
    display().then(function(finalGreetings){
        console.log(finalGreetings);
    });