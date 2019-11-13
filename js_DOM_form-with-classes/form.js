class Form {
    constructor() {
        this.components = [];
        this.componentsProps = [];
    }

    addInput(props) {
        let input = `<input type=${props.type} name=${props.name}>`;
        if (props.required) {
            input = `<input type=${props.type} name=${props.name} required>`;
        }
        this.components.push(input);
        this.componentsProps.push(props);
    }

    setSubmitCallback(cb) {
        
    }

    setValidationErrorCallback(cb) {

    }
    
    render(container) {
        this.components.forEach(component => {
            container.innerHTML += component;
        });
        container.innerHTML += `
        <button type="submit" name="submit">Submit</button>`
    }
}