import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import Card from "../../components/Card";
import styles from "../../pages/inicio/index.modules.css"
import videos from "../../components/data/db.json"

function inicio(){
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

    )
}

export default inicio;
