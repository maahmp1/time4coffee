import { useState } from "react";
import Logo from "../../assets/Logo1.png";
import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import Filtro from "./Filtros";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  return (
    <>

      
      <main>
        <nav className={styles.nav}>
          <img src={Logo} alt="time 4 coffee logo" />
        </nav>
        <header className={styles.header}>
     
          <div className={styles.slogan}>   
            <b>Where time stands still and the coffee is always fresh.</b>
          </div>
        </header>
        <section className={styles.cardapio}>
          <h3 className={styles.cardapio__titulo}>
            Menu
            <Buscador busca={busca} setBusca={setBusca} />
          </h3>
          <div className={styles.cardapio__filtros}>
            <Filtro/> 
            {/* tem erro pq falta adicionar mais coisas mas a gente não viu isso ainda na aula*/}
          </div> 
        </section>
        {/* fiz outro projeto do 0 pois tava acontecendo o mesmo erro*/}
      </main>
    </>
  );
}
