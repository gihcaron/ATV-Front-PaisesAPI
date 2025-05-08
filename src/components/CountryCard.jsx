import React from "react";
import styles from "../styles/CountryCard.module.css";
import Image from "next/image";

export default function CountryCard({ country, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(country)}>
      <Image 
      src={country.flags.png}
      alt={`Bandeira de ${country.translations.por.common}`}
      width={300}
      height={200}
      className={styles.flag}
      />
      <h3 className={styles.name}>{country.translations.por.common}</h3>
    </div>
  );
}
