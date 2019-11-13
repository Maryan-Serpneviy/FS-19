class PhoneInput {
    constructor() {
        this.type = 'tel';
    }

    setName(name) {
        this.name = name;
    }

    setRequired(required) {
        required ? this.required = true : this.required = false;        
    }
}