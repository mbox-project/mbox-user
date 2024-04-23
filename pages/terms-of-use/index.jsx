import React from "react";
import Navbar from "../../components/PagesLayout/Navbar";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";

const TermsOfUse = () => {
  return (
    <div className="">
      <Navbar />
      <section className=" w-full h-64 text-white aboutherobg flex flex-col justify-center items-center text-center">
        <h1 className="flex justify-center text-xl md:text-4xl lg:text-6xl poppins font-extrabold ">
          Terms Of Use
          {/* The Use Terms and Conditions */}
        </h1>
        <p className="flex justify-center pt-2  text-grayColor poppins text-base tracking-wide md:pt-4">
          This outlines the rules and guidelines governing your use of our
          website, ensuring a secure and enjoyable experience for all users.
        </p>
      </section>

      <section className="max-w-screen-xl px-4 py-10 md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <p className="">
            Marketbox.ng and you are bound by these terms as a legal contract.
            Our Privacy Policy is fully incorporated into these Terms, detailing
            data collection and usage on our Platform and through Services
            provided to you under this Agreement. By accessing or using
            Marketbox Platform or Services, you acknowledge reading,
            understanding, agreeing with both the Policies of Legal Requirements
            that must be followed; failure to comply leads prohibited use of
            Service(s).
          </p>

          <p className="">
            We may modify or update the Terms at any time without prior notice,
            as we deem appropriate. Upon making changes to these Terms, a
            notification will be posted on the Platform and/or sent to you
            through your account or email address. By agreeing to receive
            electronic communications and acknowledge postings of revised
            versions of the terms on/offline channels via our platform, you also
            accept that such electronic communication/postings serve as an
            official announcement for updates in these Terms. The updated
            version(s) shall come into force immediately upon
            publication/communication thereof.
          </p>

          <ol className="list-inside list-decimal pt-3 space-y-4">
            <li className="font-semibold">Qualification based on age</li>
            <p className="">
              Individuals aged 18 and above are the target audience for our
              website and services. We do not knowingly interact with
              individuals below this age bracket. By accessing the Platform, you
              confirm that you have reviewed these Terms, fulfill requirements
              to use the Platform and Services, will adhere to these Terms, as
              well as follow all relevant regulations associated with your usage
              of the Platform or Services.
            </p>
            <li className="font-semibold">Account Protection</li>
            <p className="">
              When you access or use the Platform, it is your responsibility to
              protect and safeguard your account login credentials. It's
              important for you to ensure that only authorized individuals have
              access to these details, as any actions taken under or by people
              using them will be attributed back to you and considered your
              responsibility.
            </p>
            <li className="font-semibold">Limitations on liability</li>
            <p className="">
              We will not be held responsible for any losses or costs caused by
              abnormal or unforeseeable events outside of our control that would
              have been unavoidable even if we had taken all necessary steps to
              prevent them in payments that involve us. Additionally, we cannot
              be held accountable for any losses or costs incurred due to
              legal/regulatory obligations applied to us preventing us from
              meeting our duties and providing services as required.
            </p>
            <li className="font-semibold">Refunds for Cancelled Deals</li>
            <p className="">
              A deal can only be cancelled by the vendor and the locked funds of
              the buyer will be returned via the original payment method used.
              Please note that escrow fees are non-refundable.
            </p>
            <li className="font-semibold">Indemnification</li>
            <p className="">
              It is agreed that you shall defend, indemnify and hold marketbox,
              its affiliates, officers, directors, employees and agents free
              from any claims or liabilities including but not limited to
              attorney’s fees arising out of damages incurred by you.
            </p>
          </ol>

          <br />

          <p className="">
            <span className="block font-semibold pb-2">
              Could you explain the concept of Escrow?
            </span>
            An escrow is a legal agreement between multiple parties that
            establishes the specific terms and conditions for holding an asset
            with a third party until particular requirements are fulfilled.
          </p>

          <br />

          <p className="">
            <span className="block font-semibold pb-2">
              Release Deal Requirements
            </span>
            Marketbox will disburse the locked Deposit to the Seller once
            specific requirements are fulfilled, essentially, once all release
            conditions are met, we will deposit the invoice deposit to the
            seller or vendor/merchant.
          </p>

          <p>
            Criterion for the release of payments (invoice) are listed below:
          </p>
          <ol className="list-inside list-[upper-alpha] space-y-4">
            <li className="">
              the buyer has received the items listed on an invoice created by a
              vendor and is fully satisfied with their condition. As a result,
              the buyer clicks on our platform's buttons to authorize payment
              release to the seller. This action cannot be undone once
              completed.
            </li>
            <li className="">
              the Vendor on our platform created an invoice for the items
              ordered and paid by Buyer, which particular order the
              vendor/merchant/seller has full filled.
            </li>
            <li className="">
              by paying an invoice, a buyer already accepted the value and items
              on the invoice and it will be treated a correct version of order
              manifest.
            </li>
            <li className="">
              We advise that before vendor cancels a deal (seller), it is the
              responsibility of the seller to ensure the retrieval of items from
              the buyer.
            </li>
          </ol>

          <br />

          <p className="">
            <span className="block font-semibold pb-2">Product Uploads</span>
            You will not publish any Platform announcements that contain:
          </p>

          <ol className="list-inside list-[lower-alpha] space-y-4">
            <li className="">
              False, misleading or deceitful statements or personal or
              identifying information on minors or other people without their
              consent.
            </li>
            <li className="">
              Pornographic, openly sexual materials that depicts or promote the
              illegal, reckless or dangerous use of weapons or dangerous objects
              or facilitate the buying of weapons or ammunition.
            </li>
            <li className="">
              {" "}
              Defamation, discrimination, hate speech, threats or harassment are
              unacceptable, and inappropriate materials that facilitates vulgar
              or abusive language.
            </li>
            <li className="">
              Promoting hate, violence and discrimination or racism, xenophobia
              and ethnic conflicts applications of violence and unlawful
              conduct.
            </li>
            <li className="">
              offers prostitution or other services contradicting moral or legal
              norms services, provision of which is prohibited by the applicable
              law;
            </li>
            <li className="">
              information of solely promotional nature with no offers of
              specific goods or services;
            </li>
            <li className="">
              Counterfeit and imitated goods or unauthorized copies.
              Unauthorized copies include also goods having been acquired by
              illegal means, pirated or stolen; and
            </li>
            <li className="">
              direct or indirect references to any other web sites, references,
              or information about websites competing with the Platform;
            </li>
            <li className="">
              You will not use software and pursue any other actions aimed to
              interference with the normal operation of the Platform;
            </li>
            <li className="">
              You will not promote or distribute unsolicited commercial emails,
              chain letters, Ponzi schemes through the Platform or by any other
              means towards other users of the Platform;
            </li>
            <li className="">
              You will not copy, modify, distribute any other user content
              without consent of the respective user;
            </li>
            <li className="">
              You will not harvest or otherwise collect information about users,
              including email addresses, phone numbers, without their consent or
              otherwise violate the privacy of another person;
            </li>
            <li className="">
              You will not download, store, post, distribute and provide access
              to, or in any other way use worms, viruses, Trojans, and other
              malware;
            </li>
            <li className="">
              You have a legal title to the items offered for sale in your
              announcement; and
            </li>
            <li className="">
              You have the necessary license or are otherwise authorized, as
              required by applicable law, to offer for sale, or advertisement.
            </li>
          </ol>

          <br />

          <p className="">
            <span className="block font-semibold pb-2">Product Quality: </span>
            We are in no way in control or responsible for the items, quality of
            items, services, quality of services sold by vendors on the platform
          </p>

          <br />

          <p className="">
            <span className="block font-semibold pb-2">
              GOVERNING LAW AND JURISDICTION
            </span>
            These Terms shall be governed in accordance with the laws of the
            Republic of Nigeria. Any dispute arising out of or in connection
            with these Terms, including any question regarding its existence,
            validity or termination, shall be referred to and finally resolved
            by arbitration under the Arbitration and Conciliation Act (Cap. A18)
            of the Republic of Nigeria. The number of arbitrator(s) shall be
            one. The seat of arbitration shall be Lagos, Nigeria. The language
            to be used in the arbitral proceedings shall be English.
          </p>
        </div>
      </section>

      <section>
        <Newsletter />
      </section>
      <section>
        <MainFooter />
      </section>
    </div>
  );
};
export default TermsOfUse;
