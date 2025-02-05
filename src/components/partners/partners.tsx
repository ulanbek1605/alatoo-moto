'use client'
import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Enduristan",
      description: "Supplier of SWM Superdual X motorcycles and spare parts.",
      image: "/image/enduristan.jfif",
      sayt: 'https://enduristan.ch/',
    },
    {
      name: "Yamaha and Honda",
      description: "Trusted partners for motorcycle rentals and support.",
      image: "/image/yamaha.png",
      sayt: '',
    },
    {
      name: "Oil and Consumables Suppliers",
      description: "Reliable providers of high-quality oils and consumables.",
      image: "/image/Motul.jpg",
      sayt: 'https://mollubricants.com/en/',
    },
    {
      name: "ALATOO-MOTO Swiss",
      description: "Partners for planning and organizing travel routes and assiting for guyded tours for german,french and english speaking groups.",
      image: "/image/alatoo.jfif",
      sayt: 'https://www.alatoo-moto.com/',
    },
    {
      name: "OSH DESTINATION",
      description: "Partners for planning and organizing travel routes.With in Kyrgyzstan.Assitinng tours in to Pamir and Uzbekistan",
      image: "/image/osh.jpg",
      sayt: 'https://destinationosh.com/en/',
    },
    {
      name: "Hotel Classic",
      description: "Booking hotel rooms,restorount and pool.",
      image: "/image/classic.jfif",
      sayt: 'https://classichotel.kg/',
    },
  ];

  return (
    <div className="container">
      <h1 className="title">Our Partners</h1>
      <div className="partners-list">
        {partners.map((partner, index) => (
          partner && (
            <a href={partner.sayt} key={index} className="card_partner">
              <div className="partner-card" >
                <img src={partner.image} alt={partner.name} className="partner-image" />
                <h2 className="partner-name">{partner.name}</h2>
                <p className="partner-description">{partner.description}</p>
              </div>
            </a>
          )
        ))}
      </div>


      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }
        .partners-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .partner-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .partner-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .partner-name {
          font-size: 20px;
          font-weight: bold;
          margin: 10px 0;
        }
        .partner-description {
          font-size: 16px;
          color: #555;
        }
        .card_partner{
            color: black;
        }
     
      `}</style>
    </div>
  );
};

export default Partners;
