import react from "react";

import { propsData } from "../../interfaces/input";

const Input = ({ handleChangeValue, value, handleButtonClick, editing }: propsData) => {
    return (
        <div className="input">
            <input
                onChange={e => handleChangeValue({ id: Math.floor(Math.random() * (100000)), task: e.target.value, checked: false })}
                value={value}
                className="input__input"
            />
            <button
                onClick={handleButtonClick}
                className="input__button"
            >
                {!!editing ? 'Update' : 'Add'}
            </button>
        </div>
    )
}
export default Input;
