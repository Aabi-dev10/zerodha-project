import React from 'react';

function Education () {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/images/education.svg' style={{width:"75%"}}/>
                  </div>
                    <div className='col-6'>
                         <h1 className='mb-3 fs-2'>Free and open market</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-down fa-rotate-270"></i></a>
                    <p className='mt-5'>Trading Q&A the most active trading and investment community in india for all your market related quiries.</p>
                    <a href='' style={{textDecoration:"none"}}>Trading Q&A <i class="fa-solid fa-arrow-down fa-rotate-270"></i></a>
                    </div>
                  
            </div>
        </div> 

     );
}

export default Education;