import React from 'react';

function Brokerage() {
    return ( 
           <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
           <a href='#' style={{textDecoration:"none"}}><h5>Brokerage calculator</h5></a>
           <ul style={{textAlign:"left", lineHeight:"2.1" }} className='text-muted mt-5'>
             <li>Call & Trade: ₹50 + GST per order</li>
             <li>RMS auto square-off: ₹50 + GST per order</li>
             <li>Physical contract note: ₹20 per note + courier charges</li>
             <li>Digital contract note: Free</li>
             <li>Taxes and statutory charges: Calculated automatically</li>
             <li>DP charge: Applicable on the sell transaction</li>
                <li> SEBI Turnover Fees</li>
               <li> GST (on brokerage and applicable transaction charges)</li>
               <li> Stamp Duty (buy side)</li>
               <li> DP Charges (on delivery sell transactions)</li>
           </ul>
             </div>
        <div className="col-4 p-4">
               <a href='#' style={{textDecoration:"none"}}><h5>List of charges</h5></a>
        </div>
      </div>
    </div>
     );
}

export default Brokerage;