import { Controller,Get,Body,Post,Param,Delete,Patch,HttpCode } from "@nestjs/common";
import { TodoService } from './todos.service';

// A controller's purpose is to receive incoming requests for the application. 
// The routing mechanism controls which controller receives which requests and helps to return a response.

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    
    @Get()
    getAllTodos(): any {
        return this.todoService.findAll();
    }
    
    @Post()
    addTodo(
        @Body('title') todoTitle: string,
        @Body('description') todoDescription: string,
    ): any {
        return this.todoService.create(todoTitle, todoDescription);
    }

    @Get(':id')
    getTodoById(@Param('id') todoId: string): any {
        return this.todoService.findOne(todoId);
    }

    @Delete(':id')
    deleteTodoById(@Param('id') todoId: string): any {
        return this.todoService.deleteById(todoId);
    }

    @Patch(':id')
    updateTodoById(
        @Param('id') todoId: string,
        @Body('title') todoTitle: string,
        @Body('description') todoDescription: string,
    ): any {
        return this.todoService.UpdateById(todoId, todoTitle, todoDescription);
    }
}