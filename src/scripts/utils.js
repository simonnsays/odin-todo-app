export const el = (type, options = {}) => {
    const element = document.createElement(type)
    
    if(options.id) element.id = options.id
    if(options.class) element.className = options.class
    if(options.text) element.textContent = options.text
    if(options.src) element.src = options.src
    if(options.value) element.value = options.value
    if(options.onClick){
        element.addEventListener('click', options.onClick)
    }

    return element
}

export const select = (name) => {
    return document.querySelector(name)
}
