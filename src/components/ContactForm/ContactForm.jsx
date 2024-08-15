import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

// Функція ContactForm для додавання нового контакту
const ContactForm = () => {
  //Використовуємо dispatch для відправлення екшену для додавання контакту
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };
  // Функція -обробник відправки форми для додавання контакту
  const handleSubmit = (values, options) => {
    dispatch(
      addContactThunk({
        name: values.name,
        number: values.number,
      })
    );
    // Скидаємо форму після відправки
    options.resetForm();
  };
  // Схема валідації для форми за допомогою Yup
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required!"),
    number: Yup.string()
      .matches(/^[0-9]+(-[0-9]+)*$/, "Invalid format")
      .min(3, "To Short!")
      .max(50, "To Long!")
      .required("Required!"),
  });

  return (
    // Налаштування Formik з початковими значеннями, обробником відправки та схемою валідації
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <Field
          className={style.input}
          type="text"
          name="name"
          placeholder="Name"
        />
        <ErrorMessage className={style.error} name="name" component="span" />
        <Field
          className={style.input}
          type="text"
          name="number"
          placeholder="Number"
        />
        <ErrorMessage className={style.error} name="number" component="span" />
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
