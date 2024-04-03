let input = prompt('what would you like to do?');
const todos = [''];


while (input !== 'quit' && input !== 'q') {
    input = prompt("What you want to do?");
    if (input === 'list') {
        console.log('************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************');
    } else if (input === 'new') {
        const newTodo = prompt("Enter new task:");
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(promt('enter a index to delete'));
        if (!Number.isNan(index)) {
            const deleted = todos.splice(index, 1);
            console.log('deleted');
        } else {
            console.log('Invalid index');
        }
    }
    console.log('what you want todo');
}

console.log("Goodbye!");