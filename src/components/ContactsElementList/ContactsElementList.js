import React from "react";
import PropTypes from 'prop-types';
import s from "../ContactsElementList/ContactsElementList.module.css"

function ContactsElementList( {name, number, delContact} ) {
    return (        
        <li>
            <span className={s.name}>{name}:</span>
            {number}
            <button
                onClick={delContact}
                className={s.button}>Delete</button>
        </li>
            )
    
};
ContactsElementList.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    delContact: PropTypes.func.isRequired
};

export default ContactsElementList;