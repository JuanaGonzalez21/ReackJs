
import './App.css';
import React from 'react';

//COMPONENTS 
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


class App extends React.Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <h2 className='titulodos'>Selecciona tu postre</h2>
          <section className='UserSection'>
          <ItemListContainer 
            name='Postre de Nata'
            description='Es un postre hecho hirviendo leche varias veces y quitando las natas o crema que se forma cada vez que hierve'
            img='https://cdn5.recetasdeescandalo.com/wp-content/uploads/2018/10/Panacota-o-panna-cotta-receta-del-clasico-postre-italiano-de-nata.jpg' 
            desImg='Postre de Natas' 
          />

          <ItemListContainer 
            name='Flan de queso'
            description='Flan de Queso Crema y Cubierta de Caramelo Este suave flan está elaborado con queso crema, cubierto con una capa de caramelo.'
            img='https://www.goya.com/media/3646/flan-de-queso-caramel-topped-cream-cheese-custard.jpg?quality=80' 
            desImg='Flan de queso' 
          />

          <ItemListContainer 
            name='Lemon Pie'
            description='La tarta de limón es una tarta formada por una base de masa quebrada u hojaldre que se rellena con crema de limón.'
            img='https://www.pequerecetas.com/wp-content/uploads/2021/07/lemon-pie-receta-tarta-de-limon-y-merengue.jpg' 
            desImg='Lemon Pie' 
          />
          </section>
          <section className='UserSection'>
            <ItemListContainer 
            name='Costrada de Alcalá'
            description='La costrada de Alcalá es un postre tradicional de Alcalá de Henares. Se compone de varias capas de hojaldre, crema pastelera, merengue y almendra.'
            img='https://i.ytimg.com/vi/u_CeUJJChuA/sddefault.jpg' 
            desImg='COSTRADA DE ALCALÁ' 
          />

          <ItemListContainer 
            name='Crepes de dulce'
            description='Las crepas o crepes son una receta de origen francés que se elaboran a partir una masa semi-líquida hecha con harina de trigo y demás ingredientes.'
            img='https://www.titicupon.com/sites/default/files/imagecache/coupon-slider-responsive/koffi_ajust_1_10.jpg' 
            desImg='Crepes de dulce' 
          />

          <ItemListContainer 
            name='Pan de Cádiz'
            description='La tarta de limón es una tarta formada por una base de masa quebrada u hojaldre que se rellena con crema de limón.'
            img='https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/e38a661d-5dbf-4777-b397-e4f65c44aa7e/Derivates/8f5426e7-602d-4064-b344-4f05827118da.jpg' 
            desImg='Pan de cadiz' 
          />
          </section>

        </main>
      </div>
      

    );
  }

}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p class="title"> Is For You </p>
        <p class="text"> Juana Gonzalez</p>
      </header>
    </div>
  );
}*/

export default App;
