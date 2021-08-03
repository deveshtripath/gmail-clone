import React from 'react'
import "./SidebarOption.css"


function SidebarOption({Icon,number,title,selected}) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon/>
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
