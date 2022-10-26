import React from "react";
import Image from "next/image";
import PreLaunchHeader from "../../../components/PreLaunchHeader";
import telephone from "../../../public/images/telephone.png";
import facebook from "../../../public/img/facebook.svg";
import twitter from "../../../public/img/twitter.svg";
import instagram from "../../../public/img/instagram.svg";
import whatsapp from "../../../public/img/whatsapp.svg";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import PreLaunchFooter from "../../../components/PreLaunchFooter";

function contactpage() {
  const [value, setValue] = React.useState({});

  const onChangeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <PreLaunchHeader />
      <section>
        <div className="flex flex-col m-10 mt-20 text-gray-700 font-poppins ">
          <div className="my-5">
            <h2 className="text-3xl font-bold">React out to us</h2>
            <p className="text-lg">
              Got any questions to ask Mbox? Have a suggestion or support or
              just want to say HI? Get through to us using the form below.
            </p>
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-full h-auto gap-5 my-5">
            <div className="lg:w-2/4 h-auto md:w-full">
              <Image src={telephone} />
            </div>
            <div className="lg:w-2/4 h-auto md:w-full">
              <form>
                <div className="mb-4">
                  <Label
                    className="w-full pb-1 text-base text-[#9A9A9A]"
                    htmlFor="text"
                    title="Full Name"
                  />
                  <div>
                    <Input
                      name="name"
                      type="text"
                      placeHolder="Ex:Taylor Mason"
                      className=" w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none "
                      required={true}
                      autoFocus={false}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label
                    className="w-full text-base  text-[#9A9A9A]"
                    htmlFor="email"
                    title="Email"
                  />

                  <div className="relative">
                    <Input
                      name="email"
                      type="email"
                      placeHolder="Ex:Taylormason@gmail.com"
                      className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                      required={true}
                      autoFocus={false}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label
                    className="w-full  pb-1 text-base text-[#9A9A9A]"
                    htmlFor="number"
                    title="Phone Number"
                  />

                  <div className="relative">
                    <Input
                      name="Phone Number"
                      type="number"
                      className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                      required={true}
                      autoFocus={false}
                      placeHolder="Ex:(+234) 81 5657 8901"
                      onChange={onChangeInput}
                      maxLength={11}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label
                    className="w-full  pb-1 text-base text-[#9A9A9A]"
                    htmlFor="Message"
                    title="Message"
                  />

                  <div className="relative">
                    <Input
                      name="Message"
                      type="text"
                      className="w-full h-40 p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                      required={true}
                      autoFocus={false}
                      placeHolder="Type your message here..."
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="w-fit bg-orange-600 px-10 p-3 shadow-lg rounded-md text-white"
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col border-4 m-10 p-10 my-32 rounded-3xl border-gray-400 text-gray-700">
          <div className="p-5">
            <h2 className="text-3xl font-bold">
              You could also reach us through our social media pages
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="flex py-5">
              <Image src={facebook} width={120} height={110} alt="facebook" />
              <p className="p-5 text-lg">
                Be the first to get updates on our products, packages and other
                exciting information. like and follow us on Facebook via
                <a className="inline-block text-orange-600" href="">
                  https://WWW.facebook.com/marketbox.ng
                </a>
              </p>
            </div>
            <div className="flex py-5">
              <Image src={twitter} width={120} height={110} alt="twitter" />
              <p className="p-5 text-lg">
                Join the Mbox conversations, business pointers and suggestions.
                Follow and engage Mbox on Twitter via
                <a className="inline-block  text-orange-600" href="">
                  https://WWW.twitter.com/marketbox.ng
                </a>
              </p>
            </div>
            <div className="flex py-5 text-lg">
              <Image src={instagram} width={120} height={110} alt="instagram" />
              <p className="p-5">
                To catch up with exciting banner, ads, promotion, and other
                graphics contents, follow and stick to Mbox on Instagram via
                <a className="inline-block  text-orange-600" href="">
                  https://WWW.instagram.com/marketbox.ng
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col border-4 m-10 p-10 my-32 rounded-3xl border-gray-400 text-gray-700">
          <div className="p-5">
            <h2 className="text-3xl font-bold">
              Chat with our customer care agent 24/7 on WhatsApp
            </h2>
          </div>
          <div>
            <div className="flex py-5">
              <Image src={whatsapp} width={120} height={110} alt="whatsapp" />
              <p className="p-5 text-lg">
                For questions, enquiry and directions about Mbox, reach out to
                our customer care representative on WhatsApp via
                <a className="inline-block  text-orange-600" href="">
                  https://wa.me/2348145678709
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <PreLaunchFooter />
    </div>
  );
}
export default contactpage;
