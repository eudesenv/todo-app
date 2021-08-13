import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from './create-todo.dto';
import { generate } from 'shortid';

// Service is similar to a helper function that can perform specific tasks. 
// An example is reaching out to a database, so as to make the controller code lean.
@Injectable()
export class TodoService {
    private todosDb: Todo[] = [];

    findAll(): any {
        return [...this.todosDb];
    }

    create(todoTitle: string, todoDescription: string): any {
        const id = generate();
        const newTodo = new Todo(id, todoTitle, todoDescription);
        //add new todo dto to dto's arrray 
        this.todosDb = this.todosDb.concat(newTodo);
        return newTodo;
    }

    findOne(id: string): any {
        // get element from todo dto's array
        const todoIndex = this.todosDb.find(elem => elem.id === id);
        if (todoIndex === undefined) {
            throw new NotFoundException();
        }
        return todoIndex;
    }

    deleteById(id: string): any {
        const index = this.todosDb.findIndex(elem => elem.id === id);
        if (index === -1) {
            throw new NotFoundException();
        }
        // remove element from array or replace them
        this.todosDb.splice(index);
        return { messsage: 'Todo Deleted' };
    }

    UpdateById(id: string, todoTitle: string, todoDescription: string): any {
        const index = this.todosDb.findIndex(elem => elem.id === id);
        if (index === -1) {
            throw new NotFoundException();
        }
        const singleTodo = this.todosDb[index];
        if (todoTitle) {
            singleTodo.todoTitle = todoTitle;
        }
        if (todoDescription) {
            singleTodo.todoDescription = todoDescription;
        }
        this.todosDb[index] = singleTodo;
        return { message: 'Todo Updated' };
    }
}