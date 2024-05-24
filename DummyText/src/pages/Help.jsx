import "./help.css";
export default function Help() {
  return (
    <>
      <main id="mainspacer" className="scrollable" >
        <section className="help-section">
          <div >
          <div id="helph1">
            <h2 id="texth1">Help & Support</h2>
          </div>
            <p>
              Welcome to the Help page! Here you can find answers to common
              questions and get support for any issues you may encounter.
            </p>

            <h2>Frequently Asked Questions (FAQ)</h2>
            <div className="faq">
              <div className="faq-item">
                <h3>How do I create an account?</h3>
                <p>
                  To create an account, click on the "Sign Up" button on the top
                  right corner of the homepage and fill in the required
                  information.
                </p>
              </div>
              <div className="faq-item">
                <h3>How can I reset my password?</h3>
                <p>
                  If you forgot your password, click on "Forgot Password" on the
                  login page and follow the instructions to reset it.
                </p>
              </div>
              {/* Add more FAQ items as needed */}
            </div>

            <h2>Contact Support</h2>
            <p>
              If you need further assistance, please contact our support team:
            <ul>
              <h2>Email: 1mp22cs062.bgscet.ac.in</h2>
              <h2>Phone: 3278432937</h2>
            </ul>
            </p>
          </div>
        </section>
      </main> 
    </>
  );
}
