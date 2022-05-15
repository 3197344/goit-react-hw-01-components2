import PropTypes from 'prop-types';
import s from './ContactList.module.css';


function Contacts  (props) {
    const { contacts, delContact } = props;
    
    return (
        <ul className={s.section}>
            {contacts.map(({ name, number, id }) => (
                <li key={id}
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
    contacts: PropTypes.arrayOf
        (PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
        ),
    delContact: PropTypes.func.isRequired,
};

export default Contacts;