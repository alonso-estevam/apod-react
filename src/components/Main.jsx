import React, { useState } from "react";

const Main = () => {
  const [info, setInfo] = useState();

  const [valorInput, setValorInput] = useState("");

  function handleChange(e) {
    setValorInput(e.target.value);
    console.log(valorInput);
  }

  async function handleRequisicao() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=zn3IsgyhbVyTpMQrm5CJ7Gb4vWdzdpHcPqw1fc3U&date=${valorInput}
      `
    );
    const json = await response.json();
    console.log(json);
    setInfo(json);
  }

  return (
    <div>
      <form>
        <label htmlFor="date">Digite uma data</label>
        <input
          type="date"
          id="date"
          value={valorInput}
          onChange={handleChange}
        />
      </form>
      <img src={info ? info.url : ""} alt="" />
      <br></br>
      <p></p>
      <button onClick={handleRequisicao}>Enviar</button>
    </div>
  );
};

export default Main;
