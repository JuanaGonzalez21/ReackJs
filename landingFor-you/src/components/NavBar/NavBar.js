import icon from "./icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import React from "react";
import image from "./icon.png";
import image3 from "./restaurante3.jpg";
import icono1 from "./menu.png";
import icono2 from "./lapiz.png";
import icono3 from "./ubicacion.png";
import icono4 from "./usuario.png";
import añadir from "./anadir-al-carrito.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-light  navprincipal d-flex justify-content-between">
        <div className="container-fluid  ">
          <CartWidget />
          <ul className="nav">
            <li className="nav-item d-flex justify-content-start">
            <img src={icono1} className= "iconoMenu"></img>
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Menú
              </a>
            </li>
            <li className="nav-item d-flex justify-content-start">
            <img src={icono2} className= "iconoMenu"></img>
              <a className="nav-link" href="views/histoty.html">
                Mis Pedidos
              </a>
            </li>
            <li className="nav-item d-flex justify-content-start">
            <img src={icono3} className= "iconoMenu"></img>
              <a className="nav-link" href="views/menu.html">
                Locales
              </a>
            </li>
            <li className="nav-item d-flex justify-content-start">
            <img src={icono4} className= "iconoMenu"></img>
              <a className="nav-link" href="views/taste.html">
                Mi cuenta
              </a>
            </li>
            
          </ul>
          <img src={añadir} className= "iconoMenu carrito"></img>
        </div>
      </nav>

    {/* Fondo con navegación */}

    <div class="cover-container"  >
            <div class="mx-auto tamañoEspacio">
                <div class="contenedor contenedor-img">
                <img src={image3} class="img-fluid imagen_tamaño" alt="..."></img>
             <div class="centrado">   
                <p className="title"> Is For You </p>
                <p className="text"> Juana Gonzalez</p>
             </div>
                </div>
            </div>
        </div>
    
    </header>

    
  );
};

export default NavBar;
