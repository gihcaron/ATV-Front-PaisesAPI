"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Image from "next/image"
import { toast, ToastContainer } from "react-toastify";;
import CountryCard from "../../components/CountryCard";
import CountryModal from "../../components/CountryModal";
import styles from "./Countries.module.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css"; 
import { Pagination } from 'antd';
import { Skeleton } from "antd";

const regions = ["africa", "americas", "antarctic", "asia", "europe", "oceania"];

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchComCache = async () => {
      const cacheKey = 'countryData';
      const cache = sessionStorage.getItem(cacheKey);

      if (cache) {
        setCountries(JSON.parse(cache));
        setIsLoading(false);
        return;
      }

      try {
        const resposta = await axios.get("https://restcountries.com/v3.1/all",);
        setCountries(resposta.data);
        sessionStorage.setItem(cacheKey, JSON.stringify(resposta.data));
      } catch (erro) {
        alert('Erro ao buscar os dados: ' + erro.message);
      }
    };

    fetchComCache();
  }, []);


  const fetchCountries = async (region = "") => {
    setIsLoading(true);
    try {
      const url = region
        ? `https://restcountries.com/v3.1/region/${region}`
        : "https://restcountries.com/v3.1/all";
      const response = await axios.get(url);
      setCountries(response.data);
      if (!region) {
        setAllCountries(response.data);
      }
    } catch (error) {
      console.error("Erro ao carregar países:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const paginatedCountries =countries.slice (
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
);
  const resetFilter = () => fetchCountries();

  return (
    <div className={styles.container}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <h1>
      <Image className={styles.icon}
      src='/images/globo.png'
      alt='Icone' 
      width={25} 
      height={25}
      /> 
      Lista de Países do Mundo</h1>
      <div>
        {regions.map((region) => (
          <button
            key={region}
            className={styles.button}
            onClick={() => fetchCountries(region)}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </button>
        ))}
        <button className={styles.buttonReset} onClick={resetFilter}>
          Mostrar Todos
        </button>
      </div>


      <div className={styles.cardContainer}>
        {isLoading ? (
          <Skeleton
            className={styles.skeleton}
            active
            paragraph={{ rows: 3 }} 
            title={{ width: 200 }}
          />
        ) : (

          paginatedCountries.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              onClick={ () => {
                setSelectedCountry(country);
                toast.success(`Você clicou em ${country.translations.por.common}`, 
)
              }}
              
            />
          ))
        )}
      </div>

      <Pagination  simple 
      className={styles.pagination}
      currentPage={currentPage}
      onChange={(page) => setCurrentPage(page)}
      total={countries.length}
      
       />

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}


    </div>
  );
}
