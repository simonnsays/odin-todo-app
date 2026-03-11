const el = (type, options = {}) => {
    const element = document.createElement(type)
    
    if(options.class) element.className = options.class
    if(options.text) element.textContent = options.text
    if(options.src) element.src = options.src
    if(options.onClick){
        element.addEventListener('click', options.onClick())
    }

    return element
}

export default el