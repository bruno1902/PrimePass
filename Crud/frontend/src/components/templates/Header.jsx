import './Header.css'
import React from 'react'

export default props =>
    <aside className="header d-none d-sn-flex-column">
        <h1 className="mt-3">{props.title}
        </h1>
    </aside>