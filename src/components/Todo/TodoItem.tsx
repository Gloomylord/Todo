import React, {useCallback, useState, useRef, useEffect} from "react";
import {observer} from "mobx-react";
import {ITodo} from "../../store";
import store from '../../store';

interface IProps {
    item: ITodo
}

const TodoItem: React.FC<IProps> = ({item}) => {

    const [task, setTask] = useState<string>(item.text);
    const inputRef = useRef<HTMLInputElement>(null);

    const deleteTodo = useCallback(() => {
        store.deleteTodo(item.id);
    }, [item.id]);

    const editTodo = useCallback(() => {
        store.editTodo(item.id);
    }, [item.id]);

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }, [task]);

    const onKeyDown = useCallback((event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && task !== '') {
            store.saveTodo(item.id, task);
        }
    }, [task]);

    const saveTodo = useCallback(() => {
        store.saveTodo(item.id, task);
    }, [task]);

    useEffect(()=> {
        if(inputRef.current && item.isEdit){
            inputRef.current.focus();
        }
    },[item.isEdit]);

    return (
        <li key={item.id}
            className="collection-item"
        >
            {item.isEdit ?
                <input className='collection__edit_input'
                       ref={inputRef}
                       onChange={onChange}
                       value={task}
                       onKeyDown={onKeyDown}
                /> :
                <div className='collection__text'>{item.text}</div>
            }
            <span role="button"
                  className="badge icon"
                  onClick={item.isEdit ? saveTodo : editTodo}
            >
                    <i className="material-icons">{item.isEdit ? 'save' : 'edit'}</i>
            </span>
            <span role="button"
                  className="badge icon"
                  onClick={deleteTodo}
            >
                    <i className="material-icons">clear</i>
            </span>
        </li>
    )
};

export default observer(TodoItem);
