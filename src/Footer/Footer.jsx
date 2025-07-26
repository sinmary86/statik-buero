import { useState } from 'react';
import styles from "./Footer.module.scss";
import { ModalApp } from "../Modal/Modal";
import { ModalData } from "../Modal/ModalData";

export const FooterApp = () => {
  const currentYear = new Date().getFullYear();

  const [modalKey, setModalKey] = useState(null);

  const selectedModal = ModalData.find((item) => item.key === modalKey);
  const handleClose = () => setModalKey(null);

  return (
    <footer className={styles.footerContainer}>
       
          <div className={styles.columnLeft}>
            <h4>
              &copy; SM{" "}
              <span>
                {" "}
                {currentYear === 2025 ? "2025" : `2025–${currentYear}`}
              </span>
            </h4>
          </div>

         <div className={styles.columnRight}>
            
            <button
                type="button"
                onClick={() => setModalKey('impressum')}
                className="btn p-0"
            >
                IMPRESSUM
            </button>

            <button
                type="button"
                onClick={() => setModalKey('datenschutz')}
                className="btn p-0"
            >
                DATENSCHUTZ
            </button>

          </div>
       

            {selectedModal && (
            <ModalApp
                show={!!modalKey}
                handleClose={handleClose}
                title={selectedModal.title}
                content={selectedModal.content}
            />
        )}

    </footer>
  );
};
