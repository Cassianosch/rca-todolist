import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [list, setList] = useState(['a', 'b']);
	const [inputValue, setInputValue] = useState('');

	const handleAddItem = () => {
		if (inputValue !== '') {
			setList(oldA => [...oldA, inputValue])
		}
		setInputValue('');
	}
	const handleEditInput = (value) => {
		//TODO: Edit
		setList(oldValues => oldValues.filter(el => el !== value))
	}

	const handleDeleteInput = (value) => {
		setList(oldValues => oldValues.filter(el => el !== value))
	}
	return (
		<div className="App">
			<input onChange={e => setInputValue(e.target.value)} value={inputValue} />
			<button onClick={handleAddItem}>Add</button>
			{
				list && (
					<ul>
						{list.map((el, i) => (
							<>
								<li onClick={() => handleEditInput(el)} key={i}>
									<u>
										{el}
									</u>
								</li>
								<button onClick={() => handleDeleteInput(el)}>Delete</button>
							</>
						))}
					</ul>
				)
			}
		</div>
	);
}

export default App;
