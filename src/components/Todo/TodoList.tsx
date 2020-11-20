import React from "react";
import {observer} from "mobx-react";
import {ITodo} from "../../store";
import store from '../../store';
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {

    return <div>
        {store.list.length > 0 ?
            <ul className='collection'>
                {
                    store.list.map((item: ITodo) => <TodoItem item={item} key={item.id}/>)
                }
            </ul>
            : <span className="collection-empty">Список пуст ¯\_(ツ)_/¯</span>}
    </div>
};

export default observer(TodoList);
