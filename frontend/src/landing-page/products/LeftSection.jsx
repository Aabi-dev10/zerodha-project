import React from "react";

function LeftSection({
  imageUrl,
  productsName,
  productsDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
  <div className="container">
    <div className="row p-7">
        <div className="col-5 p-6">
            <img src={imageUrl}/>
        </div>
         <div className="col-1"></div>
        <div className="col-6 p-5 mt-5">
            <h1>{productsName}</h1>
             <p>{productsDescription}</p>
             <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa-solid fa-arrow-right-long"></i></a>
              <a href={learnMore} style={{marginLeft:"70px" ,textDecoration:"none"}}>Learn more<i class="fa-solid fa-arrow-right-long"></i></a>
             </div>
             <div className="mt-3">
                 <a href={googlePlay}><img src="/Media/images/googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src="/Media/images/appstoreBadge.svg"/></a>
             </div>
        </div>
    </div>
  </div>
  );
}

export default LeftSection;
