import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
    const [opinions, setOpinions] = useState([]);

    const addOpinion = (opinion) => {
        const newOpinion = {
            id: uuidv4(),
            opinion: opinion,
            votes: 0
        }

        setOpinions([...opinions, newOpinion]);
    }

    const voteForOpinion = (id) => {
        const opinion = opinions.find(opinion => opinion.id === id);
        opinion.votes++;
        setOpinions([...opinions]);
    }

    const mapSorted = () =>{
        return opinions.sort((a, b) => b.votes - a.votes);
    }


    const exposeVar = {
        opinions: mapSorted(),
        addOpinion,
        voteForOpinion
    }

    return<Context.Provider value={exposeVar}>
    { props.children }
</Context.Provider>    

}

export {
    Context,
    ProviderWrapper
}