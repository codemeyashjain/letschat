var name_there= localStorage.getItem("yourname").value;
document.getElementById("myname").innerHTML = name_there;

function LOGOUTst(){
    
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
        
}

function addingroom(){
        document.getElementById("button24927").innerHTML=roomname1;
}

function newchat(){
        //new windows for chat
}

