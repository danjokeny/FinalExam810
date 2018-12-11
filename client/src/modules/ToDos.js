import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ToDo } from '../resources/data/ToDos-object';


@inject(Router, ToDo)
export class ToDos {
    constructor(router, ToDos) {
        this.router = router;
        this.ToDos = ToDos;
        this.message = 'Dannys ToDos';
        this.showFooEditForm = false;
    }

    async activate() {
        await this.getToDos();
    }

    attached() {
        feather.replace()
    }


    async getToDos() {
        await this.ToDos.getToDos();
    }


    newToDo() {
        this.ToDo = {
            todo: "",
            priotity: ""
        }
        this.openEditForm();
    }

    editToDo(ToDo) {
        this.ToDo = ToDo;
        this.openEditForm();
    }

    async delete() {
        if (this.ToDo) {
            await this.ToDo.delete(this.ToDo);
            await this.ToDos();
            this.back();
        }
    }


    logout() {
        this.router.navigate('home');
    }


    async save() {
        if (this.ToDo && this.ToDo.ToDo && this.ToDo.todo) {
            await this.ToDos.saveFoo(this.ToDo);
            await this.getTodos();
            this.back();
        }
    }


    back() {
        this.showToDoEditForm = false;
    }

    openEditForm() {
        this.showToDoEditForm = true;
        setTimeout(() => { $("#ToDo").focus(); }, 500);
    }
}