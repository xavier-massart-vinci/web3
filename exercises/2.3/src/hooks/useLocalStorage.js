import { useState } from "react";



function useLocalStorage(key, initialValue){
    if(JSON.parse(localStorage.getItem(key)) == null){
        localStorage.setItem(key, initialValue);
    }
    const [variable, setVariable] = useState(JSON.parse(localStorage.getItem(key)));
  
    const setVariableAndSave = (newValue) => {
        localStorage.setItem(key, newValue);
        setVariable(newValue);    
    }


    return [variable, setVariableAndSave ];
}

export default useLocalStorage;