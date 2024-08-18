//Імпортуємо іконки з бібліотеки react-icons для використання у компоненті.
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { useState } from "react";

// Функція для створення розмітки компонента
const Contact = ({ contact }) => {
  //Використовуємо dispatch для відправлення екшену для видалення контакту
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContactThunk(contact.id));
    setIsModalOpen(false);
  };

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
        onClick={() => setIsModalOpen(true)} // Відкрити модальне вікно
      >
        Delete
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Закрити модальне вікно
        onConfirm={handleDelete} // Підтвердити видалення
      />
    </div>
  );
};

export default Contact;
