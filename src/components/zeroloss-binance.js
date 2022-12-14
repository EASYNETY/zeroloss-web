import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ZerolossBinance = () => {
  function importAll(r) {
    r.keys().forEach(r);
  }

  const images = importAll(require.context("./", true, /\.js$/));

  return (
    <>
      <section
        className="space--bottom pt-4 hidden"
        id="adoption"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto text-center reveal">
              <p
                className="mb-1 pb-2 px-lg-6"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                Buy, Sell and Exchange ZLT
              </p>

              <div className="icon-fill--wide text-center d-lg-flex justify-content-lg-center flex-wrap reveal">
                <a
                  className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary"
                  href="https://dodoex.io/"
                  target="_blank"
                  style={{ border: "4px solid white" }}
                  rel="noreferrer"
                >
                  <img
                    src={"images/dodo-logo.png"}
                    alt="partner"
                    width={"70px"}
                    height={"40px"}
                  />
                  <span
                    className="t-icon__brand-name h5-font font-w--500 text-color--700"
                    style={{ color: "white" }}
                  >
                    Dodoex
                  </span>
                </a>

                <a
                  className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary"
                  href="https://www.dextools.io/app/bnb/pair-explorer/0xcdee9978ac7549c755b58849ed7e1648efac6ca7"
                  target="_blank"
                  style={{ backgroundColor: "gold" }}
                  rel="noreferrer"
                >
                  <img
                    src={"images/devtools.png"}
                    alt="partner"
                    width={"70px"}
                    height={"40px"}
                  />
                  <span
                    className="t-icon__brand-name h5-font font-w--500"
                    style={{ color: "black" }}
                  >
                    DexTools
                  </span>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            {/* <a
              href="0x05d8762946fa7620b263e1e77003927addf5f7e6"
              className="mb-1 pb-2 px-lg-6"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
            >
              CONTRACT ADDRESS
            </a> */}
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto text-center reveal">
                <p
                  className="mb-1 pb-2 px-lg-6"
                  style={{
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "20px",
                  }}
                >
                  Earn with Zeroloss, Stake ZLT{" "}
                </p>
                <div className="icon-fill--wide text-center d-lg-flex justify-content-lg-center flex-wrap reveal">
                  <a
                    className="t-icon box-shadow--5 rounded--05 m-1 btn-hover--primary"
                    href="https://scamsniper.net/"
                    target="_blank"
                    style={{ backgroundColor: "gold" }}
                    rel="noreferrer"
                  >
                    <img src={"images/scamsniper.png"} alt="" width={"50px"} />
                    <span
                      className="t-icon__brand-name h5-font font-w--500"
                      style={{ color: "black" }}
                    >
                      ScamSniper
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space bg-white hidden" id="developer">
        <div className="container position-relative z-index2">
          <div className="row">
            <div className="col-12 col-lg-6 mb-3 mx-auto text-center reveal">
              <div className="section-title">
                <h2 className="mb-3 font-size--40 font-w--700">
                  Officially Supported Wallets
                </h2>
                <p className="text-color--100">
                  Wallets for BEP20 and ERC20 Tokens
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <div className="border--bottom pb-1 reveal">
                <span className="m-2 m-lg-4">
                  <a
                    href="https://www.trustwallet.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={"images/trustwallet.png"}
                      height="50"
                      alt="logo"
                    />
                  </a>
                </span>
                <span className="m-2 m-lg-4">
                  <a
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={"images/metamask.png"} height="50" alt="logo" />
                  </a>
                </span>

                <span className="m-2 m-lg-4">
                  <a
                    href="https://www.ledger.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={"images/ledger.png"} height="50" alt="logo" />
                  </a>
                </span>
              </div>
              <button
                href="faq.html"
                className="mt-3 btn"
                style={{
                  backgroundColor: "gold",
                  height: "70px",
                }}
              >
                <a href="https://bscscan.com/token/0x05d8762946fa7620b263e1e77003927addf5f7e6">
                  <span className="btn__text d-flex justify-content-between">
                    TOKEN EXPLORER
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                    <i class="fas fa-arrow-right"></i>
                    {/* <i className="icon icon-arrow-right font-size--20"></i> */}
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-1" style={{ backgroundColor: "black" }}>
        <div className="background-holder background--top--left">
          <img
            src={"images/layout/oval.png"}
            alt="wave"
            className="background-image-holder svg w-100"
          />
        </div>

        <div className="svg-shape w-100 jsElement" data-push="250">
          <img
            src={"images/layout/wave-13.svg"}
            alt="wave"
            className="svg w-100"
          />
        </div>

        <div
          className="section-overlap bg-color--primary-light--1 d-lg-none d-xl-block pos-abs-bottom jsElement"
          data-height="170"
        ></div>

        <div className="container">
          <div className="row text-center text-md-left justify-content-between align-items-lg-center align-items-xl-end mb-6">
            <div className="col-12 col-sm-10 col-md-7 mb-5 mb-md-0 mx-auto mx-md-0 reveal">
              <h2
                className="mb-2 h3-font font-w--700"
                style={{ color: "white" }}
              >
                AS SEEN ON TOP INDUSTRY BRANDS
              </h2>
              <p className="opacity--80">
                <b />
                Zeroloss partners with worlds leading companys
              </p>
            </div>

            <div className="col-12 col-sm-8 col-md-5 col-xl-4 d-inline-flex d-lg-block align-items-center justify-content-center mx-auto mx-md-0"></div>

            <div className="row justify-content-between align-items-lg-start">
              <div className="col-12 col-lg-7 col-xl-7 d-flex flex-wrap flex-column flex-sm-row align-items-center justify-content-center align-items-lg-start justify-content-lg-start justify-content-xl-between mb-4 mb-lg-0 reveal">
                <div className="border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a
                      href="https://exchange.pancakeswap.finance"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={"images/pancake.png"} alt="partner" />
                    </a>
                  </span>
                </div>

                <div className="border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-sm-1 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a
                      href="https://dodoex.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={"images/dodo-logo.png"} alt="partner" />
                    </a>
                  </span>
                </div>

                <div className=" border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a
                      href="https://unicrypt.network/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={"images/unicript.png"} alt="partner" />
                    </a>
                  </span>
                </div>

                {/* <div className="border--none bg-color--transparent card-hover--bg--alt-shadow mb-1 mx-sm-2 mx-xl-0 mb-md-4 p-3 jsElementFocus">
                  <span>
                    <a
                      href="https://home.babyswap.finance/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={"images/babyswaps.png"} alt="partner" />
                    </a>
                  </span>
                </div> */}
              </div>

              <div className="col-12 col-md-10 col-lg-5 col-xl-4 mx-auto mx-lg-0 pb-10">
                <div className="testimonials testimonals--v2 position-relative pb-7">
                  <div className="card box-shadow--5 p-3 mb-10">
                    <p className="text-center mb-1 text-dark">
                      and more exchanges
                    </p>
                    <button
                      href="https://www.dextools.io/app/bnb/pair-explorer/0xcdee9978ac7549c755b58849ed7e1648efac6ca7"
                      className="btn btn-size--sm btn-border btn-hover--splash color--green"
                    >
                      <span className="btn__text font-w--700">Buy ZLT</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZerolossBinance;
