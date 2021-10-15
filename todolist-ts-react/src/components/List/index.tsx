import react from "react";


import { listPropsData } from "../../interfaces/list";

const List = ({ list, handleClickItem, handleCheckDoneItem, handleDeleteInput }: listPropsData) => {
    if (list) {
        return (
            <>
                {list.map((el, i) => (
                    <div key={i}>
                        <li onClick={() => handleClickItem(el)}>
                            <u className={el.checked ? 'line-through' : ''}>
                                {el.task}
                            </u>
                        </li>
                        <button onClick={() => handleCheckDoneItem(el.id)}>Done</button>
                        <button onClick={() => handleDeleteInput(el.id)}>Delete</button>
                    </div>
                ))}
            </>
        )
    }
    return (<>Nothing in the list :(</>)
}
export default List;
