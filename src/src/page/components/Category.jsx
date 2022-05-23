import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

const Categoria = (props) => {

  const { id } = props;
  const [state, setState] = useState();
  console.log(id)
  const APICATEGORIES = `https://api.thecatapi.com/images/search?category_ids=${id}`;

  useEffect(() => {
    const myFetch = async () => {
      const lista = await peticion(APICATEGORIES);
      console.log(await lista);
      setState(await lista);
    };
    myFetch();
  },[]);

  return (
    <div className="">
      {/* {state.map((gato) => (
        <div className="">
          <img src={gato.url} alt="" width={400} height={400} />
        </div>
      ))} */}
    </div>
  );
};

export default Categoria;