const buttonClick=document.getElementById("btn");
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '992eab9bc6mshacc552a9cbcac67p144118jsn07d099d51ea0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

buttonClick.onclick=function(){
    const city=document.getElementById("search").value;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;

    fetch(url,options)
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        document.getElementById("searchCard").style.display="block"
        document.getElementById("title").innerHTML=city
        document.getElementById("temperature").innerHTML="Temperature is: "+response.temp
        if(response.temp >= 26){
            document.getElementById("cloudImage").innerHTML='<i class="bi bi-cloud-sun-fill icon-100"></i>'
            document.getElementById('searchCardBody').style.backgroundImage="url(./white-cloud-blue-sky.jpg)"
        }
        else if(response.temp < 20){
            document.getElementById("cloudImage").innerHTML='<i class="bi icon-100 bi-cloud-lightning-rain-fill"></i>'
            document.getElementById("searchCardBody").style.backgroundImage="url(./sea-5181726_1280.jpg)"
        }
        else if(response.temp > 20 && response.temp < 26){
            document.getElementById("cloudImage").innerHTML='<i class="bi icon-100  bi-cloud-rain-fill"></i>'
            document.getElementById("searchCardBody").style.backgroundImage="url(./sea-5181726_1280.jpg)"
        }
        document.getElementById("humidity").innerHTML="Humidity is: "+response.humidity
        document.getElementById("sunrise").innerHTML="Sunrise Time: "+response.sunrise
        document.getElementById("sunset").innerHTML="Sunset Time: "+response.sunset
    })
    .catch(err => console.log(err))

    document.getElementById("search").value="";
}

const cities=['delhi','kolkata','mumbai','chennai']

cities.map((city,index)=>{
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    fetch(url,options)
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        document.getElementById(city+"Temperature").innerHTML="Temperature is: "+response.temp
        if(response.temp >= 26){
            document.getElementById(city+"WeatherImg").innerHTML='<i class="bi bi-cloud-sun-fill icon-100"></i>'
            document.getElementById(city+'CardBody').style.backgroundImage="url(./white-cloud-blue-sky.jpg)"
        }
        else if(response.temp < 20){
            document.getElementById(city+"WeatherImg").innerHTML='<i class="bi icon-100 bi-cloud-lightning-rain-fill"></i>'
            document.getElementById(city+"CardBody").style.backgroundImage="url(./sea-5181726_1280.jpg)"
        }
        else if(response.temp > 20 && response.temp < 26){
            document.getElementById(city+"WeatherImg").innerHTML='<i class="bi icon-100  bi-cloud-rain-fill"></i>'
            document.getElementById(city+"CardBody").style.backgroundImage="url(./sea-5181726_1280.jpg)"
        }
        document.getElementById(city+"Humidity").innerHTML="Humidity is: "+response.humidity
        document.getElementById(city+"Sunrise").innerHTML="Sunrise Time: "+response.sunrise
        document.getElementById(city+"Sunset").innerHTML="Sunset Time: "+response.sunset
    })
})
