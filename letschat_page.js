const firebaseConfig = {
    apiKey: "AIzaSyD5fc53eo6gEXJ2pqmxk3EBtja-0WCjsP8",
    authDomain: "project-687de.firebaseapp.com",
    databaseURL: "https://project-687de-default-rtdb.firebaseio.com",
    projectId: "project-687de",
    storageBucket: "project-687de.appspot.com",
    messagingSenderId: "304263375919",
    appId: "1:304263375919:web:6cb4b76deed0b4e2222ada",
    measurementId: "G-60J28LHKHG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
  getData();
  function send(){
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
  }  