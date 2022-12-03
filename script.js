//------------constanter---------------------//

//JAKOB: bra jobbat med dem globala variablerna som återanvänds i din kod!
const username = document.getElementById("username");
const password = document.getElementById("password");
const welcome = document.getElementById("welcome");
const formTask = document.getElementById("formTask");
const signOutButton = document.getElementById("signOutButton");
const loggaInForm = document.getElementById("loggaIn");

//JAKOB: snygg lösning med arrayen!
const users = [
  { username: "Janne", password: "test" },
  { username: "Kanye", password: "west" },
  { username: "Kevin", password: "hart" },
  { username: "Jay", password: "z" },
  { username: "Lebron", password: "james" },
];

//--------------------logga in--------------//

loggingIn = () => {
  const loggingIn = document.getElementById("formBtn");
  console.log("vem");
  //JAKOB: ta bort console.log()

  for (i = 0; i < users.length; i++) {
    if (
      username.value == users[i].username &&
      password.value == users[i].password
    ) {
      //JAKOB: ta bort "console.log()"
      console.log(username.value + " inLoggad");
      loggaInForm.classList.add("form--hidden");
      formTask.classList.remove("form--hidden");
      signOutButton.classList.remove("form--hidden");
      formTask.innerHTML = "Welcome " + username.value;
      return true;
    }
  }

  //------------ error message-----------------//

  //JAKOB: istället för att linka mellan css hade du kunnat skriva "show""hide" i JS.
  invalid.classList.remove("form--hidden");
  console.log("Wrong username/password");
};

//-------------Håll kvar inloggad fetch från localstorage---------//
checkCredentials = () => {
  // JAKOB: snyggt löst med sparande för localstorage med forloopen

  for (i = 0; i < users.length; i++) {
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    // JAKOB: byt namn på variablen (checkCredentials)
    const checkCredentials = document.querySelector("checking");
    if (
      storedUsername == users[i].username &&
      storedPassword == users[i].password
    ) {
      //JAKOB: ta bort console.log i efterhand. eller kalla på en innerhtml text istället som displayar "u still here?" eftersom man sällan
      //JAKOB:sitter och kollar console.loggen som användare. (jag kanske fattar fel att du inte vill skriva ut någon text)
      console.log("U still here, " + storedUsername);
      loggaInForm.classList.add("form--hidden");

      //JAKOB: (det läggs till ett "," när man uppdaterar sidan gentemot när man loggar in?)
      formTask.classList.remove("form--hidden");
      signOutButton.classList.remove("form--hidden");
      formTask.innerHTML = "Welcome, " + storedUsername;
      return true;
    }
  }
};

//---------------------logga ut funktion-------------//
document.getElementById("signOutButton").addEventListener("click", () => {
  //JAKOB: skulle använda mig av "localstorage.removeitem()" istället och bara rensa användaren som loggar ut. eftersom hade du haft något annat
  //JAKOB: loggat i localstorage hade det clearat hela localstorage.
  localStorage.clear();

  //JAKOB: remove console.log
  console.log("Töm localStorage");
});

//-------------------Sparar username/password i localstorage---------//
loggaInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //------ username/password values------------------//

  //JAKOB: snyggt!!! och sätta dem här variablerna här istället för att använda dem som globala variabler eftersom du bara använder dem här.
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // store values in localStorage--------------------//
  //JAKOB: snyggt!!!! med localstorage lösningen.
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  console.log("UserName/password stored in localStorage");
});
