import react, { useState } from 'react';
import { propsData } from "../../interfaces/input";

const Input = ({ handleChangeValue, value, handleButtonClick, editing }: propsData) => {
    const [buttonActive, setButtonActive] = useState(false);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeValue({ id: Math.floor(Math.random() * (100000)), task: e.target.value, checked: false });
        if (e.target.value !== '') {
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
    }
    return (
        <div className="input" data-testid="input-component">
            <input
                onChange={handleChangeInput}
                value={value}
                className="input__input"
                data-testid="input-element"
            />
            <button
                onClick={handleButtonClick}
                className={buttonActive ? 'input__button' : 'input__button input__button--disable'}
                data-testid={`button-add-task`}
                disabled={buttonActive ? false : true}
            >
                {!!editing ? 'Update' : 'Add'}
            </button>
        </div>
    )
}
export default Input;
