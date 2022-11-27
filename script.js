//------------constanter---------------------//
const username = document.getElementById('username');
const password = document.getElementById('password');
const welcome = document.getElementById("welcome");
const formTask = document.getElementById("formTask");
const signOutButton = document.getElementById("signOutButton");
const loggaInForm = document.getElementById("loggaIn"); 


const users = [ 
    {"username": "Janne", "password": "test"},
    {"username": "Kanye", "password": "west"},
    {"username": "Kevin", "password": "hart"},
    {"username": "Jay", "password": "z"},
    {"username": "Lebron", "password": "james"},    
];


//--------------------logga in--------------//

loggingIn = () => { 
  const loggingIn = document.getElementById('formBtn');
      console.log('vem');

  for (i = 0; i < users.length; i++) {
    if (username.value == users[i].username && password.value == users[i].password) {
      console.log(username.value + " inLoggad")
      loggaInForm.classList.add("form--hidden");
      formTask.classList.remove("form--hidden");
      signOutButton.classList.remove("form--hidden");
      formTask.innerHTML = "Welcome " + username.value;
      return true;
  }}
 

//------------ error message-----------------//
  invalid.classList.remove("form--hidden");
  console.log("Wrong username/password");
}


//-------------Håll kvar inloggad fetch från localstorage---------//
checkCredentials = () => {
  for (i = 0; i < users.length; i++) {
  let storedUsername = localStorage.getItem("username");
  let storedPassword = localStorage.getItem("password");
      const checkCredentials = document.querySelector("checking");
      if (storedUsername == users[i].username && storedPassword == users[i].password) {
      console.log("U still here, " + storedUsername);
      loggaInForm.classList.add("form--hidden");
      formTask.classList.remove("form--hidden");
      signOutButton.classList.remove("form--hidden");
      formTask.innerHTML = "Welcome, " + storedUsername;
      return true;
     
  }}}



//---------------------logga ut funktion-------------//
document.getElementById("signOutButton").addEventListener("click" , () => {
    localStorage.clear();
    console.log("Töm localStorage");
    })


//-------------------Sparar username/password i localstorage---------//
loggaInForm.addEventListener("submit", e =>   {
    e.preventDefault()

//------ username/password values------------------//
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

// store values in localStorage--------------------//
         localStorage.setItem("username", username);
         localStorage.setItem("password", password);
         console.log("UserName/password stored in localStorage");
        })




