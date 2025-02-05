import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
            <p>© {new Date().getFullYear()} ALATOOMOTO Project. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
