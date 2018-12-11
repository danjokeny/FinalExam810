import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { ToDo } from '../resources/data/ToDos-object';


@inject(Router, ToDo)
export class ToDos {
    constructor(router, ToDo) {
        this.router = router;
        this.ToDos = ToDo;
        this.message = 'Dannys ToDos';
        this.showToDoEditForm = false;
    }

    async activate() {
        await this.ToDos.getToDos();
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
            priotity: "low",
            done: false
        }
        this.openEditForm();
    }

    editToDo(ToDo) {
        this.ToDo = ToDo;
        this.openEditForm();
    }

    async delete() {
        if (this.ToDo) {
            await this.ToDos.delete(this.ToDo);
            await this.ToDos.getToDos();
            this.back();
        }
    }

    async save() {
        if (this.ToDo && this.ToDo.todo) {
            await this.ToDos.saveToDo(this.ToDo);
            await this.ToDos.getToDos();
            this.back();
        }
    }

    //changing an selected todo from the grid to be done or not done
    changeActive(ToDo) {
        this.ToDo = ToDo;
        this.save();
    };


    back() {
        this.showToDoEditForm = false;
    }

    openEditForm() {
        this.showToDoEditForm = true;
        setTimeout(() => { $("#todo").focus(); }, 500);
    }
}