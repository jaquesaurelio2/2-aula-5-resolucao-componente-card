import styles from "./index.module.css";
import PhoneIcon from "../../../public/images/phone.png";
import EmailIcon from "../../../public/images/e-mail.png";

export default function Card({ image, phone, email, name }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="cachorro caramelo" />
      <h1>{name}</h1>
      {phone && (
        <div className={styles.contact}>
          <img height="20px" src={PhoneIcon} alt="ícone telefone" />
          <p>{phone}</p>
        </div>
      )}
      {email && (
        <div className={styles.contact}>
          <img height="20px" src={EmailIcon} alt="ícone e-mail" />
          <p>{email}</p>
        </div>
      )}
    </div>
  );
}
