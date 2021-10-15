import react from "react";

import { listPropsData } from "../../interfaces/list";

const List = ({ list, handleClickItem, handleCheckDoneItem, handleDeleteInput }: listPropsData) => {
    if (list.length !== 0) {
        return (
            <div className="list">
                {list.map((el, i) => (
                    <div key={i} className="list__item">
                        <button
                            onClick={() => handleCheckDoneItem(el.id)}
                            className={el.checked ? 'list__a--done checked' : 'list__a--done uncheked'}
                        ></button>
                        <div onClick={() => handleClickItem(el)} className={el.checked ? 'list__title line-through' : 'list__title'}>
                            {el.task}
                        </div>
                        <button
                            onClick={() => handleDeleteInput(el.id)}
                            className="list__a--delete"
                        ></button>
                    </div>
                ))}
            </div>
        )
    }
    return (<>&nbsp;&nbsp;&nbsp;Nothing in the list :(</>)
}
export default List;
