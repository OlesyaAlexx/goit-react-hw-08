import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";

const ContactList = () => {
  //Використовуємо useSelector, щоб отримати значення фільтра з Redux-стану.
  const filteredContacts = useSelector(selectFilteredContacts); //беруться всі контакти і значення фільтра та повертаються лише ті контакти, які відповідають умовам фільтра.
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  console.log("Filtered Contacts:", filteredContacts);

  //Якщо filteredContacts або його довжина дорівнює 0,
  // то відображається повідомлення про те, що контакти відсутні.
  if (!filteredContacts || filteredContacts.length === 0) {
    return <p className={styles.text}>No contacts available</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>{isError}</div>;
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
