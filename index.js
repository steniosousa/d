function scrollToIdOnClick(event){
    event.preventDefault();
    var element = event.target;
    var id = element.getAttribute('href');
    var to = document.querySelector(id).offsetTop;
    window.scroll({
    top: to,
    behavior:"smooth"
    });
    }
    var menuItens = document.querySelectorAll(' p');
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn"); 
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2"); 
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
    modal2.style.display = "block";
  }
  span2.onclick = function() {
    modal2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal.style.display = "none";
    }
  }
  const MusicaPopular = document.querySelector(".MPB");
  const MusicaGospel = document.querySelector(".gospel");
  const MusicaAleat = document.querySelector(".aleat");
  function MPB(){
    MusicaPopular.style.display="inline";
    MusicaGospel.style.display="none";
    MusicaAleat.style.display="none";
  }
  function Gospel(){
    MusicaPopular.style.display="none";
    MusicaGospel.style.display="inline";
    MusicaAleat.style.display="none";
  }
function Aleat(){
  MusicaPopular.style.display="none";
    MusicaGospel.style.display="none";
    MusicaAleat.style.display="inline";

}





