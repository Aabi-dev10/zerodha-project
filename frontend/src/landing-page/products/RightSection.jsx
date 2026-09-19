import React from 'react';

function RightSection({ imageUrl,
  productsName,
  productsDescription,
  learnMore}) {
    return (  
         <div className="container">
    <div className="row">
        <div className="col-6 p-2 mt-5">
            <h1>{productsName}</h1>
             <p>{productsDescription}</p>
             <div>
              <a href={learnMore}>Learn more<i class="fa-solid fa-arrow-right-long"></i></a>
             </div>
        </div>
         <div className="col-5 p-5">
            <img src={imageUrl} style={{width:"150%"}}/>
        </div>
    </div>
  </div>
    );

}

export default RightSection;