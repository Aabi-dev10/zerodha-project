import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India.<br></br>Now, we are
          breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-3 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 p-5">
          <p>
            Founded in 2010 by brothers Nithin Kamath (CEO) and Nikhil Kamath
            (CFO), Zerodha is headquartered in Bengaluru, India. The name
            "Zerodha" combines "Zero" and the Sanskrit word "Rodha," meaning
            barrier, reflecting the company’s mission to remove obstacles in
            trading and investing Zerodha Zerodha +2.
          </p>
          <p>
            It pioneered the discount broking model in India, charging zero
            brokerage for equity delivery trades and a flat fee of ₹20 per order
            for intraday and F&O trades
          </p>
          <p>
            Zerodha has demonstrated strong financial performance, with revenues
            and profits growing consistently. For example, in FY 2022, it
            reported ₹4,963 crore in revenue and ₹2,094 crore in profit,
            reflecting its high-volume, low-margin business mode
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Zerodha has grown rapidly, serving over 12 million users and
            handling billions of orders annually, contributing significantly to
            Indian retail trading volumes nextwhatbusiness.com
            nextwhatbusiness.com .
          </p>
          <p>
            <a href="">Rainmatter</a> is an initiative by Zerodha that invests
            in and supports Indian startups in fintech, health, climate, and
            media, focusing on long-term impact rather than quick financial
            returns.
          </p>
          <p>
            It became the largest retail stockbroker in India by active client
            base, overtaking traditional brokers like ICICI Securities Wikipedia
            Wikipedia +1 .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
