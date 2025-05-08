import React from "react";
import styles from "../styles/CountryModal.module.css";
import Image from "next/image";

export default function CountyModel({ country, onClose }) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2>{country.translations.por.common}</h2>
                <Image 
                src={country.flags.png} 
                alt={`Bandeira de ${country.translations.por.common}`} 
                width={300}
                height={200}
                className={styles.flag}
                />
                <p>    
                <Image className={styles.icon}
                src='/images/globo.png'
                alt='Icone' 
                width={15} 
                height={15}
                />   
                Nome Oficial: {country.translations.por.official}</p>
                <p>Capital: {country.capital || "Não tem"}</p>
                <p>Continente: {country.region}</p>
                <p>Sub-região: {country.subregion || "Não tem"}</p>
                <p>População: {country.population.toLocaleString()}</p>
                <p>Fuso Horário: {country.timezones[0]}</p>
            </div>
        </div>
    );
}
