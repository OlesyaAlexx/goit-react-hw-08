//Імпортуємо файли з папки components та data в App.jsx

import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { selectIsLoading, selectIsError } from "./redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";

// Створюємо головний компонент App
const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  //Створюємо розмітку компонентів
  return (
    <div className="wrapper">
      <div className="contactBook">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <h1>Loading...</h1>}
        {isError && <h2>Something went wrong!</h2>}
      </div>
    </div>
  );
};
export default App;
