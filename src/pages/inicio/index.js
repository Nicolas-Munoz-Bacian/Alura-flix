import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import styles from "../inicio/";
import { useState, useEffect } from "react";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);
  return(
    <>
            <Banner img="./img/eliminar" color="#154580"/>
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos de Alura Latam</h1>
            </Titulo>
            <Card id="1" titulo="Equipo Front End" capa="https://youtu.be/rpvrLaBQwgg?si=UmyErXE1Xc_WYR0D"/>
            
            <section className={styles.container}>
                {videos.map((video)=>{
                    
                    return <Card {...videos} key={video.id}/>
                })}
            </section>
    </>
  );
}

export default Inicio;
