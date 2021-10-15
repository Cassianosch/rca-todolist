import react from "react";

import { propsData } from "../../interfaces/input";

const Input = ({ handleChangeValue, value, handleButtonClick, editing }: propsData) => {
    return (
        <>
            <input
                onChange={e => handleChangeValue({ id: Math.floor(Math.random() * (100000)), task: e.target.value, checked: false })}
                value={value}
            />
            <button
                onClick={handleButtonClick}
            >
                {!!editing ? 'Update' : 'Add'}
            </button>
        </>
    )
}
export default Input;
