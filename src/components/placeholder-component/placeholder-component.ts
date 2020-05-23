import HTML_STR from './placeholder-component.c.html'
import CSS_STR from './placeholder-component.c.scss'
import { Component, BaseComponent } from '../components'

@Component({
    tagname: 'placeholder-component',
    template: { html: HTML_STR, css: CSS_STR }
})
export default class PlaceholderComponent extends BaseComponent
{
    props = {}

    constructor() {
        super()
    }

    static get observedAttributes() {
        return []
    }

    // Custom elements lifecycle callbacks
    
    connectedCallback() {

    }

    attributeChangedCallback() {

    }

    disconnectedCallback() {

    }

    adoptedCallback() {

    }
}