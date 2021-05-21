import Input from 'js/Input.js';

export class Main {
    _property = 'test';

    render() {
        const input = new Input();
        document.body.appendChild(Input);
    }
};
