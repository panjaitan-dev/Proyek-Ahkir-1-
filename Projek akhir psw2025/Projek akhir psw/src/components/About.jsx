import React from 'react';

const About = () => {
  return (
    <section id="about" className="page">
      <div className="container">
        <div className="section-header">
          <h2>Tentang Kami</h2>
          <p> Mengenal lebih dekat Rumah Makan Fly Over,s </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <img 
                src="/nikolas.jpg" 
                alt="Interior Rumah Makan Fly Over"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '6px'
                }}
                onError={(e) => {
                  // Fallback jika gambar gagal dimuat
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }}>Gambar Interior Rumah Makan</span>
            </div>
          </div>

          <div className="about-text">
            <div className="mission-vision">
              <h3>Sejarah Kami</h3>
              <p>
                Rumah Makan Fly Over adalah rumah makan khas Batak yang berdiri pada bulan Juni 2000.
                Usaha kuliner ini didirikan oleh keluarga Bapak Silitonga dan terus berkembang dari
                waktu ke waktu berkat dukungan keluarga serta pelanggan setia.
              </p>

              <p>
                Nama "Fly Over" diberikan oleh saudara Bapak Silitonga, yaitu Bapak Trimedya Panjaitan.
                Rumah makan ini berlokasi di Kecamatan Laguboti dan menjadi salah satu destinasi kuliner
                yang dikenal masyarakat luas di daerah tersebut.
              </p>

              <p>
                Komitmen dalam menjaga cita rasa autentik serta meningkatkan kualitas masakan tanpa
                mengubah standar kelezatan, menjadi kunci utama keberhasilan rumah makan ini. Kritik dan
                saran pelanggan selalu menjadi bahan evaluasi untuk terus memberikan yang terbaik.
              </p>

              <h3>Misi Kami</h3>
              <ul className="mission-list">
                <li>Menyajikan hidangan berkualitas dengan bahan-bahan terbaik dan segar</li>
                <li>Memberikan pelayanan terbaik dan pengalaman makan yang memuaskan</li>
                <li>Melestarikan warisan kuliner Indonesia khususnya masakan Batak</li>
                <li>Menjaga kebersihan dan keamanan makanan sesuai standar kesehatan</li>
                <li>Menjadi destinasi kuliner favorit keluarga dan komunitas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;