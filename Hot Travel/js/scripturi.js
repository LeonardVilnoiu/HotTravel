//Sticky navbar
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', myFunction);

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        console.log("window.pageYOffset >= sticky");
      } else {
        console.log("Not window.pageYOffset >= sticky");
      }
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

})

//Meniu dropdown
function meniudrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

//Style modif
function markercuv(){  
  document.getElementById('mark').style.color='red';
}

//Harta
var map;
    function initMap(){
    var myLatlng = new google.maps.LatLng(44.43553352602871,26.099742847442634);
    var myOptions={
        zoom:19,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("map"), myOptions);

    

    var marker = new google.maps.Marker({
        draggable: true,
        position: myLatlng,
        map:map,
        title: "Your location"
    });
    google.maps.event.addListener(marker, 'click', function (event) {
    document.getElementById("xPoint").value = event.latLng.lat();
    document.getElementById("yPoint").value = event.latLng.lng();
    });
    }

//Login buton 
    function functieviz() {
      var x = document.getElementById('disp');
      if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
      } else {
        x.style.visibility = 'hidden';
      }
      location.replace("index.html");
    }

//Pagina de galerie
    var k = 0;

    var lista = ["unib.jpg","TNB.jpg","poli.jpg","cis.jpg"];

    var figc = ["Universitatea din Bucuresti","Teatrul National Bucuresti","Universitatea Politehnica din Bucuresti","Parcul Cismigiu"];

    function createf(figcaption){
      var fig = document.createElement("figcaption");
      fig.innerHTML = figcaption;
      return fig;
    }

    function createe(src){
      var img = document.createElement("img");
      img.src = src;
      return img;
    }

    function post(){
      var x = document.getElementsByClassName("gridz");
      var t = document.createElement("figure");
      if (k < lista.length){
        t.appendChild(createe(lista[k]));
        t.appendChild(createf(figc[k]));
        k++;
        x[0].append(t);
      }
    }

    // function rem(){
    //     var x = document.getElementsByClassName("gridz");
    //     if ( k > 0 ){
    //       x[k].removeChild(x[k]);
    //       k--;
    //     }
    // }

    
    
    
    