import React, {useState, useCallback} from "react";
import {observer} from "mobx-react";
import {nanoid} from 'nanoid';
import store from "../../store";

const TodoForm: React.FC = () => {
    const [task, setTask] = useState<string>('');

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }, []);

    const onKeyDown = useCallback((event: React.KeyboardEvent): void => {
        if (event.key === 'Enter' && task !== '') {
            setTask('');
            store.addTodo({id: nanoid(), text: task, isEdit: false});
        }
    }, [task]);

    const onClick = useCallback(() => {
        if (task !== '') {
            store.addTodo({id: nanoid(), text: task, isEdit: false});
        }
    }, [task]);


    return <div>
        <div className='input-field'>
            <input id='title'
                   type='text'
                   value={task}
                   onChange={onChange}
                   onKeyDown={onKeyDown}
            />
            <label htmlFor='title'
                   className='active'
            >
                Введите название дела
            </label>

            <button className="btn waves-effect waves-light input-field__btn"
                    onClick={onClick}
                    type="button"
                    name="action">
                Создать
            </button>
        </div>
    </div>
};

export default observer(TodoForm);
