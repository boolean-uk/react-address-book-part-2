import React, { useState } from "react";

interface MenuProps {
    currentView: number
    setCurrentView: (id: number) => void 
}

const Menu = ({ currentView, setCurrentView }: MenuProps) => {

    const menuList = [
        { id: 1, text: "Show Contacts" },
        { id: 2, text: "Add New Contact" }
    ] 

    return (
        <aside className="sidebar-contacts">
            <ul className="sidebar-list">
                { menuList.map((item) => (
                    <li 
                        key={item.id} 
                        className={`sidebar-list-item ${currentView === item.id ? 'active':''}`}
                        onClick={() => setCurrentView(item.id)}
                    >
                        { item.text }
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Menu;