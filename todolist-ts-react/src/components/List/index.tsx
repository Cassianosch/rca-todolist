// import react from "react";

import { listPropsData } from "../../interfaces/list";

const List = ({ list, handleClickItem, handleCheckDoneItem, handleDeleteInput }: listPropsData) => {
    if (list.length !== 0) {
        return (
            <div className="list" data-testid="list-component">
                {list.map((el, i) => (
                    <div key={i} className="list__item">
                        <button
                            onClick={() => handleCheckDoneItem(el.id)}
                            className={el.checked ? 'list__a--done checked' : 'list__a--done unchecked'}
                            data-testid={`button-check-el__${i}`}
                        ></button>
                        <div
                            onClick={() => handleClickItem(el)}
                            className={el.checked ? 'list__title line-through' : 'list__title'}
                            data-testid={`text-el__${i}`}
                            id={`text-el__${i}`}
                        >
                            {el.task}
                        </div>
                        <button
                            onClick={() => handleDeleteInput(el.id)}
                            className="list__a--delete"
                            data-testid={`button-delete-el__${i}`}
                        ></button>
                    </div>
                ))}
            </div>
        )
    }
    return (<>&nbsp;&nbsp;&nbsp;Nothing in the list :(</>)
}
export default List;
