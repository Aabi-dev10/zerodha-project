import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb( 250, 250, 250)"}}>
    <div className="container border-top mt-5">
      <div className="row">
        <div className="col">
          <img src="/Media/images/logo.svg" style={{ width: "50%" }} />
          <p>&copy;2010-2026, Not Zerodha broking Ltd. All rights reserved. </p>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" className="text-muted">About</a>
          <br></br>
          <a href="" className="text-muted">Products</a>
          <br></br>
          <a href="" className="text-muted">Pricing</a>
          <br></br>
          <a href="" className="text-muted">Refreal Program</a>
          <br></br>
          <a href="" className="text-muted">Careers</a>
          <br></br>
          <a href="" className="text-muted">Zerodha.tech</a>
          <br></br>
          <a href="" className="text-muted">Press and Media</a>
          <br></br>
          <a href="" className="text-muted">Zerodha cares</a>
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="text-muted">Contact</a>
          <br></br>
          <a href="" className="text-muted">Support portal</a>
          <br></br>
          <a href="" className="text-muted">Z-connectblogs</a>
          <br></br>
          <a href="" className="text-muted">List of charges</a>
          <br></br>
          <a href="" className="text-muted">Download and resources</a>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="text-muted">Open an account</a>
          <br></br>
          <a href="" className="text-muted">Fund transfer</a>
          <br></br>
          <a href="" className="text-muted">60 Day challenge</a>
        </div>
      </div>
      <div className="mt-5 fs-6 text-muted">
        <p>
          Zerodha Broking Ltd. is a registered member of major Indian exchanges
          and depository systems, with regulatory registrations under SEBI. The
          footer provides the company's registered office address in Bengaluru
          and official channels for customer complaints and depository-related
          support.
        </p>
        <p>
          The footer reminds investors to read the Risk Disclosure Document
          (RDD) and other prescribed documents carefully before investing. It
          emphasizes that investments in the securities market are subject to
          market risks and that users should understand the associated risks
          before trading or investing.
        </p>
        <p>
          Additional investor-awareness notices warn users about unauthorized
          transactions, encourage updating contact information with brokers and
          depositories, and advise investors to verify holdings through official
          statements issued by depositories such as NSDL and CDSL.
        </p>

        <p>
          The footer further states that Zerodha does not provide stock tips,
          investment advisory services, or portfolio management recommendations.
          Educational content and tools offered through its platforms are
          intended for informational and educational purposes and should not be
          interpreted as investment advice.
        </p>

        <p>
          Copyright information, company ownership details, regulatory notices,
          and links to legal documents such as Terms of Service, Privacy Policy,
          disclosures, and investor charter resources are also included in the
          footer area.
        </p>
        <p>
          It also includes information about the SEBI SCORES grievance redressal
          mechanism, explaining that investors can register complaints through
          the SCORES platform using details such as PAN, address, mobile number,
          and email ID. The purpose is to facilitate effective communication and
          timely resolution of investor grievances.
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
