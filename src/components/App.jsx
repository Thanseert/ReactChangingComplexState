import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState({
    fname: "",
    lname: ""
  });

  function update(event) {
    const newvalue = event.target.value;
    const inputvalue = event.target.name;

    setFullname((prevValue) => {
      if (inputvalue === "fname") {
        return {
          fname: newvalue,
          lname: prevValue.lname
        };
      } else if (inputvalue === "lname") {
        return {
          fname: prevValue.fname,
          lname: newvalue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={update}
          placeholder="First Name"
          value={fullname.fname}
        />
        <input
          name="lName"
          onChange={update}
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
