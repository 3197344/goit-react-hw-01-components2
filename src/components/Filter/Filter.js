import { Component } from "react";
import { nanoid } from "nanoid";
import s from './Filter.module.css';

class Filter extends Component {
    render() {
        const findInputId = nanoid();
        const { filter, onChangeInput } = this.props;
        return (
            <div className={s.section}>
                <label className={s.section_label}
                    htmlFor="findInputId">Find contacts by name</label>
                <input className={s.section_input}
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Search by name"
                    id={findInputId}
                    value={filter}
                    onChange={onChangeInput}
                    required
                />
            </div>

        )
    }
}
export default Filter