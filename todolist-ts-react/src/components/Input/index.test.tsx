import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Input from './index';

const handleChangeValue = jest.fn();
const value = 'Aoba';
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
    it('should button not dispatch a function because the input is null', () => {
        act(() => {
            render(input);
        });
        const button = screen.queryByTestId("button-add-task")!;
        expect(button).toBeInTheDocument();

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(handleButtonClick).toHaveBeenCalledTimes(0);
    });
    // it('should button dispatch a function', () => {
    //     act(() => {
    //         render(input);
    //     });
    //     const button = screen.queryByTestId("button-add-task")!;
    //     const inputEl = screen.queryByTestId("input-element")!;

    //     console.log(inputEl);
    //     // expect(button).toBeInTheDocument();
    //     act(() => {
    //         button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    //     });
    //     expect(handleButtonClick).toHaveBeenCalledTimes(1);
    // });
})
