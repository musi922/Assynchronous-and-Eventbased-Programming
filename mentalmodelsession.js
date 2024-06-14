function tasks(callback) {
    setTimeout(() => {
        callback()
    }, 2000);
    
}
tasks(()=>{
    console.log("This is my first task");
});

function createAlarm(personName,delay) {
    return new Promise((resolve, reject) => {
        if(delay < 2) {
            reject("Delay is not sufficient")
        }
        setTimeout(() => {
                resolve(`Wake up ${personName}`)  
        }, delay*1000);
    })
}

createAlarm('Richard',1)
.then((message)=>console.log(message))
.catch((error)=>console.log(error))


// function tastePromise(personName,delay) {
//     return new Promise((resolve, reject) => {
//         if(delay < 2) {
//             reject("Delay is not sufficient")
//         }
//         setTimeout(() => {
//                 resolve(`Wake up ${personName}`)  
//         }, delay*1000);
//     })}

// console.log(tastePromise('richard',3));
