import { NavLink } from "react-router-dom";
import styles from './NotFound.module.css'


export default function NotFound() {
    return (
        <div className={styles.content}>
            <h2>Sorry!</h2>
            <h4>This page doesn't exist</h4>
            <NavLink to="/">Back to the Homepage</NavLink>
        </div>
    )
}
