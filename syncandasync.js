// //synchronous
// function task1(){
//     console.log("task1 completed");
// }
// function task2(){
//     console.log("task2 completed");
// }
// function task3(){
//     console.log("task3 completed");
// }
// function task4(){
//     console.log("task4 completed");
// }

// task1()
// task2()
// task3()
// task4()
// console.log("All done");
//asynchronous
// function task1(){
//     setTimeout(()=>{
//         console.log("task1 completed");},2000)
// }
// function task2(){
//     setTimeout(()=>{
//         console.log("task2 completed");},1000)
// }
// function task3(){
//     setTimeout(()=>{
//         console.log("task3 completed");},4000)
// }
// function task4(){
//     setTimeout(()=>{
//         console.log("task4 completed");
//     },3000)
// }
// task1()
// task2()
// task3()
// task4()

//Callback and Callback hell

function task1(Callback){
    setTimeout(()=>{
        console.log("task1 completed");
        Callback()
    },2000)
}
function task2(Callback){
    setTimeout(()=>{
        console.log("task2 completed");
        Callback()
    },1000)
}
function task3(Callback){
    setTimeout(()=>{
        console.log("task3 completed");
        Callback()
    },4000)
}
function task4(Callback){
    setTimeout(()=>{
        console.log("task4 completed");
        Callback()
    },3000)
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{console.log("All tasks are done");})
        })//over adding of this can lead to callback hell
    })
})


