
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "700"], 
});

export const metadata = {
    title: "API de Países",
    icons: {
        icon: "/icons/favicon.ico",
    },
    description: "Projeto pra mostrar tudo que eu sei",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={poppins.variable}>{children}</body>
        </html>
    );
}
