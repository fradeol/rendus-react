import { createContext, useState } from "react";

export const monContexte = createContext();


export default function LangueContexte (props) {
    
    const languesDispo = ["FR", "EN", "ES"];
    let navigateur = navigator.language.substring(0,2).toUpperCase();
    // const [langue, setLangue] = useState("EN");
    if (languesDispo.indexOf(navigateur) === -1) {
        navigateur = "EN";
    } 
        
    const [langue, setLangue] = useState(navigateur);
   
    const modifyLanguage = (newLanguage) => {
        
        setLangue(newLanguage);
    }

    return (
        <div>
            <monContexte.Provider value={{langue, modifyLanguage}}>
                {props.children}
            </monContexte.Provider>
        </div>
    );
}
   

