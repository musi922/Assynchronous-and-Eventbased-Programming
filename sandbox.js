function sayhi(name, callback) {
     console.log(`hi ${name}`);
     callback()
     
}
function sayhello() {
     console.log("I am cool buddy");
     
}

sayhi('richard', sayhello)