import ContactForm from "ContactForm"
import ContactList from "ContactList"
import Filter from "Filter"
import Section from "Section";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "redux/auth";


const ContactsPage = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    
    //     dispatch(getCurrentUser())
     
    // }, [dispatch])

    return (
        <>
        {/* <Section> */}
        <ContactForm/>
        {/* </Section> */}
        {/* <Section title="Contacts"> */}
        <Filter/>
        <ContactList/>
        {/* </Section> */}
        </>

    )
};

export default ContactsPage;