import React, { useState } from 'react' // importera react och useState hook


export function LoginFormF() { // skapa funktionen
    const [email, setEmail] = useState(""); // använda useState hook för att ändra email i app state
    const [password, setPassword] = useState(""); // använda useState hook för att ändra password i app state


    function hanldeEmail(e) { // skapa funktion som tar en html event objekt och lägga till events value i app state

        setEmail(e.target.value);// kalla setEmail funktion
    };

    function hanldePassword(e) { // skapa funktion som tar en html event objekt och lägga till password value i app state

        setPassword(e.target.value); // kalla setPassword funktion
    };



    return <div> {// returnera html och react copmonent 

    }
        <h2>Function Example</h2> {// för att rendera title i appen
        }

        <input value={email} onChange={hanldeEmail} placeholder="email" /> {// skapa input för att ta Email value från användaren och kalla hanldeEmail när användaren skriv någonting. 
        }
        <input value={password} onChange={hanldePassword} placeholder="password" />{// skapa input för att ta Email value från användaren och kalla hanldePassword när användaren skriv någonting. 
        }
    </div>

}