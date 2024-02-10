import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import logo from "/images/WhatsApp_Image_2024-02-10_at_4.49.49_PM-removebg.png"; // Import your logo image

const navData = [
  { title: "Home", linkTo: "/" },
  { title: "About Us", linkTo: "about" },
  {
    title: "Product",
    subMenu: [
      { title: "All Category", linkTo: "product" },
      { title: "Veg Cake", linkTo: "product/first_product" },
      { title: "Non-Veg Cake", linkTo: "product/second_product" },
      { title: "Birthday Special", linkTo: "product/birthdayspecial" },
      { title: "Pastry cake", linkTo: "product/pastrycake" },
    ],
  },
  { title: "Contact Us", linkTo: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div className="bg-slate-50 text-black">
      <div className="w-11/12 mx-auto">
        {/* Logo */}
        <div className="flex sm:justify-center justify-between  items-center py-4 bg-[https://wallpaperaccess.com/full/247786.jpg]">
          <Link to="/">
            <img src={logo} alt="Logo" className=" w-[110px] sm:w-[200px] h-[100px] sm:h-[200px]" /> {/* Adjust height based on your logo size */}
          </Link>
          <div
            className="text-2xl text-primary cursor-pointer sm:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenuSharp />}
          </div>
        </div>
        
        {/* Navigation */}
        <div
          className={`flex sm:flex-row mt-2 sm:mt-0 flex-col ${
            open ? `block` : `hidden sm:flex`
          } sm:gap-x-7 2xl:gap-x-8`}
        >
          {navData.map((menuItem, index) => (
            <button
              key={index}
              className="text-left text-base sm:text-xl relative py-1 sm:py-4"
            >
              {menuItem.linkTo ? (
                <NavLink
                  to={menuItem.linkTo}
                  onClick={() => {
                    setOpen(!open), setSubMenuOpen(false);
                  }}
                  className="link-underline-white font-semibold text-primary hover:text-secondary"
                >
                  {menuItem.title}
                </NavLink>
              ) : (
                <>
                  <div
                    onClick={() => {
                      setSubMenuOpen(!subMenuOpen);
                    }}
                    className="flex cursor-pointer items-center text-base sm:text-xl justify-between py-2 text-black font-semibold group-hover:text-white lg:mr-0 lg:inline-flex lg:py-0 lg:px-0"
                  >
                    {menuItem.title}
                    <span className="pl-1 mt-1">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        className={`${subMenuOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                  {subMenuOpen && menuItem.subMenu && (
                    <div
                      className={`relative pt-0 sm:pt-3 top-full left-0 ${
                        subMenuOpen ? "opacity-100 lg:visible z-50" : ""
                      } lg:absolute lg:top-[90%] lg:block lg:w-[200px] lg:opacity-100 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full z-[99]`}
                    >
                      {menuItem.subMenu.map((submenuItem, index) => (
                        <Link
                          to={submenuItem.linkTo}
                          onClick={() => {
                            setSubMenuOpen(!subMenuOpen), setOpen(!open);
                          }}
                          key={index}
                          className="block py-2.5 text-left text-black bg-white sm:text-black hover:text-red-600 text-sm sm:text-base hover:opacity-90 px-2"
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
