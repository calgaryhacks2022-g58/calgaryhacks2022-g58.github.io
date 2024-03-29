import React from "react";

function Content() {
  return (
    <div>
      <div className="container content">
        <div className="row">
          <div className="col-sm-3 talk">
            <h1>Get Health Help Now</h1>
            <br />
            <h6 className="bold-four">
              Get in contact with a doctor that understands your needs today.
            </h6>
            <br />
            <h6>
              <a type="button" className="btn btn-dark start start-two" href="/questionnairegrid">
                Get Started
              </a>
            </h6>
          </div>
          <div className="col-sm-9 showcase-img">{/* <div className="circle"></div> */}</div>
        </div>
      </div>

      <section className="features-icons bg-light text-center det-ails">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-screen-desktop m-auto text-primary icon-ails" />
                </div>
                <h5>Online</h5>
                <p className="lead mb-0">Access medical care from the comfort of your own home.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-layers m-auto text-primary icon-ails" />
                </div>
                <h5>Documented</h5>
                <p className="lead mb-0">Keep track of your records and prescribed treatments</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-check m-auto text-primary icon-ails" />
                </div>
                <h5>Secure</h5>
                <p className="lead mb-0">Health Fluency securely stores all data encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
