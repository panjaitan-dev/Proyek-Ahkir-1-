import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Lokasi Kami</h3>
            <div className="footer-info">
              <p>📍 Jl. Lintas Sumatra<br />Balige, Laguboti<br />Sumatera Utara, Indonesia</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Kontak & Reservasi</h3>
            <div className="footer-info">
              <p>📞 0812-6000-0492</p>
              <p>📧 info@flyovers.com</p>
              <a 
                href="https://wa.me/6281260000492" 
                className="whatsapp-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                💬 Hubungi via WhatsApp
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Jam Operasional</h3>
            <div className="footer-info">
              <p><strong>Senin - Jumat:</strong><br />09.00 - 22.00 WIB</p>
              <p><strong>Sabtu - Minggu:</strong><br />08.00 - 23.00 WIB</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Tentang Kami</h3>
            <div className="footer-info">
              <p>Rumah Makan Fly Over's menyajikan masakan khas Batak dengan cita rasa autentik dan bahan-bahan berkualitas.</p>
              <div className="social-links">
                <span>Ikuti kami:</span>
                <div className="social-icons">
                  <a href="https://www.instagram.com/explore/locations/1013584116/rm-batak-fly-over-laguboti/" aria-label="Instagram">Instagram</a>
                   <a href="https://www.facebook.com/flyovercoffeeshop/" aria-label="Facebok">Facebok</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear}Rumah Makan Fly Over's.</p>
            <p> oleh Kelompok PSW Solana</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;