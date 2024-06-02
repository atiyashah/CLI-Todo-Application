#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;

//print welcome message
console.log(chalk.bold.rgb(154, 284,284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 164,284)(`<<<=======>>> ${chalk.bold.hex(`#9999FF`)(`Welcome to  Atiya shah - Todo-List App`)}  <<<=========>>>`));
console.log(chalk.bold.rgb(154, 264,284)(`\t\t <<<==============================>>>\n`));

let main = async () => {
while(conditions){
let option = await inquirer.prompt([
{
name: "choice",
type: "list",
message: chalk.yellow("Select on option you want to do :"),
choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
}
]);
if(option.choice === "Add Task"){
await addTask()
}
else if(option.choice === "Delete Task"){
await deleteTask()
}
else if(option.choice === "Update Task"){
await updateTask()
}
else if(option.choice === "View Todo-List"){
await viewTask()

}
else if(option.choice === "Exit"){
conditions = false;

}

}}

//Function to add new task to the list
let addTask = async () =>{
let newTask = await inquirer.prompt([
{
name: "task",
type: "input",
message: "Enter you new task :",
}
]);
todoList.push(newTask.task);
console.log(chalk.green(`\n ${newTask.task}Task added successfully in Todo-List\n`))

}

//Function to view all Todo-List Tasks

let viewTask = () => {
console.log("\n Your Todo-List:\n");
todoList.forEach((task, index) => {
console.log(`${ index + 1}: ${task}`);
});
console.log("\n");

}

// Function to Delete a Task from the list
let deleteTask = async () =>{
await viewTask()
let taskIndex = await inquirer.prompt([
{
name: "index",
type: "number",
message: "Enter the 'index.no' of the task you want to delete :",


}
]);
let deletedTask = todoList.splice(taskIndex.index - 1, 1);
console.log(chalk.apply(`\n ${deletedTask} this task has been deleted successfully from your Todo-List\n`));

}

// Function to update a task
let updateTask = async () =>{
await viewTask()
let update_Task_index = await inquirer.prompt([
{
name: "index",
type: "number",
message: "Enter the 'index no'of the task you want to update :"
},
{
name: "new_task",
type: "input",
message: "Now Enter new task name :",
}
]);
todoList[update_Task_index.index - 1] =  update_Task_index.new_task
console.log(chalk.green.bold(`\n Task add index no. ${update_Task_index.index - 1} updated successfully [for updated list check option: "view Todo-List"\n]`));


}

main();