import { Build } from '@material-ui/icons'
import React, {useState} from 'react'
import './PWDIntro.css'
import basket from '../assets/basket.svg'
import platform from '../assets/platform.svg'
import reservoir from '../assets/reservoir.svg'
import fluid from '../assets/fluid.svg'
import arrow from '../assets/arrow-left.svg'


const PWDIntro = () => {
    const [basketOption, setBasketOption] = useState(true)

    return (
        <div className="pwdIntro">
            <div className="pwdIntro__header">
                <div className="pwdIntro__settings">
                    <Build style={{fontSize:'3.2rem'}} />
                </div>
                <div className="pwdIntro__washOptions">
                    <div className="pwdIntro__basketContainer"><img className="pwdIntro__basket" src={basket} />
                    <h3>Basket</h3>
                    </div>
                    <div className="pwdIntro__platformContainer"><img className="pwdIntro__platform" src={platform} />
                    <h3>Platform</h3>
                    </div>
                </div>
            </div>
            <div className="pwdIntro__body">
                <div className="pwdIntro__res1">
                <div className="pwdIntro__res1Text">
                    <p>Reservoir 1</p>
                    <h2>Okay</h2>
                </div>
                <div className="pwdIntro__res1Image"><img className="pwdIntro__reservoir" src={reservoir} />
                <img className="pwdIntro__fluid" src={fluid}></img>
                <img className="pwdIntro__arrow" src={arrow}></img>
                </div>
                </div>
                
                <div className="pwdIntro__res2">
                
                <div className="pwdIntro__res2Image"><img className="pwdIntro__reservoir" src={reservoir} />
                <img className="pwdIntro__fluid" src={fluid}></img>
                <img className="pwdIntro__arrow2" src={arrow}></img>
                </div>
                <div className="pwdIntro__res2Text">
                    <p>Reservoir 2</p>
                    <h2>Okay</h2>
                </div>
                </div>
                
            </div>
            <div className="pwdIntro__start">
                <h3>Start Wash/Dry (Multi-Cycle)</h3>
            </div>
        </div>
    )
}

export default PWDIntro
