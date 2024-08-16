export const selectNameFilter = (state) => state.filters.name; //селектор

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name], //повертається масив контактів та використовується анонімна функція, яка повертає значення фільтру.
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase() || contact.number.includes(filter))
    ); //Ця функція фільтрує контакти, які включають filter в своєму імені/номері
  }
);
