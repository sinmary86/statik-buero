import { useState } from 'react';
import styles from "./FooterApp.module.scss"; 
import { ModalApp } from "../Modal/Modal";
import { ModalData } from "../Modal/ModalData";

export const FooterApp = () => {
  const currentYear = new Date().getFullYear();

  const [modalKey, setModalKey] = useState(null);

  const selectedModal = ModalData.find((item) => item.key === modalKey);
  const handleClose = () => setModalKey(null);

  return (
    <footer className={styles.footerContainer}>
       
          <div>
            <h4>
              &copy; {currentYear === 2025 ? "2025" : `2025–${currentYear}`} SM  
              </h4>
          </div>

         <div className={styles.column}>
            
            <button
                type="button"
                onClick={() => setModalKey('impressum')}
                className="btn p-0 button-empty"
            >
                IMPRESSUM
            </button>

            <button
                type="button"
                onClick={() => setModalKey('datenschutz')}
                className="btn p-0 button-empty"
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
