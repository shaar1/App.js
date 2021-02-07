import React from "react"; // importera react

import { LoginFormF } from "./LoginFormF"; // importara LoginForm från filen



function App() {  // skapa app funktion
  return (   // returnera value från funktionen
    <div> { //  ska ligga en html div i sidan
    }

      <LoginFormF />  {// rendera react funktion component loginFormF i sidan.

      }

    </div> // en html div för att stänga 

  );
}

export default App;  // exportera app componant
