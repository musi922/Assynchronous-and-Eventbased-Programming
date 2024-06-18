function walkthedog(){
    return new Promise((resolve,reject)=>{
        const thedogwalked = true
        setTimeout(()=>{
            if(thedogwalked){
                resolve("The dog has walked")
            }
            else{
                reject ("you didnot walk the dog")
            }
        },2000)
    })
}
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        const youtakeOutTrash = true
        setTimeout(()=>{
            if(youtakeOutTrash){
                resolve("you took Out Trash")            }
            else{
                reject ("you didnot take Out Trash")
            }
        },1500)
    })
}
function cleankitchen(){
    return new Promise((resolve,reject)=>{
        const kitcheniscleaned = true
        setTimeout(()=>{
            if(kitcheniscleaned){
                resolve("you cleaned kitchen")
            }
            else{
                reject ("you didnot clean kitchen")
            }
        },2000)
    })
}

// walkthedog().then(value=>{console.log(value); return takeOutTrash()})
//            .then(value=>{console.log(value); return cleankitchen()})
//            .then(value=>{console.log(value); console.log("All done buddy");})
//            .catch(error=>{console.log(error);})



//use of async and await in handling promises

// async function handlingfunctions(){
//     try{
//         let thedoghaswalked = await walkthedog();
//         console.log(thedoghaswalked);
//         let theytookOutTrash = await takeOutTrash();
//         console.log(theytookOutTrash);
//         let theycleanedkitchen = await cleankitchen();
//         console.log(theycleanedkitchen);

//         console.log("you finished the work");
//     }\n 
//     catch(error){
//         console.log(error);
//     }
// }
// handlingfunctions()

// let promise = new Promise((resolve, reject) => {
//     let a = 1+1+3;
//     if (a==2) {
//         resolve("success")  
//     }
//     else{
//         reject('failed')
//     }
// })

// promise
//        .then((message)=>{console.log(message);})
//        .catch((error)=>{console.log(error);}) 

// let UserLeft = false
// let Userwatchinggame = false
// function watchtutorialpromise() {
//     return new Promise((resolve, reject) => {
//         if (UserLeft) {
//             reject({
//                 name: 'Use Left',
//             messages: ':('
//             })
            
//         }
//          else if (Userwatchinggame){
//             reject({
//                 name: 'Userwatchinggame',
//                 messages: 'website '
//             })
            
//         }
//         else {
//             resolve("Thumbs and subscribe")
//         }
//     })
    
// }
// watchtutorialpromise().then((messages)=>{
//     console.log('success' + messages);
// }).catch((error)=>{
//     console.log(error.name + ' ' + error.messages);
// })

const recordVideoOne = new Promise((resolve, reject) => {
    reject('video 1 recorded')
})
const recordVideotwo = new Promise((resolve, reject) => {
    resolve('video 2 recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('video 3 recorded')
})

// Promise.all([
//     recordVideoOne,
//     recordVideotwo,
//     recordVideoThree
// ]).then((messages)=>{console.log(messages);})
 async function solvingpromise() {
    try {
        let therecordedone = await recordVideoOne
        console.log(therecordedone);
        let therecordedtwo = await recordVideoOne
        console.log(therecordedtwo);
        let therecordedthree = await recordVideoOne
        console.log(therecordedthree);
        
    } catch (error) {
        console.log('Error');
        
    }
    
 }

 solvingpromise()