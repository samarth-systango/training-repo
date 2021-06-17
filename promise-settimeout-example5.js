    let promiseValue=new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Hello Everyone");
        },3000);
    });
    promiseValue.then(function(value){
        console.log(value);
    });