import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className=" bg-[#eee]">
      <div className="w-11/12 mx-auto py-5">
        <h1 className="py-10 text-center font-bold text-3xl"> About Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-7 sm:gap-x-10">
          <div className="col-span-1">
            <div className="grid sm:grid-cols-1 grid-cols-2 gap-x-5 sm:gap-x-0 ">
              <Link to="">
                <button className="bg-blue-600 text-white p-2 w-full font-semibold m-3">
                  Vision
                </button>
              </Link>
              <Link to="mission">
                <button className="bg-blue-600 text-white p-2 w-full font-semibold m-3">
                  Mission
                </button>
              </Link>
            </div>
          </div>
          <div className="sm:col-span-6 bg-white px-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
