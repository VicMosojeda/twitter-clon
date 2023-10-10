// Navbar Left
export class nBLeft extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    // obtener los atributos estaticos
    static get observedAttributes() {
        return ["img", "title", "iCon"];
    }
    // condiciones de los atributos
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img" && oldVal !== newVal) {
            this.img = newVal;
        }

        if (attr === "title" && oldVal !== newVal) {
            this.title = newVal;
        }

        if (attr === "iCon" && oldVal !== newVal) {
            this.iCon = newVal;
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    // creando una constante template y asi creando su contenido html
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = this.getHTMLTemplate();
        return template;
    }

    getHTMLTemplate() {
        
    }

}
