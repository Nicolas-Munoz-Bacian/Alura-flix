import React from 'react';
import { useFavoritosContext } from "../../../src/pages/Context/Favoritos";
import styles from "./Card.module.css";
import iconFavorito from "../../components/Card/editar.png";
import iconNoFavorito from "../../components/Card/sin-editar.png";

function Card({ id, capa, titulo }) {
    const { favoritos, agregarFavorito } = useFavoritosContext();
    const isFavorito = favoritos.some(fav => fav.id === id);
    const icon = isFavorito ? iconFavorito : iconNoFavorito;

    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img 
                src={icon} 
                alt="Icono favorito"
                className={styles.favorito}
                onClick={() => agregarFavorito({ id, titulo, capa })}
            />
        </div>
    );
}

export default Card;