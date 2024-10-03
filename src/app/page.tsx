"use client";

import React from 'react';

const Home: React.FC = () => {

  // PDF'i yeni bir sekmede açmak için fonksiyon
  const openPDFInNewTab = (pdf: string) => {
    window.open(pdf, '_blank'); // Yeni sekmede açar
  };

  return (
    <>
      {/* Ekranın ortasında logo ve buton */}
      <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative" style={{
        backgroundImage: 'url("images/arkaplan.png")' // Arka plan resmi
      }}>
        {/* Beyaz yuvarlak arka plan - dairenin boyutları sabit */}
        <div className="absolute w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full bg-white bg-opacity-80 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Logo */}
        <img 
          src="images/logo.png" 
          alt="Logo" 
          className="w-[80%] max-w-[500px] h-auto mb-5 z-10"
        />

        {/* Kataloğu görüntüle butonları */}
        <button 
          onClick={() => openPDFInNewTab("pdf/pbkatalog.pdf")} 
          className="py-3 px-6 text-lg bg-gradient-to-r from-[#4d889b] to-[#db0934] text-white border-none rounded cursor-pointer transition duration-300 ease-in-out z-10 mb-2"
        >
          TR KATALOĞU GÖRÜNTÜLE 
        </button>
        <button 
          onClick={() => openPDFInNewTab("pdf/pbkatalog2.pdf")} 
          className="py-3 px-6 text-lg bg-gradient-to-r from-[#4d889b] to-[#db0934] text-white border-none rounded cursor-pointer transition duration-300 ease-in-out z-10 mb-2"
        >
          VIEW EN CATALOGUE
        </button>
      </div>

      {/* Responsive ayarlar için @media sorguları */}
      <style jsx>{`
        @media (max-width: 768px) {
          img {
            width: 60%;
            max-width: 300px;
          }
          button {
            font-size: 14px ;
            padding: 10px 20px;
          }
        }
        @media (max-width: 480px) {
          img {
            width: 50%;
            max-width: 200px;
          }
          button {
            font-size: 12px;
            padding: 8px 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;