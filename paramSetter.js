var cssId = 'myCss';
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = cssId;
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://rawgit.com/ydesanti/tools/master/stylesheet.css';
link.media = 'all';
head.appendChild(link);

var divModal = document.createElement("div");
var fragment = document.createDocumentFragment();
divModal.innerHTML = '<div id="myModal" class="modal"><div class="modal-content"><span onclick="window.location.reload();" class="close">&times;</span><p>Select the desired parameters to add</p>'+
                  '<form id="getSelector" action="/action_page.php"><span>FEA</span><input type="checkbox" value="fea" id="fea"><label for="fea"></label><br><input type="checkbox" value="pla">PLA<br><input type="checkbox" value="stopmobi">StopMobi<br>'+
                  '<input type="checkbox" value="promocode">PromoCode <input type="text" id="pcd" size="50"><br><br><input type="button" onclick="urlUpdate()" value="Send order">'+
                  '</form></div></div>';
fragment.appendChild(divModal);

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var spanClose = document.querySelector("#closebutton");

// When the user clicks on <span> (x), close the modal
function spanClose()
{
    window.location.reload();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        window.location.reload();
    }
}

function urlUpdate() {
  var url = document.URL; 
  var checks = document.querySelector("#getSelector");
    
  if(checks[0].checked){
    url += separador(url) + 'featest=1';
  } 
    
  if (checks[1].checked){
    url += separador(url) + 'PLA1=0';
  }
    
  if (checks[2].checked){
    url += separador(url) + 'stop_mobi=yes';
  }
    
  if (checks[3].checked){
    url += separador(url) + 'pcd=' +checks[4].value;
  }
    
  var isMobile = url.indexOf("m.");
  if ( isMobile > 0 ) {
    url = url.replace("m.","www.");
  }
    
  window.location.href = url;
  console.log(url);
}

function separador(url) {
  var n = url.indexOf("?");
  var separador = n>0 ? "&" : "?";
    return separador;
}
