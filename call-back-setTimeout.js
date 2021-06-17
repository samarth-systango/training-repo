    setTimeout(makeCall,3000);
    function makeCall()
    {
        console.log("Hello World");
    }
    //setTimeout function take two arguments a call back function and time 
    //2nd Approach to use setTimeout function
    setTimeout(()=>{
        console.log("Hello Geeks!!!");
    },5000)
