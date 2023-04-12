import Layout from "../../components/PagesLayout/Layout";

const index = () => {
  return (
    <Layout>
      <section className="card rectCard flex justify-between items-center flex-col text-lg border-b-2 mt-8 md:flex-row ">
        <h4 className="text-2xl font-medium mt-5">Purchase History</h4>
        <form>
          <select
            id="sort"
            className="bg-gray-50 border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
          >
            <option disabled selected>
              Sort By
            </option>
            <option value="date">date</option>
            <option value="type">type</option>
          </select>
        </form>
      </section>
      {/* History Content*/}
      {transactions.map((e, i) => {
        const date = new Date(e.createdAt).toDateString();
        return (
          <div className="card rectCard w-full grid grid-cols-[30%_30%_15%_15%] justify-between items-center overflow-x-auto text-sm">
            <div className="flex gap-5 justify-start items-center">
              <span className="border-red-400 border h-10 px-4 flex items-center rounded-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.502 1.00875C17.0644 0.559535 16.4166 0.392182 15.8126 0.568343L1.72809 4.66409C1.09083 4.84114 0.639145 
								5.34936 0.51747 5.99499C0.393169 6.65208 0.827347 7.4862 1.39458 7.835L5.79851 10.5417C6.25019 10.8192 6.83318 10.7496 7.20696 10.3726L12.2499 5.29828C12.5038 5.03403 12.9239 5.03403 13.1778 5.29828C13.4316 5.55371 13.4316 5.96769 13.1778 6.23193L8.12608 11.3071C7.75143 11.6832 7.6814 12.269 7.95714 12.7235L10.648 17.1716C10.9631 17.7 11.5058 17.9995 12.1011 17.9995C12.1711 17.9995 12.2499 17.9995 12.3199 17.9907C13.0027 17.9026 13.5454 17.4358 13.7468 16.7752L17.9222 2.7087C18.106 2.10976 17.9397 1.45796 17.502 1.00875Z"
                    fill="#F90808"
                  />
                </svg>
              </span>
              <span>{e.transactionType}</span>
            </div>
            {/* <div>Wed, Feb 01, 2022. 11:50AM</div> */}
            <div>{date}</div>
            <div>{`₦${e.amount}`}</div>
            <button
              onClick={() => {
                dispatch(getTransactionDetails(e.transactionReference))
                  .unwrap()
                  .then((action) => console.log(action))
                  .catch((error) => console.log(error));
              }}
              className="bg-brightRed h-10 px-4 py-2 flex justify-center items-center text-white rounded-lg "
            >
              Details
            </button>
          </div>
        );
      })}
    </Layout>
  );
};

export default index;
