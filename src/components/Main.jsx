import React, { useState, useEffect } from "react";

const Main = () => {
  
  const[info, setInfo] = useState()
  async function handleRequisicao() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=zn3IsgyhbVyTpMQrm5CJ7Gb4vWdzdpHcPqw1fc3U&date=`
    );
    const json = await response.json();
    console.log(json);
    setInfo(json);
  }



  return (
    <div>
      <form action="">
        <label htmlFor="">Digite uma data</label>
        <input type="number" name="" id="" />
        <button onClick={handleRequisicao}>Buscar</button>
      </form>
      <img src={info ? info.url : ""} alt="" />
      
    </div>
  );
};

export default Main;
