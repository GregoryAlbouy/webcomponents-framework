// type EventTuple = [
//     string,
//     (this: Document, event: DocumentEventMap[]) => any,
//     (boolean | AddEventListenerOptions)?
// ]
type EventTuple = [
    string,
    (this: any, event: any) => any,
    (boolean | AddEventListenerOptions)?
]
type StringObject = { [key: string]: string }
type TemplateObject = { html: string, css: string }
type ComponentProps = { [key: string]: any }
// type ComponentRefs = { [key: string]: Element }