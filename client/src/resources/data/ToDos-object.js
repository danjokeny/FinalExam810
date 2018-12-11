import { inject } from 'aurelia-framework';
import { DataServices } from './data-services';
@inject(DataServices)
export class ToDo {
    constructor(data) {
        this.data = data;
        this.TODO_SERVICE = 'todos';
    }

    async saveFoo(ToDo) {
        let serverResponse;
        if (ToDo) {
            if (foo._id) {
                serverResponse = await this.data.put(ToDo, this.TODO_SERVICE);
            } else {
                serverResponse = await this.data.post(ToDo, this.TODO_SERVICE);
            }
            return serverResponse;
        }
    }


    async getToDos() {
        let response = await this.data.get(this.TODO_SERVICE);
        if (!response.error) {
            this.ToDosArray = response;
        } else {
            this.ToDosArray = [];
        }
    }

    async delete(foo) {
        if (ToDo && ToDo._id) {
            await this.data.delete(this.TODO_SERVICE + '/' + ToDo._id)
        }
    }

    openEditForm() {
        this.showToDoEditForm = true;
        setTimeout(() => { $("#Todo").focus(); }, 500);
    }

};