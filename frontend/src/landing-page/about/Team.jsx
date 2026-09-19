import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-1 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="/Media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin Kamath is the founder and CEO of Zerodha, a discount
            brokerage firm established in 2010. He co-founded Zerodha with his
            significantly reducing brokerage costs for investors.
          </p>
          <p>
            Zerodha has grown to become one of the largest stockbrokers in
            India, with over 7 million clients and a focus on technology and
            education for traders.</p>
            <p>
              Nithin Kamath is also involved in various initiatives, including
              the Rainmatter fund, which invests in fintech startups.
            </p>
            <p>Playing basketball is his Zen</p>
            <p style={{textDecoration:"none"}}>Connect on <a href=""> HomePage/</a><a href=""> TradingQnA/</a><a href=""> Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
