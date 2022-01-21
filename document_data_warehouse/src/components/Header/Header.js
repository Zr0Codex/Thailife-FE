import React from "react";
import { ReactComponent as ThailifeIcons } from '../../assets/icons/thailife_logo.svg'

function Header() {

    const navbarStyles = {
        position: 'fixed',
        height: '125px',
        width: '100%',
        backgroundColor: '#007BC1',
        textAlign: 'center'
    }
    const headerWording = {
        fontFamily: 'Fira Sans',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: '100',
        lineHeight: '56px',
        letterSpacing: '0em',
        textAlign: 'left',
        marginLeft: '140px',
        color: '#FFFFFF',
        marginLeft: '148px',
    }

    const icon = {
        textAlign: 'left',
        position: 'absolute',
        width: '100px',
        height: '100px',
        marginLeft: '15px',
    }

    return(
        <div style={{ ...navbarStyles }}>
            <div style={{...icon}}>
                <ThailifeIcons />
                
            </div>
            <h1 style={{...headerWording}}> ระบบคลังเอกสารสินไหม </h1>
            {/* <div style={{...icon}}><ThailifeIcons/></div> */}
            {/* <h1 style={{...headerWording}}> ระบบคลังเอกสารสินไหม </h1> */}
        </div>
        
    )
}

export default Header;