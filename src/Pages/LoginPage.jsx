import { useState } from 'react';
import s from '../ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { login} from '../redux/auth/auth-operations';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const contacts = useSelector(state => state.contacts.items);


  const handleSubmit = evt => {
    evt.preventDefault();
    // if (contacts.find(
    //         contact => contact.name.toLowerCase() === name.toLowerCase()
    //       )) {
    //         return alert(`${name} is already in contacts`);
    //       }
      dispatch(login({email, password}))
    //   reset();
  };

    const reset = () => {
      setEmail('');
      setPassword('');
  };

  const handlePasswordChange = evt => {
    setPassword(evt.target.value);
  }

  
  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  }

      return (
          <div className={s.container}>
            <h1>Login page</h1>
            <form className={s.form}
                onSubmit={handleSubmit}
            >

            <label className={s.label}>Email
              <input className={s.input}
  type="email"
  name="email"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={email}
                onChange={handleEmailChange}
/>
            </label>
            <label className={s.label}>Password
            <input className={s.input}
  type="password"
  name="password"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={password}
                onChange={handlePasswordChange}
              /></label>
          <button className={s.btn} type="submit">Sign in</button>
          </form> 
          </div>
        )
}