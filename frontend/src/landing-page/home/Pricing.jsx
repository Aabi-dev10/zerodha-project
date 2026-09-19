import React from 'react';

function Pricing () {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>We pioonered the concept of discount broking and price tranparency in pakistan.Flat fees no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-down fa-rotate-270"></i></a>
                </div>
                 <div className='col-2'></div>
                  <div className='col-6 mb-5'>
                    <div className='row text-center'>
                    <div className='col p-3 border'>
                        <h1 className='mb-3'>0<i class="fa-solid fa-indian-rupee-sign fa-2xs"></i></h1>
                        <p>Free euity delievery and<br></br> direct mutual funds</p>
                    </div>
                    <div className='col p-3 border'>
                        <h1 className='mb-3'>20<i class="fa-solid fa-indian-rupee-sign fa-2xs"></i></h1>
                        <p>Intrady and F&S</p>
                    </div>
                  </div>
                  </div>
                  
            </div>
        </div> 
       

     );
}

export default Pricing;