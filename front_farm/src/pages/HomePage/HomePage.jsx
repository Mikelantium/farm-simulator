import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthDispatch, logout, useAuthState } from "../../Context";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  let navigate = useNavigate();
  const dispatch = useAuthDispatch(); // lee el método dispatch del contexto
  const userDetails = useAuthState(); //lee los detalles del usuario del contexto

  const handleLogout = () => {
    logout(dispatch); //llama a la acción logout
    navigate("/"); //navega de nuevo al login sin usuario
  };

  const getParcel = async () => {
    const resultado = await axios(
      "http://localhost:5000/user/userAllParcels/64ef5ad09f1468886016542c"
    );

    console.log(resultado);
  };

  useEffect(() => {
    getParcel();
  }, []);


  return <div>
  <div>
    <h1>Dashboard</h1>
    <button onClick={handleLogout}>
      Logout
    </button>
  </div>
  <p>Welcome</p>
</div>;
};

export default HomePage;
