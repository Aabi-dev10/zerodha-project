import React from 'react';

function Universe() {
    return (  
         <div className="container">
    <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

         <div className="col-4 p-3 mt-5">
            <img src="Media/images/smallcaseLogo.png"/>
            <p className='text-small text-muted'>Thematic investment platform</p>
        </div>
             <div className="col-4 p-3 mt-5">
             <img src="Media/images/streakLogo.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>strategy creation and backtesting</p>
        </div>
             <div className="col-4 p-3 mt-5">
           <img src="Media/images/sensibullLogo.svg"/>
            <p className='text-small text-muted'>options analysis and strategies</p>
        </div>
          <div className="col-4 p-3 mt-5">
            <img src="Media/images/zerodhaFundhouse.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Direct Mutual Funds</p>
        </div>
             <div className="col-4 p-3 mt-5">
             <img src="Media/images/goldenpiLogo.png"/>
            <p className='text-small text-muted'>Stocks</p>
        </div>
             <div className="col-4 p-3 mt-5">
           <img src="Media/images/dittoLogo.png" style={{width:"50%"}}/>
            <p className='text-small text-muted'>Government Securities</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
    </div>
  </div>
    );

}

export default Universe;