import React, { useState, useEffect } from "react";
import Categoria from "./components/Category";
import "bootstrap/dist/css/bootstrap.min.css";

const Inicio = () => {
  const [gatitos, setGatitos] = useState([]);
  const [listaCategoria, setListaCategoria] = useState([]);

  useEffect(() => {
    const API = "https://api.thecatapi.com/v1/images/search";
    const APICATEGORIES = "https://api.thecatapi.com/v1/categories";

    const myFetch = async () => {
      const res = await peticion(API);
      const categorys = await peticion(APICATEGORIES);
      const categoriasDeAnimales = await categorys;

      setListaCategoria(await categorys);

      setGatitos(await res);
    };

    myFetch();
  }, []);

  const votar = () => {
    const APIVOTOS = "https://api.";
  };
  return (
    <div className="container m-4">
      <h1>Gatitos</h1>
      {gatitos.map((gato) => (
        <div className="">
          <img src={gato.url} alt="" width={400} height={400} />
          <button onClick={() => votar(gato.id)}>votar</button>
        </div>
      ))}

      <h1>Category</h1>
      {listaCategoria.map((cate) => (
        <div className="">
          <h2>{cate.name}</h2>
          <Categoria id={cate.id}/>
        </div>
      ))}
    </div>
  );
};

export default Inicio;

const token = " 5537a3f6-c726-4cc9-ab0a-12bae4e95705 ";

const peticion = async (API) => {
  const data = fetch(API, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": token,
    },
  });
  return (await data).json();
};

