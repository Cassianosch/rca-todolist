import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Input from './index';

const handleChangeValue = jest.fn();
const value = '';
const handleButtonClick = jest.fn();
const editing = 0;
const input = <Input
    handleChangeValue={handleChangeValue}
    value={value}
    handleButtonClick={handleButtonClick}
    editing={editing}
/>;

describe('Input', () => {
    it('should component to be in the page', () => {
        render(input);
        expect(screen.queryByTestId("input-component")).toBeInTheDocument();
    });
    it('should component have dispatch a click when clicked', () => {
        act(() => {
            render(input);
        });
        const button = screen.queryByTestId("button-add-task")!;
        expect(button).toBeInTheDocument();

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(handleButtonClick).toHaveBeenCalledTimes(1);
    });
})
