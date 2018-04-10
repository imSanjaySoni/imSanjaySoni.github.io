//created by Sanjay Soni
//www.facebook.com/imsanjaySoni
//www.github.com/imsanjaysoni
//Date 10-04-2018

 const API_KEY = "fb91dcc934932b623935ff16e9b8ca8e";


  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived);
    }else{
        alert("your Location not found");}  

function onPositionReceived(position){
    var long = position.coords.longitude;
    var lat = position.coords.latitude;

    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID="+API_KEY;
     var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
       
        xhr.onreadystatechange = processRequest;

        function processRequest(e) {

            var cityName = document.getElementById('city');
            var tempreture = document.getElementById('temp');
            var description = document.getElementById('description');
            var windSpeed = document.getElementById('wind-speed');
            var humidityD = document.getElementById('humidity');
            var conditionImg = document.getElementById('condition-img');
            var sunrise = document.getElementById("sunrise");
            var sunset = document.getElementById("sunset");
            var pressure = document.getElementById("pressure");

            function toHours(timestamp) {
            const date = new Date(timestamp * 1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if (minutes < 10) minutes = `0${minutes}`;
            if (hours < 10) hours = `0${hours}`;
            return `${hours}:${minutes} (GMT-6)`;
        }
 

        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            cityName.innerHTML = data.name+", "+data.sys.country;
            tempreture.innerHTML = Math.round((data.main.temp)-273.15) +'&deg;C';
            description.innerHTML = data.weather[0].description;
            conditionImg.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
            windSpeed.innerHTML = data.wind.speed +" m/s" ;
            humidityD.innerHTML = data.main.humidity +"%";
            pressure.textContent = data.main.pressure+' hPa';
            sunrise.textContent = toHours(data.sys.sunrise);
            sunset.textContent = toHours(data.sys.sunset);

    }
}xhr.send();

}

//for second


function getCity(){
     var city = document.getElementById("setcity").value;
     var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+API_KEY;


     var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
       
        xhr.onreadystatechange = processRequest;

        function processRequest(e) {

            var cityName = document.getElementById('city');
            var tempreture = document.getElementById('temp');
            var description = document.getElementById('description');
            var windSpeed = document.getElementById('wind-speed');
            var humidityD = document.getElementById('humidity');
            var conditionImg = document.getElementById('condition-img');
            var sunrise = document.getElementById("sunrise");
            var sunset = document.getElementById("sunset");
            var pressure = document.getElementById("pressure");

            function toHours(timestamp) {
            const date = new Date(timestamp * 1000);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if (minutes < 10) minutes = `0${minutes}`;
            if (hours < 10) hours = `0${hours}`;
            return `${hours}:${minutes} (GMT-6)`;
        }

 



        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);

            cityName.innerHTML = data.name+", "+data.sys.country;
            tempreture.innerHTML = Math.round((data.main.temp)-273.15) +'&deg;C';
            description.innerHTML = data.weather[0].description;
            conditionImg.src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
            windSpeed.innerHTML = data.wind.speed +" m/s" ;
            humidityD.innerHTML = data.main.humidity +"%";
            pressure.textContent = data.main.pressure+' hPa';
            sunrise.textContent = toHours(data.sys.sunrise);
            sunset.textContent = toHours(data.sys.sunset);
    }
}xhr.send();


};



