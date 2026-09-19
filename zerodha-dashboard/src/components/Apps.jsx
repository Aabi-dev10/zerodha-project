import React from "react";

const Apps = () => {
  const appCollection = [
    {
      name: "Sensibull",
      tagline: "Options trading platform",
      description:
        "Analyze options strategies, trade directly from charts, and get free real-time custom option chains.",
      logo: "📊",
      linkText: "Launch Sensibull",
    },
    {
      name: "Smallcase",
      tagline: "Thematic investment platform",
      description:
        "Invest in diversified portfolios of stocks or ETFs configured around ideas, themes, and strategies.",
      logo: "💼",
      linkText: "Launch Smallcase",
    },
    {
      name: "Streak",
      tagline: "Algo & systematic trading",
      description:
        "Create, backtest, and deploy trading algorithms live in the market without writing a single line of code.",
      logo: "⚡",
      linkText: "Launch Streak",
    },
    {
      name: "GoldenPi",
      tagline: "Bonds & debentures investment",
      description:
        "Discover and invest in high-yield corporate bonds and fixed-income options directly through your account.",
      logo: "🏛️",
      linkText: "Launch GoldenPi",
    },
    {
      name: "Tijori",
      tagline: "Fundamental research & analysis",
      description:
        "Deep dive into corporate operational metrics, sector benchmarks, and comprehensive stock supply trackers.",
      logo: "📈",
      linkText: "Launch Tijori",
    },
  ];

  return (
    <div className="apps-page-container p-4">
      {/* Dynamic Header Block */}
      <div className="border-bottom pb-3 mb-4 text-start">
        <h3 className="m-0 text-dark fw-normal fs-4">Ecosystem Products</h3>
        <p className="text-muted m-0 fs-6 mt-1">
          Explore third-party applications integrated seamlessly with your
          trading account.
        </p>
      </div>

      {/* Grid Layout Container */}
      <div className="row g-4 text-start">
        {appCollection.map((app, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={index}>
            <div
              className="card h-100 border rounded bg-white shadow-sm app-product-card"
              style={{ transition: "all 0.2s ease-in-out" }}
            >
              <div
                className="card-body p-4 d-flex flex-column justify-content-between"
                style={{ minHeight: "340px", boxSizing: "border-box" }}
              >
                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span
                      className="fs-2 bg-light p-2 rounded-circle border d-flex justify-content-center align-items-center"
                      style={{ width: "54px", height: "54px" }}
                    >
                      {app.logo}
                    </span>
                    <div>
                      <h5 className="card-title m-0 fw-semibold text-dark">
                        {app.name}
                      </h5>
                      <span
                        className="text-primary fw-medium"
                        style={{ fontSize: "13px" }}
                      >
                        {app.tagline}
                      </span>
                    </div>
                  </div>
                  <p className="card-text text-muted fs-6 lh-base mb-4">
                    {app.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="btn btn-primary mt-auto w-100 fw-medium text-white py-2 text-center"
                  style={{
                    backgroundColor: "#387ed1",
                    border: "none",
                    borderRadius: "4px",
                    textDecoration: "none",
                    height: "42px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {app.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
