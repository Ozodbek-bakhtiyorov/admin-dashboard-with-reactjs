import React from 'react'
import { Wrapper } from './MenuConteiner.styles'

const menus = [
    'Web Design', 
    'UI/UX Design',
    "Form design",
    "UI Design (mobile)"
]

function MenuContainer() {
  return (
    <Wrapper id="menuContainer">
        <ul>
            {
                menus.map((menu, index) => {
                    return <li key={index}>{menu}</li>
                }   )
            }
        </ul>
    </Wrapper>
  )
}

export default MenuContainer