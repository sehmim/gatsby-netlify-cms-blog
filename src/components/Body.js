import React from 'react'

function Body() {
    return (
        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column"}}>

            <div style={{width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

                <div style={{ boxShadow: "2.5px 5px", height: "460px", width: "60%", border: "1px solid black", margin: "2.5px"}}>SOMETHING HERE</div>

                <div style={{  width: window.innerWidth /5, margin: "5px"}}>
                    <div style={{border: "1px solid black", boxShadow: "2.5px 5px", height: "200px",margin: "0px 0px 15px 15px"}}>
                        Contact me
                    </div>
                    <div style={{border: "1px solid black", boxShadow: "2.5px 5px", height: "250px",margin: "0px 0px 15px 15px"}}>
                        Advertise
                    </div>
                </div>
                
            </div>
            
            <div style={{width: "100%", display: "flex", flexDirection: "row", margin: "5px 0px"}}>
                <div style={{ boxShadow: "2.5px 5px", height: "460px", width: "100%", border: "1px solid black", margin: "2.5px"}}>SOMETHING HERE</div>
            </div>
            
            <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
                <div style={{ boxShadow: "2.5px 5px", height: "460px", width: "100%", border: "1px solid black", margin: "5.5px"}}>SOMETHING HERE</div>
                <div style={{ boxShadow: "2.5px 5px", height: "460px", width: "100%", border: "1px solid black", margin: "5.5px"}}>SOMETHING HERE</div>
                <div style={{ boxShadow: "2.5px 5px", height: "460px", width: "100%", border: "1px solid black", margin: "5.5px"}}>SOMETHING HERE</div>
            </div>
        </div>
    )
}

export default Body
