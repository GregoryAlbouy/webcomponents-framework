import HTML_STR from './app-root.c.html'
import CSS_STR from './app-root.c.scss'
import { Component, BaseComponent } from '../components'
import { PlaceholderComponent } from '../components'

@Component({
    tagname: 'app-root',
    template: { html: HTML_STR, css: CSS_STR }
})
export default class AppRoot extends BaseComponent
{
    connectedCallback() {
        this.root.appendChild(new PlaceholderComponent())
    }
}