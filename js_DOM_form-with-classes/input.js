class Input {
    constructor() {
        this.type = 'text';
    }

    setName(name) {
        this.name = name;
    }

    setRequired(required) {
        required ? this.required = true : this.required = false;        
    }
}