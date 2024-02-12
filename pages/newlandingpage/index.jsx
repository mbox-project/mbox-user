import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/PagesLayout/Navbar";
import NavTag from "../../components/PagesLayout/NavTag";
import Category from "../../components/Category";
import NewArrivals from "../../components/NewArrivals";
import GettingStarted from "../../components/GettingStarted";
import PopularMerchants from "../../components/PopularMerchants";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";

const NewLandingPage = () => {
  return (
    <main>
      <header>
        <div>{((<Navbar />), (<Header />))}</div>
        <div className="px-2 md:px-16">
          <NavTag />
        </div>
      </header>

      <section className="px-2 md:px-16">
        <di>
          <GettingStarted />
        </di>
        <div>
          <NewArrivals />
        </div>
        <div>
          <Category />
        </div>
        <div>
          <PopularMerchants />
        </div>
      </section>

      <section>
        <div>
          <Newsletter />
        </div>
        <div>
          <MainFooter />
        </div>
      </section>
    </main>
  );
};

export default NewLandingPage;
