# ATV-Front-PaisesAPI 🌆

Este projeto é uma aplicação front-end desenvolvida com **Next.js**. Abaixo estão os principais elementos e funcionalidades implementados no projeto.

---

## Tecnologias e Funcionalidades Utilizadas 👩🏻‍💻

### **Next.js (App Router) ⌨️ **
- Foi utulizado a versão mais recente do **Next.js** com o **App Router** para organizar as rotas da aplicação de forma eficiente e melhorar a performance geral.

### **CSS Modules 🖌️**
- Estilos são gerenciados com **CSS Modules**, garantindo escopo local e evitando conflitos de estilo global.

### **React Components 🧩 **
- A aplicação é componentizada, permitindo a reutilização de código e otimizando as renderizações. Exemplos de componentes:
  - `CountryCard`: Exibe informações de um país.
    
    ![image](https://github.com/user-attachments/assets/59637b41-2fb9-4ce7-847d-afed7cd9b4df)

  - `CountryModal`: Modal para detalhes de um país.
    
    ![image](https://github.com/user-attachments/assets/946871dc-594f-443f-9c68-cdbebd328af2)


### **React Hooks 🤩**
- Foi utilizado  **React Hooks** como `useState` e `useEffect`:
  - `useState`: Gerencia estados como `countries`, `isLoading`, `selectedCountry`, entre outros.
  - `useEffect`: Realiza fetch de dados e manipulação de cache.

### **Image/Next 🖼️**
- Imagens são otimizadas com o componente `next/image`, que oferece Lazy loading e Carregamento automático.

### **PreLoad 💻**
- Fontes e ícones são carregados antecipadamente para melhorar a renderização inicial da página.
  ![image](https://github.com/user-attachments/assets/0f23a1bd-555a-4013-a3bb-87c8f95e1bc6)


### **Link/Next com PreFetch 🔨**
- Navegação entre páginas utiliza o componente `next/link`, que realiza pré-carregamento de dados.

### **Axios para Fetch de GET (API Externa) ✨**
- Requisições GET são feitas utilizando **Axios** para consumir a API de países:
  - API: `https://restcountries.com/v3.1/all`

### **Ant Design (AntD) ⚒️**
- Componentes de implementados com **Ant Design**, garantindo uma interface limpa e funcional.
  ![image](https://github.com/user-attachments/assets/b237d3c2-7008-46ab-9cc7-6ea24006379b)


### **Skeleton 🩻**
- Enquanto os dados estão sendo carregados, é exibido um **Skeleton** para melhorar a experiência do usuário durante o tempo de espera.
  
![image](https://github.com/user-attachments/assets/5a50f173-4622-4f34-9fa4-67f2d46ffd90)


### **SessionStorage 🚀**
- Dados são armazenados no `sessionStorage` para evitar fetch duplicados e melhorar a performance entre navegações na mesma sessão.
  ![image](https://github.com/user-attachments/assets/961cc9e5-4116-48fd-9497-885ba8d4f8a4)


### **Paginação 😎**
- Implementação da paginação para dividir o conteúdo em páginas menores, reduzindo o volume de dados carregados de uma vez.
  ![image](https://github.com/user-attachments/assets/0195f182-b6a9-4e3e-bc5c-67a22beefbc2)


### **Middleware 💻**
- Redirecionamento de páginas é gerenciado com **Middleware** para melhorar a navegação e segurança.
  ![image](https://github.com/user-attachments/assets/612d1516-10ec-4af2-927e-fd51cb5297e5)


### **Toastify ⚡ **
- Sistema de notificações implementado com **React Toastify** para exibir mensagens de sucesso, erro e avisos.
  ![image](https://github.com/user-attachments/assets/2b461d98-049a-46a5-a63d-db07e681b59f)


---
