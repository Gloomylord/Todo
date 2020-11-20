import {action, observable} from 'mobx';

export interface ITodo {
    id: string;
    text: string;
    isEdit: boolean;
}

class Store {
    @observable public list: Array<ITodo> = [{id:'fff', text: 'научиться плавать', isEdit: false}];

    @action public addTodo = (todo: ITodo): void => {
        this.list.unshift(todo);
    };

    @action public deleteTodo = (id: string): void => {
        this.list = this.list.filter((item: ITodo) => item.id !== id);
    };

    @action public saveTodo = (id: string, text: string): void => {
        this.list.forEach((item: ITodo) => {
            if (item.id === id) {
                item.text = text;
                item.isEdit = false;
            }
        })
    };

    @action public editTodo = (id: string): void => {
        this.list.forEach((item: ITodo) => {
            if (item.id === id) {
                item.isEdit = true;
            } else {
                item.isEdit = false;
            }
        })
    };
}


const store = new Store();

export default store;
