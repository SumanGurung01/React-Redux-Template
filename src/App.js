import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    return (
        <div>
            <p>App Component</p>

            <p>Count : {count}</p>

            <button onClick={() => dispatch({ type: "INC" })}>
                Increment Count
            </button>

            <button onClick={() => dispatch({ type: "DEC" })}>
                Decrement Count
            </button>
        </div>
    );
}

export default App;
