let URL2 = "http://api.openweathermap.org/data/2.5/onecall?lat=49.99&lon=4.1005&lang=fr&units=metric&exclude=minutely,hourly,alerts&appid=23affb86e06c929816326e1bd76c4476";// API pour Anor, metric = celcius, prévisions 4j
console.log(URL2);

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", URL2);
xhr2.responseType = "json";

xhr2.onload = function () {
    if (xhr2.status !== 200) {
        alert("Une erreur est survenue");
        return;
    }
    let response = xhr2.response;
    let aujourdhui = new Date();
    //Jour1 -> Lendemain
    document.getElementById("date1").innerHTML =  (aujourdhui.getDate() + 1 ) + "/" + aujourdhui.getMonth() + 1 + "/" + aujourdhui.getFullYear();
    document.getElementById("tempsMax1").innerHTML += Math.round(response.daily[0].temp.max) + "°";
    document.getElementById("tempsMin1").innerHTML += Math.round(response.daily[0].temp.min) + "°";

    if (response.daily[0].weather[0].main === "Cloudy"){ //soleil avec nuage
        document.getElementById("imageTemps1").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun-behind-cloud_26c5.png";
    }
    if(response.daily[0].weather[0].main === "Clouds"){ //nuages
        document.getElementById("imageTemps1").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud_2601-fe0f.png";
    }
    if (response.daily[0].weather[0].main === "Fog" || response.daily[0].weather[0].main === "Haze" || response.daily[0].weather[0].main === "Mist") { //brouillard et brume
        document.getElementById("imageTemps1").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fog_1f32b-fe0f.png";
    }
    if(response.daily[0].weather[0].main === "Rain"){ //nuage avec pluie
        document.getElementById("imageTemps1").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-rain_1f327-fe0f.png";
    }
    if (response.daily[0].weather[0].main === "Clear"){ //soleil
        document.getElementById("imageTemps1").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun_2600-fe0f.png";
    }
    if (response.daily[0].weather[0].description === "Snowy"){ //nuage avec neige
        document.getElementById("imageTemps1").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-snow_1f328-fe0f.png";
    }
    if (response.daily[0].weather[0].description === "Stormy"){ //nuage avec éclair
        document.getElementById("imageTemps1").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-lightning_1f329-fe0f.png";
    }

    //Jour2
    document.getElementById("date2").innerHTML =  (aujourdhui.getDate() + 2 ) + "/" + aujourdhui.getMonth() + 1 + "/" + aujourdhui.getFullYear();
    document.getElementById("tempsMax2").innerHTML += Math.round(response.daily[1].temp.max) + "°";
    document.getElementById("tempsMin2").innerHTML += Math.round(response.daily[1].temp.min) + "°";

    if (response.daily[1].weather[0].main === "Cloudy"){ //soleil avec nuage
        document.getElementById("imageTemps2").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun-behind-cloud_26c5.png";
    }
    if(response.daily[1].weather[0].main === "Clouds"){ //nuages
        document.getElementById("imageTemps2").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud_2601-fe0f.png";
    }
    if (response.daily[1].weather[0].main === "Fog" || response.daily[1].weather[0].main === "Haze" || response.daily[1].weather[0].main === "Mist") { //brouillard et brume
        document.getElementById("imageTemps2").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fog_1f32b-fe0f.png";
    }
    if(response.daily[1].weather[0].main === "Rain"){ //nuage avec pluie
        document.getElementById("imageTemps2").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-rain_1f327-fe0f.png";
    }
    if (response.daily[1].weather[0].main === "Clear"){ //soleil
        document.getElementById("imageTemps2").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun_2600-fe0f.png";
    }
    if (response.daily[1].weather[0].description === "Snowy"){ //nuage avec neige
        document.getElementById("imageTemps2").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-snow_1f328-fe0f.png";
    }
    if (response.daily[1].weather[0].description === "Stormy"){ //nuage avec éclair
        document.getElementById("imageTemps2").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-lightning_1f329-fe0f.png";
    }

    //Jour3
    document.getElementById("date3").innerHTML =  (aujourdhui.getDate() + 3 ) + "/" + aujourdhui.getMonth() + 1 + "/" + aujourdhui.getFullYear();
    document.getElementById("tempsMax3").innerHTML += Math.round(response.daily[2].temp.max) + "°";
    document.getElementById("tempsMin3").innerHTML += Math.round(response.daily[2].temp.min) + "°";

    if (response.daily[2].weather[0].main === "Cloudy"){ //soleil avec nuage
        document.getElementById("imageTemps3").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun-behind-cloud_26c5.png";
    }
    if(response.daily[2].weather[0].main === "Clouds"){ //nuages
        document.getElementById("imageTemps3").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud_2601-fe0f.png";
    }
    if (response.daily[2].weather[0].main === "Fog" || response.daily[2].weather[0].main === "Haze" || response.daily[2].weather[0].main === "Mist") { //brouillard et brume
        document.getElementById("imageTemps3").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fog_1f32b-fe0f.png";
    }
    if(response.daily[2].weather[0].main === "Rain"){ //nuage avec pluie
        document.getElementById("imageTemps3").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-rain_1f327-fe0f.png";
    }
    if (response.daily[2].weather[0].main === "Clear"){ //soleil
        document.getElementById("imageTemps3").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun_2600-fe0f.png";
    }
    if (response.daily[2].weather[0].description === "Snowy"){ //nuage avec neige
        document.getElementById("imageTemps3").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-snow_1f328-fe0f.png";
    }
    if (response.daily[2].weather[0].description === "Stormy"){ //nuage avec éclair
        document.getElementById("imageTemps3").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-lightning_1f329-fe0f.png";
    }

    //Jour4
    document.getElementById("date4").innerHTML =  (aujourdhui.getDate() + 4 ) + "/" + aujourdhui.getMonth() + 1 + "/" + aujourdhui.getFullYear();
    document.getElementById("tempsMax4").innerHTML += Math.round(response.daily[3].temp.max) + "°";
    document.getElementById("tempsMin4").innerHTML += Math.round(response.daily[3].temp.min) + "°";

    if (response.daily[3].weather[0].main === "Cloudy"){ //soleil avec nuage
        document.getElementById("imageTemps4").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun-behind-cloud_26c5.png";
    }
    if(response.daily[3].weather[0].main === "Clouds"){ //nuages
        document.getElementById("imageTemps4").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud_2601-fe0f.png";
    }
    if (response.daily[3].weather[0].main === "Fog" || response.daily[3].weather[0].main === "Haze" || response.daily[3].weather[0].main === "Mist") { //brouillard et brume
        document.getElementById("imageTemps4").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fog_1f32b-fe0f.png";
    }
    if(response.daily[3].weather[0].main === "Rain"){ //nuage avec pluie
        document.getElementById("imageTemps4").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-rain_1f327-fe0f.png";
    }
    if (response.daily[3].weather[0].main === "Clear"){ //soleil
        document.getElementById("imageTemps4").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun_2600-fe0f.png";
    }
    if (response.daily[3].weather[0].description === "Snowy"){ //nuage avec neige
        document.getElementById("imageTemps4").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-snow_1f328-fe0f.png";
    }
    if (response.daily[3].weather[0].description === "Stormy"){ //nuage avec éclair
        document.getElementById("imageTemps4").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-lightning_1f329-fe0f.png";
    }
}

xhr2.send();
console.log(xhr2);
