import React from "react";

const Terms = (props) => {
  return (
    <section className="terms">
      <hr />
      <h2>Terms and Conditions</h2>
      <h3>Budget Validity</h3>
      <p>
        The following budget is valid for <strong>15 days</strong>, starting
        on the date it was sent, <strong>{props.details.date}</strong>.
        After that date, the availability of the assigned resources should be
        verified and, if necessary, an adjustment in costs or deadlines should
        be made.
      </p>
      <h3>Payment Conditions</h3>
      <p>An invoice will be issued as proof of the work done.</p>
      <h3>Time Estimations and Deadlines</h3>
      <p>
        The time estimation for the finished project delivery will start from
        the budget's approval date, and not before. Any delay on the client's
        side, either in the delivery of content or assets for the layout,
        feedback during testing stages, in the final approval, or any other
        action that might result in a block for the resources assigned, will
        affect the final delivery date of the product.
      </p>
      <h3>Project's Scope and Feedback Limit</h3>
      <p>
        This quote includes the tasks and phases listed above, and any task or
        phase that was not explicitly stated there must be quoted separately.
        On the same line, the tasks above consider 2 (two) feedback and review
        stages from the client. If more review stages are necessary, they must
        be quoted separately. This quote includes bug fixing but is not
        responsible for errors that may arise from hardware, apps or
        third-party services that might be used during the Go-Live stage.
      </p>
      <h3>Hardware and third-party apps</h3>
      <p>
        The hardware, servers, domains, and third-party apps, themes or
        plugins necessary for the correct functioning of the app in a
        production environment will be provided by the client.
      </p>
      <h3>Files Delivery</h3>
      <p>
        The files will be provided in a layered format. In order of
        preference: Figma, Sketch, Adobe XD, Illustrator, Photoshop. Delivery
        of raster files, like JPG, PNG, etc., will result in the need to
        recreate the original files, which will be quoted separately.
      </p>
      <img
        src="/images/jmg-signature.png"
        alt="Juan Martín García - Signature"
      />
      <h4>Juan Mart&iacute;n Garc&iacute;a</h4>
      <h5>
        Monta&ntilde;eses 2678 3c,
        <br />
        1428, belgrano caba
      </h5>
      <h5>+54 9 11 3287 0377</h5>
      <a href="mailto:hello@juangarcia.com.ar">hello@juangarcia.com.ar</a>
      <a
        href="https://www.juangarcia.design"
        target="_blank"
        rel="noopener noreferrer"
      >
        juangarcia.design
      </a>
    </section>
  );
}

export default Terms;
