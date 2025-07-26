import Form from "react-bootstrap/Form";
import { useForm } from "@formspree/react";
import styles from "./ContactForm.module.scss";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ModalApp } from "../../Modal/Modal";
import { ModalData } from "../../Modal/ModalData";


export const ContactForm = () => {

 const [modalKey, setModalKey] = useState(null);

  const currentModal = ModalData.find((item) => item.key === modalKey);

  const [state, formspreeSubmit] = useForm("mqabpjpd");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const isValid = form.checkValidity();
    setValidated(true);

    if (!isValid) return;

    const formData = new FormData(form);
    await formspreeSubmit(Object.fromEntries(formData.entries()));
  };

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Ihre Nachricht wurde gesendet!",
        text: "Wir beantworten jede Anfrage persönlich innerhalb von 24 bis 48 Stunden. Vielen Dank für Ihre Nachricht!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [state.succeeded]);

  return (
    <section id="contacts" className={styles.sectionForm}>
      <h2>Kontaktformular</h2>
      <Form
  noValidate
  validated={validated}
  onSubmit={handleSubmit}
  className={styles.formGrid}
>
 
    <div className={styles.columnGrid}>
      <Form.Group controlId="validationCustom01">
        <Form.Label>Name:</Form.Label>
        <Form.Control required name="name" type="text" />
      </Form.Group>

      <Form.Group controlId="validationCustom02">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control required name="email" type="email" />
      </Form.Group>

      <Form.Group controlId="validationCustom03">
        <Form.Label>Telefonnummer:</Form.Label>
        <Form.Control name="phone" type="tel" />
      </Form.Group>

      <Form.Group controlId="contactMethodSelect">
        <Form.Select name="contactMethod" required>
          <option value="">Wie möchten Sie kontaktiert werden?</option>
          <option value="telefon">Telefon</option>
          <option value="email">E-Mail</option>
          <option value="besprechung">Persönliches Treffen</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="preferredTimeSelect">
        <Form.Select name="preferredTime" required>
          <option value="">Bitte wählen Sie einen Zeitraum</option>
          <option value="08-11">08:00 – 11:00</option>
          <option value="11-14">11:00 – 14:00</option>
          <option value="14-18">14:00 – 18:00</option>
        </Form.Select>
      </Form.Group>
    </div>

    {/* Правая колонка */}
     <div className={styles.columnGrid}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ihre Nachricht / Frage:</Form.Label>
        <Form.Control as="textarea" rows={5} name="message" required />
      </Form.Group>

      <Form.Group className="d-flex align-items-start">
        <Form.Check
          required
          name="consent"
          label={
            <>
              Ich willige in die Verarbeitung meiner personenbezogenen Daten gemäß der{" "}
              <button
                type="button"
                onClick={() => setModalKey("datenschutz")}
                className={`${styles.policyLink} btn p-0`}
              >
                Datenschutzerklärung
              </button>
              .
            </>
          }
          feedbackType="invalid"
          className="custom-check"
        />
      </Form.Group>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-dark"
      >
        Nachricht senden
      </button>
    </div>
 

  {/* Модалка */}
  <ModalApp
    show={!!currentModal}
    handleClose={() => setModalKey(null)}
    title={currentModal?.title}
    content={currentModal?.content}
  />
</Form>

    </section>
  );
};
