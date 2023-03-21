import React, { useState } from 'react';
import Link from 'next/link';

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(true);

    const handleClick = () => {
        setShowSidebar(!showSidebar)
    }


    return (
        <div className='sidebar-open'>
            <ul>
                <Link href='/Endwalker'><li>EW</li></Link>
                <Link href='/Shadowbringers'><li>ShB</li></Link>
                <li>SB</li>
                <li>HW</li>
                <li>ARR</li>
            </ul>
        </div>
    )
}

export default Sidebar;