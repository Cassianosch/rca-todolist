
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import List from './index';


const handleCheckDoneItem = jest.fn();
const handleClickItem = jest.fn();
const handleDeleteInput = jest.fn();
const ListComponent = <List
    list={[
        {
            id: 1,
            task: 'Lavar o carro',
            checked: false
        },
        {
            id: 2,
            task: 'Ver o sol',
            checked: true
        },
        {
            id: 3,
            task: 'Limpar monitor',
            checked: false
        },
        {
            id: 4,
            task: 'Trocar a lampada',
            checked: false
        }
    ]}
    handleCheckDoneItem={handleCheckDoneItem}
    handleClickItem={handleClickItem}
    handleDeleteInput={handleDeleteInput}
/>;
let container: HTMLDivElement;

beforeEach(() => {
    // configurate the dom as target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // clean on the way out
    unmountComponentAtNode(container);
    container.remove();
    container = null!;
});
describe.skip('List', () => {
    it('should component to be in the page', () => {
        act(() => {
            render(ListComponent, container);
        });
        expect(document.querySelector("[data-testid=list-component]")).toBeInTheDocument();
    });
    it('should component have dispatch a click when clicked', () => {
        act(() => {
            render(ListComponent, container);
        });
        const button = document.querySelector("[data-testid=button-check-el__0]")!;
        expect(button).toHaveClass('list__a--done unchecked')

        act(() => {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(handleCheckDoneItem).toHaveBeenCalledTimes(1);
    });
})
