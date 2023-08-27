import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUtensils, faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons'

function UnderNavbar() {
    const [myStyle1, setMyStyle1] = useState({
        color: '#ef4f5f',
        backgroundColor: '#fceec0',
    })
    const [myStyle2, setMyStyle2] = useState({
        color: 'grey',
        backgroundColor: '#f8f8f8'
    })
    const [myStyle3, setMyStyle3] = useState({
        color: 'grey',
        backgroundColor: '#f8f8f8'
    })

    const [setBorder1, setBorderColor1] = useState({
        borderBottom:'2px solid red'
    })
    const [setBorder2, setBorderColor2] = useState({
        borderBottom:'none'
    })
    const [setBorder3, setBorderColor3] = useState({
        borderBottom:'none'
    })


    const faTruckClick = ()=>{
        setMyStyle1({
        color: 'black',
        backgroundColor: 'FF9F67'
        })
        setBorderColor1({
            borderBottom:'2px solid red',
        })
    } 

    const diningOut = ()=>{
        setMyStyle2({
        color: 'black',
        backgroundColor: 'lightgreen'
        })
        setBorderColor2({
            borderBottom:'2px solid red',
        })
    }

    const nightLife = ()=>{
        setMyStyle3({
        color: 'black',
        backgroundColor: 'pink'
        })
        setBorderColor3({
            borderBottom:'2px solid red',
        })
    }
    return (
        <>
            <div className="underNavbar d-flex m-4">
                <div className="navBtn m-2 d-flex" onClick={faTruckClick} style={setBorder1}>
                    <div className="navIcon">
                        <FontAwesomeIcon icon={faTruck} className="icon" style={myStyle1} />
                    </div>
                    <div className="navItem">
                        <a href="#" style={{color:"#ef4f5f"}}>Delivery</a>
                    </div>

                </div>
                <div className="navBtn m-2 d-flex" onClick={diningOut} style={setBorder2}>
                <div className="navIcon">
                        <FontAwesomeIcon icon={faUtensils} className="icon" style={myStyle2} />
                    </div>
                    <div className="navItem">
                        <a href="#">Dining Out</a>
                    </div>
                </div>
                <div className="navBtn m-2 d-flex" onClick={nightLife} style={setBorder3}>
                <div className="navIcon">
                        <FontAwesomeIcon icon={faPrescriptionBottle} className="icon" style={myStyle3}/>
                    </div>
                    <div className="navItem">
                        <a href="#">Nightlife</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnderNavbar