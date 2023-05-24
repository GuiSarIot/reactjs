import React from "react";

function TodoClick (){
    const [state, setState] = React.useState(0);
    return (
        <React.Fragment>
            <p>Diste click 0 veces</p>
            <button onClick={() => setState(state + 1)}>
            {state}
        </button>
        </React.Fragment>
    )
}