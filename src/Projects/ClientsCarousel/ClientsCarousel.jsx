import Slider from "react-slick";
import styles from "./ClientsCarousel.module.scss";
import { clientsData } from "./clientsData";

export const ClientsCarousel = () => {
  const PrevArrow = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <span>‹</span>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <span>›</span>
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
     autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipeToSlide: true,
    variableWidth: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className={styles.clientsSection}>
      <div className={styles.textBlock}>
        <h2>UNSERE KUNDEN</h2>
        <p>
         Wir unterstützen Bauherren, Architekten und Unternehmen mit statischen Berechnungen und individuellen Lösungen für sichere Bauprojekte.
        </p>
      </div>

    <div className={styles.carouselWrapper}>
  <Slider {...settings} className={styles.slider}>
    {clientsData.map((client) => (
      <div key={client.id} className={styles.logoWrapper}>
        <img src={client.src} alt={client.alt} />
      </div>
    ))}
  </Slider>
</div>

    </section>
  );
};

