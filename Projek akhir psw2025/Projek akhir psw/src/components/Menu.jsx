import React from "react";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "B2 Panggang",
      description: "Babi panggang adalah hidangan daging babi yang dimasak dengan cara dipanggang atau dibakar, dengan ciri khas kulit yang renyah dan daging yang empuk.seperti Babi Panggang Karo (BPK) yang khas dari Sumatera Utara dengan cita rasa gurih pedas dan dimasak dengan bumbu seperti andaliman, serta Bipang Ambawang atau babi panggang merah..",
      price: "Rp 35.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzvUQA0pweiTiVxqh_rMhoC4o_WpieinJ5IPNb55z9u94sfSbMHXOidoajAKGzuM6yCjE&usqp=CAU"
    },
    {
      id: 2,
      name: "Saksang",
      description: "Saksang babi adalah hidangan khas suku Batak dari Sumatera Utara yang terbuat dari daging babi yang dicincang, dibumbui rempah melimpah seperti andaliman, dan dimasak dengan tambahan darah babi.",
      price: "Rp 20.000",
      image: "https://awsimages.detik.net.id/community/media/visual/2022/03/25/rekomendasi-saksang-babi.jpeg?w=720"
    },
    {
      id: 3,
      name: "B2 Sup",
      description: "B2 sup Khas Batak adalah hidangan berkuah bening dengan potongan daging babi yang direbus hingga empuk, dipadukan dengan rempah khas seperti andaliman. Rasanya gurih, segar, dan menjadi salah satu menu tradisional Batak yang paling digemari..",
      price: "Rp 25.000",
      image: "https://img-global.cpcdn.com/recipes/e66aa00fef301dff/200x200cq80/sup-iga-babi-tangkuakundur-foto-resep-utama.jpg"
    },
    {
      id: 4,
      name: "Ikan Arsik",
      description: "Ikan arsik disajikan dengan kuah bumbu kuning yang pekat, khas dari perpaduan andaliman, bawang, dan rempah tradisional Batak. Potongan bumbu seperti serai, lengkuas, dan kacang panjang tampak menyatu dalam masakan, menunjukkan proses memasak perlahan hingga bumbu meresap. Aromanya kuat dan segar, sementara tampilannya hangat dan menggugah selera. Hidangan ini menghadirkan rasa gurih, pedas lembut, dan asam yang seimbang, mencerminkan keotentikan kuliner Batak Toba mas dimasak dengan bumbu kuning dan andaliman khas Batak.",
      price: "Rp 32.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRovzCSyGcBwRG1ACnhdVW_7tOy9hMati1Dg&s"
    },
    {
      id: 5,
      name: "Babi Arsik",
      description: "DagingBabi arsik adalah hidangan khas Tapanuli, Sumatera Utara, yang dibuat dari daging babi dengan bumbu kaya rempah yang asam, pedas, dan gurih. Ciri khasnya adalah penggunaan bumbu khas Batak seperti andaliman (memberikan rasa pedas menyengat dan sensasi 'mangintir' di lidah) dan asam kandis/galugur, serta tambahan kecombrang.g babi dengan bumbu rempah andaliman dan kecombrang, asam pedas gurih.",
      price: "Rp 38.000",
      image: "https://img-global.cpcdn.com/recipes/da27c5e14f59c851/240x320cq80/photo.jpg"
    },
    {
      id: 6,
      name: "Ikan Bakar",
      description: "Ikan jahir panggang ini disajikan dengan tampilan kecokelatan khas hasil pemanggangan di atas bara. Tekstur dagingnya tampak padat dan bumbunya meresap merata, memberikan aroma rempah yang kuat. Disajikan sederhana namun menggugah selera, hidangan ini menghadirkan cita rasa khas kuliner Batak yang gurih dan sedikit pedas..",
      price: "Rp 30.000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz182dd7UENRXzEEwN6Q3znKPkFyMPBYcBwA&s"
    },
    
   
    {
      id: 7,
      name: "Sate B2",
      description: "Sate Babi Khas Batak adalah sate daging babi yang dipotong kecil dan dibakar dengan bumbu sederhana namun kaya rasa. Ciri khasnya terletak pada penggunaan andaliman dan rempah Batak lainnya yang memberi rasa pedas, segar, dan aromatik. Teksturnya juicy, aromanya harum, dan menjadi salah satu hidangan khas Batak yang paling populer..",
      price: "Rp 22.000",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ac/c7/2b/sate-babi-krekot.jpg?w=500&h=-1&s=1"
    },
  
  ];

  return (
    <section id="menu" className="page">
      <div className="container">
        <div className="section-title">
          <h2>Menu Lengkap</h2>
          <p>Pilihan masakan khas Batak  dengan rasa terbaik</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-img" />
              <div className="menu-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
