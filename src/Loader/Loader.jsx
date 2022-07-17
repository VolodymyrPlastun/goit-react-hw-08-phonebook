import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
    return (
    <div className={s.container}>
    <ThreeDots
    height="100"
    width="100"
    color='tomato'
    ariaLabel='loading'
        />
        </div>
)
} 