import poundIcon from '../asset/pound.svg'
import el from '../scripts/utils.js'

const createProjectButton = (project, clickEvent) => {
    if(clickEvent)console.log(clickEvent)
    const button = el('button', {
        class: 'project', 
        onClick: () => clickEvent
    })
    
    const icon = el('div', {class: 'icon'})
    const img = el('img', {src: poundIcon})
    icon.appendChild(img)
    
    const text = el('p', {text: project.name})
    
    button.append(icon, text)
    
    return button
}

export default createProjectButton