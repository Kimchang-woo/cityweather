let weathericon = document.querySelector("#weathericon")
let temp = document.querySelector("#temp")
let wind = document.querySelector("#wind")
let hum = document.querySelector("#hum")
let description = document.querySelector("#description")

let API_key = 'ee6f378df5a56bb6db3498e0d3e4a5e6'
let cityname = document.querySelector(".cityname h1").textContent.trim();

let weather = async()=>{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&units=metric`)
    let data = await response.json();

    console.log(data);
    temp.textContent =`${data.main.temp} ℃`
    wind.textContent = `${data.wind.speed} m/s`;
    hum.textContent =`${data.main.humidity} %` ;
    weathericon.src= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    if(data.main.temp > 25){
        description.textContent = `Very Hot`
    }else if(data.main.temp < 25 && data.main.temp > 15){
        description.textContent = `Warm`
    }else if(data.main.temp < 15 && data.main.temp > 5){
        description.textContent = `Cool`
    }else if(data.main.temp < 5 && data.main.temp > -5){
        description.textContent = `Cold`
    }else{
        description.textContent = `Very Cold`
    } 
}
weather()



function timeupdate(){
    const todaydate = document.querySelector("#todaydate")
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2,'0');
    const date =String(now.getDate()).padStart(2,'0');

    const weekdays = ['일','월','화','수','목','금','토'];
    const day = weekdays[now.getDay()];

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); 

    const datetime = `${year}-${month}-${date} (${day}요일) ${hours}:${minutes}:${seconds}`;

    todaydate.textContent = datetime
}
setInterval(timeupdate, 1000)

timeupdate()