import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [list, setList] = useState([
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
	const [editing, setEditing] = useState(false);

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
			<input onChange={e => setInputValue({ id: Math.floor(Math.random() * (100000)), task: e.target.value })} value={inputValue?.task || ''} />
			<button onClick={handleAddEditItem}>{!!editing ? 'Update' : 'Add'}</button>
			{
				list && (
					<ul>
						{list.map((el, i) => (
							<div key={i}>
								<li onClick={() => handleClickItem(el)}>
									<u className={el.checked ? 'line-through' : null}>
										{el.task}
									</u>
								</li>
								<button onClick={() => handleCheckDoneItem(el.id)}>Done</button>
								<button onClick={() => handleDeleteInput(el.id)}>Delete</button>
							</div>
						))}
					</ul>
				)
			}
		</div>
	);
}

export default App;
