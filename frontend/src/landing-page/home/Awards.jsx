import React from 'react';

function Awards () {
    return ( 
           <div className='container mt-5'>
            <div className='row'> 
                <div className='col-6 p-5'>
                    <img src='/Media/images/largestBroker.svg'/>
                </div>
                 <div className='col-6 p-5 mt-2'>
                    <h1>Largest stock broker in Pakistan</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in Pakistan daily by trading and investing in:</p>
                    <div className='row'> 
                <div className='col-6'>
                     <ul>
                        <li><p>Features and options</p></li>
                        <li><p>commodity derivatives</p></li>
                        <li><p>currency derivatives</p></li>
                    </ul>
                </div>
                 <div className='col-6'>
                     <ul>
                        <li><p>Stock and ipos</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and gov. securities</p></li>
                    </ul>
                </div>
                </div>
                <img src='\Media\images\pressLogos.png' style={{width:'90%'}}/>
                 </div>
            </div>
        </div>

     );
}

export default Awards;