import Input from 'js/Input.js';

class Main {
    _property = 'test';

    render() {
        new Input();
        document.body.appendChild(Input);
    }
}

export { Main };
