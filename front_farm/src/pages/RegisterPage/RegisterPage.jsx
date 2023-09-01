import axios from "axios";
import {  useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Register() {

    const [fname, setFName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:5000/user/register", {
          name: fname,
          email: email,
          password: password,
          });
          alert("Bien hecho");
          navigate("/");

        } catch (err) {
          alert(err);
        }
      }

    return (
     <div>
        <div class="container mt-4" >
    <div class="card">
            <h1>Registro de usuario</h1>
    
    <form>
        <div class="form-group">
          <label>Nombre de usuario</label>
          <input type="text"  class="form-control" id="name" placeholder="Nombre"
          
          value={fname}
          onChange={(event) => {
            setFName(event.target.value);
          }}
          />

          
        </div>

    
    
        <div class="form-group">
          <label>Dirección de email</label>
          <input type="email"  class="form-control" id="email" placeholder="Correo"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
          
          
          
        </div>

        <div class="form-group">
            <label>Contraseña</label>
            <input type="password"  class="form-control" id="password" placeholder="Contraseña"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>


    
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>




    </div>



     </div>
    );
  }
  
  export default  Register;