import React from 'react';

function Stats () {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h3 className='fs-4'>Customer first always</h3>
                    <p className='text-muted'>That's why 13+ corore customers trust Zerodha with  3.5+lakhs worth of equity investments.</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks spam."Gammification" ,or annoying push notifications.High quality apps that you used at your place,the way you like.</p>
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app  but a whole ecosystem.Our investments in 30+lakhs startups offered you tailored services specific your needs.</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge kill Switch,we dont just faciliate transactions,but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='Media\images\ecosystem.png' style={{width:"100%"}}/>
                    <div>
                        <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore the Products <i class="fa-solid fa-arrow-down fa-rotate-270"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kite <i class="fa-solid fa-arrow-down fa-rotate-270"></i></a>
                    </div>
                </div>
            </div>
        </div>

     );
}

export default Stats;