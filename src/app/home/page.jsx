"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import styles from "./Home.module.css";
import { Skeleton } from "antd";


export default function Home() {
    
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>

        {isLoading ? (
        <Skeleton
            active
            paragraph={{ rows: 3 }} 
            title={{ width: 200 }}
            />
        ) : (
            <>
            <Image 
            src="/images/maiko.png"
            alt="Maiko Xikixiki"
            className={styles.image}
            width={300}
            height={300}
            />
            <h1 className={styles.title}> Maiko Xikixiki Bahia</h1>
            <div className={styles.description}>
                <p>Tá perdido no código? Relaxa e vem de Maiko, que vamos te mostrar a usar:</p>
                <ul className={styles.list}>
                    <li>Next.js (App Router)</li>
                    <li>CSS Modules</li>
                    <li>React Components</li>
                    <li>React Hooks</li>
                    <li>PreLoad</li>
                    <li>PreFetch</li>
                    <li>Fetch Axios</li>
                    <li>LocalStorage</li>
                    <li>React Toastify</li>
                    <li>AntD</li>
                    <li>Skeleton</li>
                </ul>
            </div>
            <Link href="/countries" prefetch={true}>
                <button className={styles.button}>Acessar Países</button>
            </Link>
            </>
        )}
        </div>
    );
}
