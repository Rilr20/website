import React from 'react'

export default function Header() {
    return (
        <header class="header">
            <div className='parent'>
                <div className='grid-div div1'></div>
                <div className='grid-div div2'>
                    <h1 className="title title-top">RI</h1>
                    <h1 className="title title-bottom">LR</h1>
                </div>
                <div className='grid-div div3'></div>
                <div className='grid-div div4'></div>
                <div className='grid-div div5'></div>
                <div className='grid-div div6'>
                    <ul class="menu">
                        <li><a href="#about">Me</a></li>
                    </ul>
                </div>
                <div className='grid-div div7'>
                    <ul class="menu">
                        <li><a href="#something">About</a></li>
                    </ul>
                </div>
                <div className='grid-div div8'>            
                <ul class="menu">
                    <li><a href="#else">Något</a></li>
                </ul>
                </div>
                <div className='grid-div div9'></div>
            </div>
            <div>
            </div>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <h1 style={{marginLeft:"1em"}} className="burger-menu title title-top">RI</h1>
            <h1 style={{ marginLeft: "1em" }} className="burger-menu title title-bottom">LR</h1>
            <ul class="burger-menu menu">
                <li><a href="#home">Me</a></li>
            </ul>
            <ul class="burger-menu menu">
                <li><a href="#about">About</a></li>
            </ul>
            <ul class="burger-menu menu">
                <li><a href="#something">Något</a></li>
            </ul>
            {/* <ul class="burger-menu menu">
                <li><a href="#else">Else</a></li>
            </ul> */}
        </header>
    )
}
