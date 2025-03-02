 

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <p> We are Here with a Hope for " <b>Threat and Theft Free World</b> "</p>
                {/* <h6><a href="#"></a></h6> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p className="copy-left-text">Secure Sight 2.0<a target="_blank" href="https://themeforest.net/user/theme_ocean/portfolio">®</a></p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <p className="copy-right-text"> All Rights Reserved © Copyright {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
