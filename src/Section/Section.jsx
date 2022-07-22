import s from './Section.module.css';// import { PropTypes } from 'prop-types';
import PropTypes from 'prop-types';
export default function Section({ children }) {
    return (
    <section className={s.container}>
        {children}
    </section>
);
} 

Section.propTypes = {
    children: PropTypes.node.isRequired,
}