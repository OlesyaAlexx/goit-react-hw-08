import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

//SearchBox функція для створення розмітки компонента
//value це значення поля вводу, яке відображається у текстовому полі.

const SearchBox = () => {
  const dispatch = useDispatch(); //Відбувається надсилання екшенів у Redux-стан.
  const filterName = useSelector(selectNameFilter); //витягується значення фільтра з Redux-стану за допомогою селектора selectNameFilter.

  return (
    <div>
      <p className={styles.searchText}>Find contacts by name</p>
      <input
        className={styles.inputSearch}
        type="text"
        value={filterName}
        onChange={(e) => dispatch(changeFilter(e.target.value))} //викликається dispatch з екшеном changeFilter, який оновлює значення фільтра у Redux-стані.
      />
    </div>
  );
};

export default SearchBox;
