 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCFUZj6B00iwkNHRmBrdEg-XxNQCngDVeo",
  authDomain: "richibd-1d8cc.firebaseapp.com",
  projectId: "richibd-1d8cc",
  storageBucket: "richibd-1d8cc.appspot.com",
  messagingSenderId: "375001088175",
  appId: "1:375001088175:web:02485e9d1150e4edc1145a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  Observador();

  function Registrar(){
    console.log("Probando, provando la funcionalidad");
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Pasword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        // ...
        Verificar();
        console.log("usario registrado");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
    });
  }
/*La funcion Verificar es para madar un link pra verificar el registro del correo electronico */
  function Verificar(){
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // Email sent.
      console.log("Email enviado...");
    }).catch(function(error) {
      // An error happened.
      console.log(error);
      console.log("Error al mandar el Email ...");
    });
  }
/* Cuando un usuario acceda correctamente, podre obtener información acerca de él en el observador */

function Observador(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var email = user.email;
      console.log("Inicio Sesion el IdUsuario: ",uid,",Email: ",email);
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Usuario Sin Iniciar Sesion");
    }
  });
}

/* Iniciar Sesion */
function Ingresar(){
    console.log(" Verificando la funcionalidad de Ingresar");
    var email = document.getElementById('Email2').value;
    var password = document.getElementById('Pasword2').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    // ...
    console.log("A Iniciado Sesion Satisfactoriamente");
    Mostrar();//Es la funcion para que aparesca el boton de cerrar Sesion 
    
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}

/*Cerrar Sesion */
function CerrarS(){

  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.reload();
    console.log("Sesion Cerrada");
  }).catch((error) => {
    // An error happened.
    console.log(error);
    console.log("Error al cerrar Sesion");
  });
}

/*funcion para mostrar el boton de cerrar sesion*/
function Mostrar(){
  var Mostrar = document.getElementById("Mostrar");
  Mostrar.innerHTML =`
  </br>
    <button class="btn btn-danger mx-sm-4 " onclick="CerrarS()">Cerrar Sesion</button>
    &nbsp; &nbsp; &nbsp;<a class="Boton" tyle="color:red;" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/?" target="_blank">FORMULARIO</a>
       
  `
  /*<button class="btn btn-info mx-sm-4 " onclick="location.href='https://www.facebook.com'">Ingresar</button>  */
}


