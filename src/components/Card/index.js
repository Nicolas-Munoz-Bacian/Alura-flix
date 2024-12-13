import React, { useState } from 'react';
import { useFavoritosContext } from "../../pages/Context/Favoritos";
import styles from "../../components/Card/Card.module.css";
import iconFavorito from "../../components/Card/iconFavorito.png";
import iconNoFavorito from "../../components/Card/iconNoFavorito.png";
import EditModal from "../../pages/ModalEditarCard/modal"

function Card({ id, capa, titulo, descripcion, video }) {
    const { favorito, agregarFavorito } = useFavoritosContext();
    const [showModal, setShowModal] = useState(false);

    const isFavorito = favorito.some(fav => fav.id === id);
    const icon = isFavorito ? iconFavorito : iconNoFavorito;

    const handleEdit = () => {
        setShowModal(true);
    };
    
    const handleDelete = () => {
        // Lógica para eliminar la tarjeta, puedes integrar aquí tu lógica de contexto o backend
    };

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
            <button onClick={handleEdit} className={styles.button}>
                Editar
            </button>
            <button onClick={handleDelete} className={styles.button}>
                Eliminar
            </button>
            {showModal && (
                <EditModal
                    initialData={{ id, titulo, descripcion, capa, video }}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default Card;