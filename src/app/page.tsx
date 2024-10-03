"use client";

import React, { useState } from 'react';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(""); // Hangi PDF'in görüntüleneceğini belirleyen state

  const openPDF = (pdf: string) => {
    setSelectedPDF(pdf);
    setIsOpen(true);
  };

  return (
    <>
      {/* Ekranın ortasında logo ve buton */}
      <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{
        backgroundImage: 'url("images/arkaplan.png")' // Arka plan resmi
      }}>
        {/* Beyaz yuvarlak arka plan */}
        <div className="absolute w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] rounded-full bg-white bg-opacity-80 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        
        {/* Logo */}
        <img 
          src="images/logo.png" 
          alt="Logo" 
          className="w-[80%] max-w-[500px] h-auto mb-5 z-10"
        />

        {/* Kataloğu görüntüle butonları */}
        <button 
          onClick={() => openPDF("pdf/pbkatalog.pdf")} 
          className="py-3 px-6 text-lg bg-gradient-to-r from-[#4d889b] to-[#db0934] text-white border-none rounded cursor-pointer transition duration-300 ease-in-out z-10 mb-2"
        >
          TR KATALOĞU GÖRÜNTÜLE 
        </button>
        <button 
          onClick={() => openPDF("pdf/pbkatalog2.pdf")} 
          className="py-3 px-6 text-lg bg-gradient-to-r from-[#4d889b] to-[#db0934] text-white border-none rounded cursor-pointer transition duration-300 ease-in-out z-10 mb-2"
        >
          EN KATALOĞU GÖRÜNTÜLE 
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="relative w-full h-full max-w-[90%] max-h-[700px] bg-white">
            <iframe
              src={selectedPDF} // Seçilen PDF'i iframe'de açıyoruz
              className="w-full h-full border-collapse shadow-md"
              title="My PDF"
            />
            {/* X simgesi ile kapatma butonu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-transparent border-none text-2xl text-black cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;