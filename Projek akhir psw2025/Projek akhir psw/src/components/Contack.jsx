import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="page">
      <div className="container">
        <div className="section-header">
          <h2>Kontak Kami</h2>
          <p>Hubungi kami untuk informasi lebih lanjut, reservasi, atau pertanyaan</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-section">
              <h3>Informasi Kontak</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Alamat</strong>
                    <p>Jl.Lintas Sumatra Balige<br />Sumatera Utara</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>FlyOvers@Gamil.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <strong>Telepon/WhatsApp</strong>
                    <p>0812-6000-0492</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Jam Operasional</h3>
              <div className="operational-hours">
                <div className="hour-item">
                  <span>Senin - Jumat</span>
                  <span>09.00 - 22.00 WIB</span>
                </div>
                <div className="hour-item">
                  <span>Sabtu - Minggu</span>
                  <span>08.00 - 23.00 WIB</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Lokasi Kami</h3>
              <div className="map-container">
                <div className="map-embed">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.258284246209!2d99.0642580748965!3d2.332557957292245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e04fd2a6d5c6b%3A0x9c8a71b5c8a7b5e0!2sRumah%20Makan%20Fly%20Over!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Rumah Makan Fly Over Balige"
                  ></iframe>
                </div>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                  Jl. Lintas Sumatra, Balige, Laguboti
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Kirim Pesan</h3>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap *</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="nama@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon/WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0812-3456-7890"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan *</label>
                <textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tulis pesan, pertanyaan, atau reservasi Anda di sini..."
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;