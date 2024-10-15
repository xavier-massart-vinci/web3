import React, { useState } from "react";


const Context = React.createContext(null);

const ProviderWrapper = (props) => {
    const [voteGood, setVoteGood] = useState(0);
    const [voteOk, setVoteOk] = useState(0);
    const [voteBad, setVoteBad] = useState(0);

    const incGood = () => setVoteGood(voteGood + 1);
    const incOk = () => setVoteOk(voteOk + 1);
    const incBad = () => setVoteBad(voteBad + 1);

    const resetAll = () =>{
        setVoteGood(0);
        setVoteOk(0);
        setVoteBad(0);
    }

    const exposeVar = {
        voteGood,
        incGood,
        voteOk,
        incOk,
        voteBad,
        incBad,
        resetAll
    }

    return<Context.Provider value={exposeVar}>
    { props.children }
</Context.Provider>    

}

export {
    Context,
    ProviderWrapper
}