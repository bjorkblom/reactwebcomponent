class List extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('click', (e) => {
            let eventObj = new CustomEvent('onClick', {
                someProperty: 'some value',
                target: this
            });
            this.dispatchEvent(eventObj);
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            Hello from web components!
        `
    }
}
window.customElements.define('o-list', List);
