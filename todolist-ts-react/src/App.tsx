import React, { useState } from 'react';
import './components/styles/scss/_main.scss';
import Input from './components/Input';
import List from './components/List';

import { listData } from "./interfaces/list";

const App = () => {
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
	const [inputValue, setInputValue] = useState<listData>({
		id: 0,
		task: '',
		checked: false
	});
	const [editing, setEditing] = useState<number>(0);

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
			setEditing(0);
			setInputValue({
				id: 0,
				task: '',
				checked: false
			});
			return;
		}

		if (inputValue.task !== '') {
			setList(oldA => [...oldA, inputValue])
		}
		setInputValue({
			id: 0,
			task: '',
			checked: false
		});
	}
	const handleClickItem = (el: listData) => {
		setEditing(el.id);
		setInputValue(el);
	}
	const handleCheckDoneItem = (idElement: number) => {
		const allItems = list.map(item => {
			if (item.id === idElement) item.checked = !item.checked;
			return item;
		});
		setList(allItems);
	}
	const handleDeleteInput = (idElement: number) => {
		setList(oldValues => oldValues.filter(el => el.id !== idElement));
		setEditing(0);
		setInputValue({
			id: 0,
			task: '',
			checked: false
		});
	}
	return (
		<div className="App">
			<h1 data-testid="title">TODO List</h1>
			<div className="container ">
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
		</div>
	);
}

export default App;
