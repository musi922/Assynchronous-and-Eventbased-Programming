fetch('https://jsonplaceholder.typicode.com/todos',{
     method:'POST',
     body: JSON.stringify({
          name: 'user 222'
     })
})
     .then((res)=>{
          
          return res.json()
     })
     .then((data)=>console.log(data))
     .catch((error)=>console.log(error))  