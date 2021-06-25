import { Build } from '@material-ui/icons'
import React from 'react'
import './PWDIntro.css'

const PWDIntro = () => {
    return (
        <div className="pwdIntro">
            <div className="pwdIntro__header">
                <div className="pwdIntro__settings">
                    <Build />
                </div>
                <div className="pwdIntro__washOptions">
                    <div>basket svg</div>
                    <h3>Basket</h3>
                    <div>platform svg</div>
                    <h3>Platform</h3>
                </div>
            </div>
            <div className="pwdIntro__body">
                <div className="pwdIntro__res1Text">
                    <p>Reservoir 1</p>
                    <h2>Okay</h2>
                </div>
                <div className="pwdIntro__res1Image"></div>
                <div className="pwdIntro__res2Image"></div>
                <div className="pwdIntro__res2Text">
                    <p>Reservoir 2</p>
                    <h2>Okay</h2>
                </div>
            </div>
            <div className="pwdMain__start">
                <h3>Start Wash/Dry (Multi-Cycle)</h3>
            </div>
        </div>
    )
}

export default PWDIntro
