//Імпортуємо іконки з бібліотеки react-icons для використання у компоненті.
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

// Функція для створення розмітки компонента
const Contact = ({ contact }) => {
  //Використовуємо dispatch для відправлення екшену для видалення контакту
  const dispatch = useDispatch();

  return (
    <div className={styles.containerContact}>
      <div className={styles.info}>
        <p>
          <RiContactsFill className={styles.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={styles.icon} />
          {contact.number}
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContactThunk(contact.id))}//При кліку видається контакт
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
