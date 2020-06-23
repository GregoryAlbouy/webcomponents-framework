import HTML_STR from './PlaceholderComponent.c.html'
import CSS_STR from './PlaceholderComponent.c.scss'
import { Component, ShadowComponent } from '../components'

@Component({
    tagname: 'placeholder-component',
    template: { html: HTML_STR, css: CSS_STR }
})
export default class PlaceholderComponent extends ShadowComponent
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