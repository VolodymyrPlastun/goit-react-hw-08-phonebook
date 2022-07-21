import ContactForm from "ContactForm"
import ContactList from "ContactList"
import Filter from "Filter"
// import Modal from "Modal";
// import Section from "Section";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getCurrentUser } from "redux/auth";


const ContactsPage = () => {

    return (
        <>
        {/* <Section> */}
        <ContactForm/>
        {/* </Section> */}
        {/* <Section title="Contacts"> */}
        <Filter/>
        <ContactList/>
        {/* <Modal></Modal> */}
        {/* </Section> */}
        </>

    )
};

export default ContactsPage;