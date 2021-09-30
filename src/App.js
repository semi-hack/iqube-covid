import './App.css';

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const data = useSelector((state) => state);

  useEffect(() => {
    dispatch(getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  return (
    <div className="App">
      {!data.loading ? (
        !data.error ? (
          <>
            <div className="states">
              {data.data.states.map((state, index) => (
                <button
                  value={state.state}
                  key={state.state}
                  onClick={() => setSelected(index)}>
                  {state.state}
                </button>
              ))}
            </div>
            <div className="details">
              {selected !== null && (
                <>
                  <h1>{data.data.states[selected].state}</h1>
                  <h3>
                    Confirmed Cases:{" "}
                    <span className="cc">
                      {data.data.states[selected].confirmedCases}
                    </span>
                  </h3>
                  <h3>
                    Cases on Admission:{" "}
                    <span className="coa">
                      {data.data.states[selected].casesOnAdmission}
                    </span>
                  </h3>
                  <h3>
                    Discharged:{" "}
                    <span className="di">
                      {data.data.states[selected].discharged}
                    </span>
                  </h3>
                  <h3>
                    Death:{" "}
                    <span className="d">
                      {data.data.states[selected].death}
                    </span>
                  </h3>
                </>
              )}
            </div>
          </>
        ) : (
          <div>
            error: <span style={{ color: "red" }}>{data.error}</span>
          </div>
        )
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
}

export default App;
