import React from "react";
import"./App.css";

//COMPONENTES IMPORTADOS

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import UserCard from "./components/UserCard/UserCard";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";

const personaUno= { img:"https://cdn-icons-png.flaticon.com/512/4086/4086652.png", //aca pensaba poner la direccion de la imagen, pero despues te voy a preguntar mejor como hacerlo
                    alt:"Usuario uno",
                    nombre: "Agus",
                    descripcion: "Soy el usuario uno",
                   };

const personaDos= {  img:"https://cdn-icons-png.flaticon.com/512/2922/2922572.png",
                      alt:"Usuario dos",
                      nombre: "lucia",
                      descripcion: "Soy la usuario dos",
                    };

const personaTres= {  img:"https://cdn-icons-png.flaticon.com/512/2922/2922524.png",
                      alt:"Usuario tres",
                      nombre: "Roman",
                      descripcion: "Soy el usuario tres",
                    };


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      counter: 0,
    };
  }

  contadorUp = () => {
    this.setState({ counter: this.state.counter + 1})
  }

  contadorLow = () => {
    this.setState({ counter: this.state.counter - 1})
  }


render (){
  return (
    <div className="App">

      <Header/>

      <NavBar/>

      <ItemListConteiner/>
      
      <div className="UserSection">
        <UserCard img={personaUno.img} //mentira, al final si pude, era una "," mal puesta y unas imagenes importadas que por algun motivo no se mostraban. quizas derechos de autor o algo asi, pero cuando las llamaba no me las mostraba
                  alt={personaUno.alt}
                  name={personaUno.nombre}
                  description={personaUno.descripcion} />

        <UserCard img={personaDos.img}
                  alt={personaDos.alt}
                  name={personaDos.nombre}
                  description={personaDos.descripcion} />

        <UserCard img={personaTres.img}
                  alt={personaTres.alt}
                  name={personaTres.nombre}
                  description={personaTres.descripcion} />
      </div>

      <div className="counterSection">
        <p> Contador {this.state.counter} </p>
        
        <div className="btnSection">
          <button className="boton" onClick={this.contadorUp}> Incrementar </button>

          <button className="boton" onClick={this.contadorLow}> Decrementar </button>
        </div>
      </div>

      

    </div>
  );
}
}

export default App;