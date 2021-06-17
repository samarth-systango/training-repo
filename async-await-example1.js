    //async and await are the easy ways to implement the promises concept
    //async keyword makes the function return a promise
    //await keyword makes the function wait for a promise
    //If normal value expected and no error will be their is checked then simply make use of .then(callback) 
    async function myDemo()
    {
        return "Hello";
    }
    myDemo().then(function(value){
        console.log(value+" Samarth");
    });
    //another way to implement the above example
    async function createFunction()
    {
        return Promise.resolve("Hello Everyone!!");
    }
    createFunction().then(function(getValue){
        console.log(getValue);
    })

