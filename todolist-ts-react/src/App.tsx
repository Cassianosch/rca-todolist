import React, { useState } from 'react';
import './components/styles/scss/_main.scss';
import Input from './components/Input';
import List from './components/List';

import { listData } from "./interfaces/list";

function App() {
	const [list, setList] = useState<listData[]>([
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
	]);
	const [inputValue, setInputValue] = useState({});
	const [editing, setEditing] = useState<Number>(0);

	const handleAddEditItem = () => {
		if (!!editing) {
			const allItems = list.map(item => {
				if (item.id === editing) {
					inputValue.id = editing;
					return inputValue;
				}
				return item;
			});
			setList(allItems);
			setEditing(false);
			setInputValue('');
			return;
		}

		if (inputValue !== '') {
			setList(oldA => [...oldA, inputValue])
		}
		setInputValue('');
	}
	const handleClickItem = (el) => {
		setEditing(el.id);
		setInputValue(el);
	}
	const handleCheckDoneItem = (idElement) => {
		const allItems = list.map(item => {
			if (item.id === idElement) item.checked = !item.checked;
			return item;
		});
		setList(allItems);
	}
	const handleDeleteInput = (idElement) => {
		setList(oldValues => oldValues.filter(el => el.id !== idElement));
	}
	return (
		<div className="App">
			<h1>TODO List</h1>
			<Input
				handleChangeValue={setInputValue}
				value={inputValue?.task || ''}
				handleButtonClick={handleAddEditItem}
				editing={editing}
			/>
			<List
				list={list}
				handleClickItem={handleClickItem}
				handleCheckDoneItem={handleCheckDoneItem}
				handleDeleteInput={handleDeleteInput}
			/>
		</div>
	);
}

export default App;
