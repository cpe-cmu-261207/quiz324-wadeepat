import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [item, setitems] = useState([]);
  const [inputData, setInputData] = useState({ name: "", gender: "", age: 0 });
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    if (items != null) {
      setitems(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    //add item to localStorage when item change
    localStorage.setItem("items", JSON.stringify(item));
  }, [item]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
            onChange={(e) => {
              setInputData({ ...inputData, name: e.currentTarget.value });
            }}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            id="gender-box"
            className="input"
            type="text"
            placeholder="Please select .."
            onChange={(e) => {
              setInputData({ ...inputData, gender: e.currentTarget.value });
            }}
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            id="age-box"
            className="input"
            type="number"
            placeholder="e.q 5"
            onChange={(e) => {
              setInputData({ ...inputData, age: e.currentTarget.value });
            }}
          ></input>
        </div>

        <button
          onClick={() => {
            const newitem = [...item, inputData];
            setitems(newitem);
            // recalculate GPA
            document.querySelector("#name").value = "";
            document.querySelector("#age-box").value = "";
            document.querySelector("#gender-box").value = "";
          }}
          className="button is-danger is-fullwidth"
        >
          Submit
        </button>
        {/* <button //clear data
          onClick={() => {
            localStorage.clear();
          }}
        >
          clear
        </button> */}
        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}
        {/* <ItemTable name={"Coco"} gender={"Male"} age={"5"} /> */}
        {item.map((i) => {
          return <ItemTable name={i.name} gender={i.gender} age={i.age} />;
        })}
        <p>Wadeepas Lertwatanawanich 620610806</p>
      </div>
    </div>
  );
}

export default App;
