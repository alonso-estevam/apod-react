import React, { useState } from "react";

const Main = () => {
  
  const[image, setImage] = useState()
  async function handleRequisicao() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=IO6PTTTNOu29nSXzv8Toq8FqqRNCJvcOv3ybUVLm`
    );
    const json = await response.json();
    console.log(json);
  }



  return (
    <div>
      <form action="">
        <label htmlFor="">Digite uma data</label>
        <input type="number" name="" id="" />
        <button>Buscar</button>
      </form>
      
    </div>
  );
};

export default Main;
