import poundIcon from '../asset/pound.svg'
import delIcon from '../asset/delete-outline.svg'
import { el } from '../scripts/utils.js'

const createProjectButton = (project, { onClick, onDelete, onChange }) => {
    const button = el('button', {
        id: project.id,
        class: 'project', 
    })
    
    const icon = el('div', {class: 'icon'})
    const img = el('img', {src: poundIcon})
    icon.appendChild(img)
    
    const text = el('p', {text: project.name})
    
    const delBtn = el('button', {class: 'del-btn'})
    const dIcon = el('img', {src: delIcon})
    delBtn.appendChild(dIcon)
    
    button.append(icon, text, delBtn)
    button.addEventListener('click', (e) => {
        if(e.target.closest('.del-btn')) {
            onDelete(project.id)
            onChange()
            return
        }

        onClick()
    })
    
    return button
}

export default createProjectButton