import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  //Використовуємо useSelector, щоб отримати значення фільтра з Redux-стану.
  const filteredContacts = useSelector(selectFilteredContacts); //беруться всі контакти і значення фільтра та повертаються лише ті контакти, які відповідають умовам фільтра.

  //Якщо filteredContacts або його довжина дорівнює 0,
  // то відображається повідомлення про те, що контакти відсутні.
  if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts available</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
