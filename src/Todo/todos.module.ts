import { Module } from "@nestjs/common";
import { TodoController } from "./todos.controller";
import { TodoService } from "./todos.service";

/* A module is a class annotated with a @Module() decorator. 
The @Module() decorator provides metadata that Nest-js makes use of to organize the application structure. 
It also houses a controller, import and service which is then bundled and parsed along. */

@Module({
    controllers: [TodoController],
    providers: [TodoService],
})
//The module exports the compliation of all codes to a format understood by Nest-js
export class TodosModule {}