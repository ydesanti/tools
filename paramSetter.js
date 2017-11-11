var cssId = 'myCss';
var head  = document.getElementsByTagName('head')[0];
var link  = document.createElement('link');
link.id   = cssId;
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'https://raw.githubusercontent.com/ydesanti/tools/master/stylesheet.css';
link.media = 'all';
head.appendChild(link);

var divModal = document.createElement("div");
divModal.innerHTML = '<div id="myModal" class="modal"><div class="modal-content"><span class="close">&times;</span><p>Select the desired parameters to add</p>'+
                  '<form action="/action_page.php"><input type="checkbox" value="fea">FEA<br><input type="checkbox" value="pla">PLA<br><input type="checkbox" value="stopmobi">StopMobi<br>'+
                  '<input type="checkbox" value="promocode">PromoCode <input type="text" id="pcd" size="50"><br><br><input type="button" onclick="urlUpdate()" value="Send order">'+
                  '</form></div></div>';

// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
//btn.onclick = function() {
//    modal.style.display = "block";
//}
// When the user clicks on <span> (x), close the modal
/*span.onclick = function() {
    modal.style.display = "none";
}*/
// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
function urlUpdate() {
	var url = document.URL;	
    var checks = document.forms[0];
    
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
    
	window.location = url; alert(url);
}

function separador(url) {
	var n = url.indexOf("?");
    var separador = n>0 ? "&" : "?";
    return separador;
}