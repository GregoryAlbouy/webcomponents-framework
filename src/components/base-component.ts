interface ComponentProps {
    [key: string]: any
}

/**
 * Mother class of all components
 * Provides its child classes with Shadow Root template preconfigured
 * from their separate files (obtained via @Component() decorator)
 * and some practical methods.
 */

export default abstract class BaseComponent extends HTMLElement
{
    static TEMPLATE_STR = ''
    root: ShadowRoot
    props: ComponentProps = {}

    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'open' })
        const template = document.createElement('template')
        // Get class from current instance
        const self = this.constructor as typeof BaseComponent
        // Recover string template previously stored by @Component() decorator
        template.innerHTML = self.TEMPLATE_STR
        this.root.append(template.content.cloneNode(true))
    }

    /**
     * Shortcut for this.root.querySelector(query): this.select(query)
     */
    select(query: string, fromLight?: boolean): Element | null {
        return fromLight ? this.querySelector(query) : this.root.querySelector(query)
    }

    /**
     * Shortcut fot this.root.querySelectorAll(query): this.selectAll(query)
     */
    selectAll(query: string, fromLight?: boolean): NodeListOf<Element> {
        return fromLight ? this.querySelectorAll(query) : this.root.querySelectorAll(query)
    }
}