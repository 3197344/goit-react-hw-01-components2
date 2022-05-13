// import { Component } from "react";
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

const Contacts = (props) => {
    
    const { contacts, delContact } = props;
    return (
        <ul className={s.section}>
            {contacts.map(({ name, number, id },i) => (
                <li key={i}
                    className={s.section_item}>
                    {name}: {number}
                    <button
                        className={s.section_btn}
                        type="button"
                        onClick={() => delContact(id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
};
Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    delContact: PropTypes.func.isRequired,
}

// class Contacts extends Component {
//     render() {
//         const { contacts, delContact } = this.props;
        
//         return (
//             <ul className={s.section}>
//                 {contacts.map(({ name, number, id }) => (
//                     <li key={id}
//                         className={s.section_item}>
//                         {name}: {number}
//                         <button
//                             className={s.section_btn}
//                             type="button"
//                             onClick={() => delContact(id)}>
//                         Delete
//                         </button>
//             </li>
//         ))}
//             </ul>
//         )
//     }
// };

export default Contacts;