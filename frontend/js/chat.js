function login(){

let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;

if(user=="admin" && pass=="1234"){

window.location.href =
"dashboard.html";

}
else{

document.getElementById("msg").innerHTML =
"Invalid Login";

}

}

function sendMessage(){

let msg =
document.getElementById("message").value;

let chatBox =
document.getElementById("chatBox");

chatBox.innerHTML +=
"<p>"+msg+"</p>";

document.getElementById("message").value="";

}