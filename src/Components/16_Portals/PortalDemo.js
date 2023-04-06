import React from 'react'
import ReactDOM from 'react-dom'


const PortalDemo = () => {
    // ReactDOM.createPortal takes two parameter
    return ReactDOM.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById('portal-root')
    )
};

export default PortalDemo;
