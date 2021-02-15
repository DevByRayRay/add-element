export interface iElement {
    elementType: string
    className?: string | undefined
    content?: string | undefined
    contentElement?: string | undefined
    parent: HTMLElement
    id?: string | undefined
    attr?: string[][] | undefined
}

// xElement is a util class for creating HTML elements via JavaScript
export default class xElement {
    elementType: string = ''
    className: string = ''
    content: string = ''
    contentElement: string = ''
    parent: HTMLElement | null = null
    id: string = ''
    attr: string[][] | null = null

    constructor(obj: iElement) {
        this.elementType = obj.elementType
        this.className = obj.className
        this.content = obj.content
        this.contentElement = obj.contentElement
        this.parent = obj.parent
        this.id = obj.id

        this.attr = obj.attr
    }

    create(): HTMLAnchorElement |
        HTMLAppletElement
        | HTMLAreaElement
        | HTMLBRElement
        | HTMLBaseElement
        | HTMLBaseFontElement
        | HTMLBodyElement
        | HTMLButtonElement
        | HTMLCanvasElement
        | HTMLDListElement
        | HTMLDataElement
        | HTMLDataListElement
        | HTMLDetailsElement
        | HTMLDialogElement
        | HTMLDirectoryElement
        | HTMLDivElement
        | HTMLEmbedElement
        | HTMLFieldSetElement
        | HTMLFontElement
        | HTMLFormElement
        | HTMLFrameElement
        | HTMLFrameSetElement
        | HTMLHRElement
        | HTMLHeadElement
        | HTMLHeadingElement
        | HTMLHtmlElement
        | HTMLIFrameElement
        | HTMLImageElement
        | HTMLInputElement
        | HTMLLIElement
        | HTMLLabelElement
        | HTMLLegendElement
        | HTMLLinkElement
        | HTMLMapElement
        | HTMLMarqueeElement
        | HTMLMediaElement
        | HTMLMenuElement
        | HTMLMetaElement
        | HTMLMeterElement
        | HTMLModElement
        | HTMLOListElement
        | HTMLObjectElement
        | HTMLOptGroupElement
        | HTMLOptionElement
        | HTMLOutputElement
        | HTMLParagraphElement
        | HTMLParamElement
        | HTMLPictureElement
        | HTMLPreElement
        | HTMLProgressElement
        | HTMLQuoteElement
        | HTMLScriptElement
        | HTMLSelectElement
        | HTMLSlotElement
        | HTMLSourceElement
        | HTMLSpanElement
        | HTMLStyleElement
        | HTMLTableCaptionElement
        | HTMLTableCellElement
        | HTMLTableColElement
        | HTMLTableElement
        | HTMLTableRowElement
        | HTMLTableSectionElement
        | HTMLTemplateElement
        | HTMLTextAreaElement
        | HTMLTimeElement
        | HTMLTitleElement
        | HTMLTrackElement
        | HTMLUListElement
        | HTMLUnknownElement {
    const element = document.createElement(this.elementType)
    if (this.className) {
        element.className = this.className
    }

    if (this.id) {
        element.id = this.id
    }

    const text = document.createTextNode(this.content)
    let textEl = null
    const textChecked = text === null ? '' : text


    if (this.contentElement) {
        textEl = document.createElement(this.contentElement)
        textEl.appendChild(textChecked)
        element.appendChild(textEl)
    }

    if (this.attr && Array.isArray(this.attr) && this.attr.length > 0) {
        this.attr.forEach((item) => {
            const [key, value] = item
            const attr = document.createAttribute(key)
            if (value) {
                attr.value = value
            }
            element.setAttributeNode(attr)
        })
    }


    if (this.parent) {
        this.parent.appendChild(element)
    } else {
        console.error(`Element "${this.elementType}" with classname "${this.className}" and content "${this.content}" can't be created because it's missing a parent element.`)
    }

    return element
}
}