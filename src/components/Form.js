import React from "react";

export default function Form() {
  const [name, setName] = React.useState("");
  const changeHandler = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <form>
      <label>Name</label>
      <input type="text" onChange={changeHandler} value={name} />
    </form>
  );
}
