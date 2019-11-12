class Todo {
    constructor() {
        this.todos = [];
        this.count = 0;
    }

    addItem(title, priority) {
        this.todos.push({
            title,
            priority,
            id: this.count++
        });
        return this.count;
    }

    removeItem(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.todos.splice(id, 1);
                return true;
            }
        }
        return false;
    }

    getItem(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                return this.todos[i];
            }
        }
        return null;
    }

    next() {
        const min = this.todos.map(e => e.priority);
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].priority === min) {
                console.log(this.todos[i]);
                return this.todos[i];
            }
        }
                
    }
}

const todo = new Todo();
console.log(todo.addItem('code', 1));
console.log(todo.addItem('play', 2));
console.log(todo.addItem('go out', 3));
console.log(todo.todos);
console.log(todo.removeItem(1));
console.log(todo.todos);
console.log(todo.getItem(2));
todo.next();