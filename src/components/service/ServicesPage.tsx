import React from "react";
import "./servicesPage.css";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1 className="services-title">Services</h1>

      <div className="service-block">
        <div className="service-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M7.5 1h1a.5.5 0 0 1 .5.5v.5h4A2.5 2.5 0 0 1 16 5v7.5A2.5 2.5 0 0 1 13.5 15h-11A2.5 2.5 0 0 1 0 12.5V5a2.5 2.5 0 0 1 2.5-2.5h4v-.5a.5.5 0 0 1 .5-.5zM5 5H2.5a1 1 0 0 0-1 1V12.5a1 1 0 0 0 1 1H5V5zm1 0v8h4V5H6zm8.5 0H11v8h2.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
          </svg>
        </div>
        <div className="service-content">
          <h2>Tire Reservation</h2>
          <p>
            Want to make sure your tire is ready for you? Send us an email with
            your specifications. A 50% down payment is required to reserve your
            tires. Payment is made via bank transfer in Euro or USD.
          </p>
          <p>
            In case of a cancellation of your reservation, we keep 50% of your
            down payment.
          </p>
        </div>
      </div>

      <div className="service-block">
        <div className="service-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V15h1V2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5V15h1V2.5A1.5 1.5 0 0 0 12.5 1h-8zM1.5 5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div className="service-content">
          <h2>Mechanical Service</h2>
          <p>
            We offer simple services like oil and air filter changes. We do not
            provide deep engine maintenance. In April, we open our doors for
            mechanical service and self-maintenance options. Winter season only
            upon request. -> Pricing see PDF.
          </p>
        </div>
      </div>

      <div className="service-block">
        <div className="service-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0h3.414A1.5 1.5 0 0 1 14.5 1.5V9h-1V1.5a.5.5 0 0 0-.5-.5h-3V0z" />
            <path d="M2 1a1 1 0 0 0-1 1v11.793l3.207-3.207a1 1 0 0 1 1.414 0L9 14.793 11.793 12a1 1 0 0 1 1.414 0l3.207 3.207V2a1 1 0 0 0-1-1H2zm1-1h11a2 2 0 0 1 2 2v14.793a2 2 0 0 1-3.414 1.414L9 12.793 4.414 17.207A2 2 0 0 1 1 15.793V2a2 2 0 0 1 2-2z" />
          </svg>
        </div>
        <div className="service-content">
          <h2>Motorbike Parking</h2>
          <p>
            Some people need a storage place for the winter, while others need
            a parking spot for a quick trip to China. Osh is a strategic location
            near the Pamir Highway for your journey.
          </p>
        </div>
      </div>

      <div className="service-block">
        <div className="service-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1c-.348 0-.682.19-.853.5h-.294A1.5 1.5 0 0 0 5 2.5v11a1.5 1.5 0 0 0 1.5 1.5h4A1.5 1.5 0 0 0 12 13.5V2.5a1.5 1.5 0 0 0-1.5-1.5h-.293A.5.5 0 0 1 8 1z" />
          </svg>
        </div>
        <div className="service-content">
          <h2>Mini-Hotel</h2>
          <p>
            For your convenience, we offer a mini-hotel. You can stay with us
            for a few days to rest after long travels or before the next part of
            your journey. Cozy rooms and a pleasant atmosphere will ensure a
            comfortable stay.
          </p>
        </div>
      </div>

      <div className="service-block">
        <div className="service-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1c-.348 0-.682.19-.853.5h-.294A1.5 1.5 0 0 0 5 2.5v11a1.5 1.5 0 0 0 1.5 1.5h4A1.5 1.5 0 0 0 12 13.5V2.5a1.5 1.5 0 0 0-1.5-1.5h-.293A.5.5 0 0 1 8 1z" />
          </svg>
        </div>
        <div className="service-content">
          <h2>Amenities</h2>
          <p>
            Amenities for a full-service day at Alatoo Moto:
          </p>
          <ul>
            <li>Wi-Fi is available at our shop and self-service area.</li>
            <li>A cozy air-conditioned café is next door.</li>
            <li>Several restaurants just across the street.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;





