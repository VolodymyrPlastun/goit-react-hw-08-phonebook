import Section from '../Section';
// import ContactForm from 'ContactForm';
import ContactList from 'ContactList';
// import Filter from 'Filter';
import HomePage from 'Pages/HomePage';
import { useSelector, useDispatch } from 'react-redux';
import {Outlet, Route, Routes} from 'react-router-dom';
import NavBar from 'NavBar';
import Register from 'Pages/Register';
import LoginPage from 'Pages/LoginPage';
// import { useEffect } from 'react';
// import { fetchContact } from '../redux/contactsOperation';

export const App = () => {
  // const contacts = useSelector(state => state.contacts.items);
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchContact())
// }, [dispatch])

  return (
    <div>
      <Section>
        <NavBar/>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          {/* <Route path="/contacts" component={ContactList}/> */}
        </Routes>
      </Section>
      {/* <Section title="Phonebook">
        <ContactForm />
</Section>
      <Section title="Contacts">
        <Filter/>
        {contacts.length !== 0 ? <ContactList /> : <p>Here will be your contacts</p>}
        </Section> */}
    </div>
  );
};
