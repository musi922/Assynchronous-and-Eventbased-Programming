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

async function handlingfunctions(){
    try{
        let thedoghaswalked = await walkthedog();
        console.log(thedoghaswalked);
        let theytookOutTrash = await takeOutTrash();
        console.log(theytookOutTrash);
        let theycleanedkitchen = await cleankitchen();
        console.log(theycleanedkitchen);

        console.log("you finished the work");
    }
    catch(error){
        console.log(error);
    }
}
handlingfunctions()
