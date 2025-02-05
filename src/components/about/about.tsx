'use client'
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>
      <div className="content">
        <p>
          Welcome to our company! We specialize in providing high-quality motorcycle and car rental services, along with professional maintenance and repair solutions. Located in Osh, South Kyrgyzstan, we have been proudly serving adventurers and travelers since 2015.
        </p>
        <p>
          Our mission is to empower exploration and adventure by offering reliable vehicles and expert services. Whether you're embarking on a thrilling journey through Central Asia or simply need a dependable rental, we've got you covered.
        </p>
        <p>
          We take pride in our experienced team, who are passionate about delivering exceptional customer service and ensuring your safety and satisfaction. Join us and explore the beauty of Kyrgyzstan with confidence and ease.
        </p>
      </div>
    

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        .title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }
        .content {
          font-size: 18px;
          color: #333;
          margin-bottom: 20px;
        }
        .back-link {
          display: inline-block;
          margin-top: 20px;
          text-decoration: none;
          color: blue;
        }
        .back-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default About;
