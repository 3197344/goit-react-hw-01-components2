import { Component } from "react";
import s from './ContactList.module.css';

class Contacts extends Component {
    render() {
        const { contacts, delContact } = this.props;
        return (
            <ul className={s.section}>
                {contacts.map(({ name, number, id }, i) => (
            <li key={i} className={s.section_item}>
                {name} {number}
                <button className={s.section_btn} type="button" onClick={() => delContact(id)}>
                Delete
                </button>
            </li>
        ))}
            </ul>
        )
    }
};

export default Contacts;