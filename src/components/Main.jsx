import React from "react";

const Main = () => {
  async function handleRequisicao() {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=IO6PTTTNOu29nSXzv8Toq8FqqRNCJvcOv3ybUVLm`
    );
    const json = await response.json();
    console.log(json);
  }

  return (
    <div>
      <img src="" alt="" />
    </div>
  );
};

export default Main;
