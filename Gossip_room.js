const firebaseConfig = {
    apiKey: "AIzaSyD_g10Hfk5azUpUOlzxyMqAawf9SZor_f0",
    authDomain: "gossip-guys-4802.firebaseapp.com",
    databaseURL: "https://gossip-guys-4802-default-rtdb.firebaseio.com",
    projectId: "gossip-guys-4802",
    storageBucket: "gossip-guys-4802.appspot.com",
    messagingSenderId: "232266736227",
    appId: "1:232266736227:web:af37504a52f725a8688e56"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Gossip_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Gossip_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "Gossip.html";
}