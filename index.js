var lat;
var lng;
var ip;
var location2;
var tz;
var isp;
function garg()
{
    var t=document.getElementById("in").value;
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_imvfeUTbIwglenUon4MWXNGWCzFPG&ipAddress="+t)
    .then(response=>response.json())
    .then((data=>{lat=data.location.lat;
                  lng=data.location.lng;
                  ip=data.ip;
                  location2=data.location.region+", "+data.location.city;
                  tz=data.location.timezone;
                  isp=data.isp;
                }))
    .then(we=>{
                    document.getElementById("d1").innerHTML=ip;
                    document.getElementById("d2").innerHTML=location2;
                    document.getElementById("d3").innerHTML=tz;
                    document.getElementById("d4").innerHTML=isp;
                    document.getElementById("p1").innerHTML="IP ADDRESS";
                    document.getElementById("p2").innerHTML="LOCATION";
                    document.getElementById("p3").innerHTML="TIME ZONE";
                    document.getElementById("p4").innerHTML="ISP";
                    document.getElementById("im").style.display="block";
                    document.getElementById("details").style.display="block";
                    
                })              
                
    .then(exe=>{var map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);})
}
