class EmailInput {
    constructor() {
        this.type = 'email';
    }

    setName(name) {
        this.name = name;
    }

    setRequired(required) {
        required ? this.required = true : this.required = false;        
    }
}