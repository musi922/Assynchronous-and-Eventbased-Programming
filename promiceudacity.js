function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('cloudy')
        
    },100);
    
  })
  
}

function getWeathericon(weather) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (weather) {
        case 'sunny':
          resolve('🤣')
          break;
        case 'rainy':
          resolve('😍')
          break;
        case 'cloudy':
          resolve('👍')
          break;
        default:
          reject('no icon found')

      } 
    },);
  })  
}
function onsuccess(data) {
  console.log(`success: ${data}`);
  
}
function onerror(error) {
  console.log(`error: ${error}`);
  
}
getWeather()
.then(getWeathericon)
.then(onsuccess,onerror)