import React from "react";
import Navbar from "../../components/PagesLayout/Navbar";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="">
      <Navbar />
      <section className=" w-full h-64 text-white aboutherobg flex flex-col justify-center items-center">
        <h1 className="flex justify-center text-xl md:text-4xl lg:text-6xl poppins font-extrabold ">
          Cookies Notice
          {/* Privacy Policy */}
        </h1>
        {/* <p className="flex justify-center pt-2  text-grayColor poppins text-base tracking-wide md:pt-4">
          Learn more about our platform Mbox
        </p> */}
      </section>

      <section className="max-w-screen-xl px-4 py-10 md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8 text-black">
        <div className="flex flex-col gap-4">
          <ol className="list-inside list-decimal pt-3 space-y-4">
            <li className="font-semibold">Introduction</li>
            <p className="">1.1 &nbsp; Our website uses cookies.</p>
            <p className="">
              1.2 &nbsp; Insofar as those cookies are not strictly necessary for
              the provision of [our website and services], we will ask you to
              consent to our use of cookies when you first visit our website.
            </p>

            <li className="font-semibold pt-2">Cookies</li>
            <p className="">
              {/* When you access or use the Platform, it is your responsibility to
              protect and safeguard your account login credentials. It's
              important for you to ensure that only authorized individuals have
              access to these details, as any actions taken under or by people
              using them will be attributed back to you and considered your
              responsibility. */}
            </p>

            <li className="font-semibold pt-2">About cookies</li>
            <p className="">
              3.1 &nbsp; A cookie is a file containing an identifier (a string
              of letters and numbers) that is sent by a web server to a web
              browser and is stored by the browser. The identifier is then sent
              back to the server each time the browser requests a page from the
              server.
            </p>
            <p className="">
              3.2 &nbsp; Cookies may be either "persistent" cookies or "session"
              cookies: a persistent cookie will be stored by a web browser and
              will remain valid until its set expiry date, unless deleted by the
              user before the expiry date; a session cookie, on the other hand,
              will expire at the end of the user session, when the web browser
              is closed.
            </p>
            <p className="">
              3.3 &nbsp; Cookies may not contain any information that personally
              identifies a user, but personal data that we store about you may
              be linked to the information stored in and obtained from cookies.
            </p>

            <li className="font-semibold pt-2">Cookies that we use</li>
            <p className="">
              4.1 &nbsp; We use cookies for the following purposes:
            </p>
            <ol className="list-inside space-y-4 pl-7">
              {/* list-[lower-alpha] */}
              <li className="">
                (a) &nbsp; Authentication and status - we use cookies to
                identify you when you visit our website and as you navigate our
                website, and to help us determine if you are logged into our
                website.
              </li>
              <li>
                (b) &nbsp; Shopping cart - we use cookies to maintain the state
                of your shopping cart as you navigate our website.
              </li>
              <li>
                (c) &nbsp; Personalization - we use cookies to store information
                about your preferences and to personalise our website for you.
              </li>
              <li>
                (d) &nbsp; Security - we use cookies as an element of the
                security measures used to protect user accounts, including
                preventing fraudulent use of login credentials, and to protect
                our website and services generally.
              </li>
              <li>
                (e) &nbsp; Advertising - we use cookies to help us to display
                advertisements that will be relevant to you.
              </li>
              <li>
                (f) &nbsp; Analysis - we use cookies to help us to analyse the
                use and performance of our website and services.
              </li>
              <li>
                (g) Cookie consent - we use cookies to store your preferences in
                relation to the use of cookies more generally.
              </li>
            </ol>

            <li className="font-semibold pt-2">
              Cookies used by our service providers
            </li>
            <p className="">
              5.1 &nbsp; Our service providers use cookies and those cookies may
              be stored on your computer when you visit our website.
            </p>
            <p className="">
              5.2 &nbsp; We use Google Analytics. Google Analytics gathers
              information about the use of our website by means of cookies. The
              information gathered is used to create reports about the use of
              our website. You can find out more about Google's use of
              information by visiting{" "}
              <a
                href="https://www.google.com/policies/privacy/partners/"
                className="underline"
              >
                https://www.google.com/policies/privacy/partners/
              </a>{" "}
              and you can review Google's privacy policy at {""}
              <a
                href="https://policies.google.com/privacy."
                className="underline"
              >
                https://policies.google.com/privacy.
              </a>
            </p>
            <p className="">
              5.3 &nbsp; We publish Google AdSense advertisements on our
              website, [together with advertisements from the following
              advertisers and advertising networks that are distributed by
              Google: [identify and provide links to advertisers and networks]].
              The advertisements may be personalised to reflect your interests.
              To help determine your interests Google and its partners use
              cookies. The cookies are used to track your previous visits to our
              website and your visits to other websites. You can opt out of
              Google's personalised advertising by visiting {""}
              <a
                href="https://www.google.com/settings/ads"
                className="underline"
              >
                https://www.google.com/settings/ads
              </a>{" "}
              {""}
              and you can opt out of third party cookies use for personalised
              advertising by visiting {""}
              <a href="http://www.aboutads.info" className="underline">
                http://www.aboutads.info
              </a>
              . You can review Google's privacy policy at {""}
              <a
                href="https://policies.google.com/privacy."
                className="underline"
              >
                https://policies.google.com/privacy.
              </a>
            </p>
            <p className="">
              5.4 &nbsp; We use a Facebook pixel on our website. Using the
              pixel, Facebook collects information about the users and use of
              our website. The information is used to personalise Facebook
              advertisements and to analyse the use of our website. To find out
              more about the Facebook pixel and about Facebook's use of personal
              data generally, see the Facebook cookie policy at {""}
              <a
                href="https://www.facebook.com/policies/cookies/"
                className="underline"
              >
                https://www.facebook.com/policies/cookies/
              </a>{" "}
              {""}
              and the Facebook privacy policy at {""}
              <a
                href="https://www.facebook.com/about/privacy"
                className="underline"
              >
                https://www.facebook.com/about/privacy
              </a>
              . The Facebook cookie policy includes information about
              controlling Facebook's use of cookies to show you advertisements.
              If you are a registered Facebook user, you can adjust how
              advertisements are targeted by following the instructions at {""}
              <a
                href="https://www.facebook.com/help/568137493302217."
                className="underline"
              >
                https://www.facebook.com/help/568137493302217.
              </a>
            </p>

            <li className="font-semibold pt-2">Managing cookies</li>
            <p className="">
              6.1 &nbsp; Most browsers allow you to refuse to accept cookies and
              to delete cookies. The methods for doing so vary from browser to
              browser, and from version to version. You can however obtain
              up-to-date information about blocking and deleting cookies via
              these links:
            </p>

            <ol className="list-inside space-y-4 pl-7">
              {/* list-[lower-alpha] */}
              <li className="">
                (a) &nbsp;
                <a
                  target="_blank"
                  href="https://support.google.com/chrome/answer/95647 "
                  className=" hover:underline"
                  // text-brightRed
                >
                  {""}
                  https://support.google.com/chrome/answer/95647
                </a>{" "}
                {""}
                (Chrome);
              </li>
              <li className="">
                (b) &nbsp;
                <a
                  target="_blank"
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  className=" hover:underline"
                >
                  {""}
                  https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
                </a>{" "}
                {""}
                (Firefox);
              </li>
              <li className="">
                (c) &nbsp;
                <a
                  target="_blank"
                  href="https://help.opera.com/en/latest/security-and-privacy/"
                  className=" hover:underline"
                >
                  {""}
                  https://help.opera.com/en/latest/security-and-privacy/
                </a>{" "}
                {""}
                (Opera);
              </li>
              <li className="">
                (d) &nbsp;
                <a
                  target="_blank"
                  href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                  className=" hover:underline"
                >
                  {""}
                  https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                </a>{" "}
                {""}
                (Internet Explorer);
              </li>
              <li className="">
                (e) &nbsp;
                <a
                  target="_blank"
                  href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className=" hover:underline"
                >
                  {""}
                  https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>{" "}
                {""}
                (Safari); and
              </li>
              <li className="">
                (f) &nbsp;
                <a
                  target="_blank"
                  href="https://support.microsoft.com/en-gb/help/4468242/microsoft-edge-browsing-data-and-privacy"
                  className=" hover:underline"
                >
                  https://support.microsoft.com/en-gb/help/4468242/microsoft-edge-browsing-data-and-privacy
                </a>{" "}
                {""}
                (Edge).
              </li>
            </ol>
            <p>
              6.2 &nbsp; Blocking all cookies will have a negative impact upon
              the usability of many websites.
            </p>
            <p>
              6.3 &nbsp; If you block cookies, you will not be able to use all
              the features on our website.
            </p>

            <li className="font-semibold pt-2">Cookie preferences</li>
            <p className="">
              7.1 &nbsp; You can manage your preferences relating to the use of
              cookies on our website by visiting: [Marketbox.ng]
            </p>

            <li className="font-semibold pt-2">Our details</li>
            <p className="">
              8.1 &nbsp; This website is owned and operated by Mbox Nigeria
              Limited.
            </p>
            <p>8.2 &nbsp; We are registered in [Nigeria]. </p>
            <p>8.3 &nbsp; Our principal place of business is in Lagos</p>

            <p>8.4 &nbsp; You can contact us:</p>
            <ol className="list-inside space-y-4 pl-7">
              {/* list-[lower-alpha] */}
              <li className="">
                (a) &nbsp; By post, to [the postal address given above]
              </li>
              <li className="">
                (b) &nbsp; Using our website{" "}
                <a
                  target="_blank"
                  href=""
                  className="underline hover:no-underline "
                >
                  contact form
                </a>
                ;
              </li>
              <li className="">
                (c) &nbsp; By telephone, on{" "}
                <a href="tel:+2348134567876" className=" hover:underline">
                  (+234) 813 4567 876
                </a>
                ; or
              </li>
              <li className="">
                (d) &nbsp; By email, using{" "}
                <a href="mailto:info@mbox.ng" className=" hover:underline">
                  {/*  */}
                  info@mbox.ng
                </a>
              </li>
            </ol>
          </ol>

          <br />
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
export default PrivacyPolicy;
