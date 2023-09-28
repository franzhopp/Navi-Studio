import Image from "../../../assets/logo-5.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../../Section/section.jsx";
import "../../Homepage/homepage";
import ModalSearch from "../../Modal/modal.jsx";
import { LuArrowDown } from "react-icons/lu";

const NavbarDevis = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [showSousListsMenu, setShowSousListsMenu] = useState(false);
  const [isMouseOnSubmenu, setIsMouseOnSubmenu] = useState(false);
  const [openSearch, setSearchQuery] = useState("");

  const handleAnimateButtonClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const toggleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleSousListsMenu = () => {
    setShowSousListsMenu(!showSousListsMenu);
  };

  const handleMouseEnterSubmenu = () => {
    setIsMouseOnSubmenu(true);
  };

  const closeSubmenuWithDelay = () => {
    setTimeout(() => {
      setShowSousListsMenu(false);
    }, 500);
  };

  return (
    <div className="sm:pb-20 mb:min-h-650 min-h-500">
      <nav
        className={`bg-FFF6E4 border-b-4 border-C22E2E h-28 items-center transition duration-300 ease-in-out fixed w-full top-0 left-0 shadow-md z-max`}
      >
        <div className="container mt-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 ">
            <div className="flex items-center">
              <img
                data-aos="fade-left"
                className="lg:h-20 h-10 bg-cover bg-no-repeat xl:logo"
                src={Image}
              />
            </div>
            <div className="flex items-center">
              <NavLink
                to="/"
                data-aos="fade-left"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
              >
                Agence
              </NavLink>

              <li data-aos="fade-left" className="relative group list-none">
                <NavLink
                  to="/services"
                  className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
                >
                  Services
                </NavLink>
                <ul className="absolute hidden group-hover:block rounded-lg bg-FFF6E4 border border-gray-300 mt-2 py-2">
                  <li>
                    <NavLink
                      to="/nosvaleurs"
                      onMouseEnter={handleMouseEnterSubmenu}
                      onMouseLeave={closeSubmenuWithDelay}
                      className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      Nos valeurs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      Qui sommes-nous ?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/prestations"
                      className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      Prestations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tarifs"
                      className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      Tarifications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/devis"
                      className="block text-C22E2E hover:text-0C3E78 px-4 py-2 font-extrabold"
                    >
                      Devis gratuit
                    </NavLink>
                  </li>
                </ul>
              </li>

              <NavLink
                to="/"
                data-aos="fade-left"
                href="about"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/"
                data-aos="fade-left"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold"
              >
                Contact
              </NavLink>
              <NavLink className="text-C22E2E hover:text-0C3E78 px-6 py-2 rounded-md xl:text-2xl text-base font-extrabold">
                FR
              </NavLink>
              <NavLink
                to="/"
                data-aos="fade-left"
                href="contact"
                className="text-C22E2E hover:text-0C3E78 px-6 py-2 xl:text-2xl text-base font-extrabold"
              >
                <svg
                  data-aos="fade-left"
                  className="h-7 xl:flex hidden"
                  onClick={() => {
                    setOpenModel(true);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="32"
                  viewBox="0 0 31 32"
                  fill="none"
                >
                  <path
                    d="M23.8885 12.0905C23.8885 18.7679 18.5409 24.181 11.9443 24.181C5.34762 24.181 0 18.7679 0 12.0905C0 5.4131 5.34762 0 11.9443 0C18.5409 0 23.8885 5.4131 23.8885 12.0905ZM2.32617 12.0905C2.32617 17.4675 6.63233 21.8264 11.9443 21.8264C17.2562 21.8264 21.5623 17.4675 21.5623 12.0905C21.5623 6.71355 17.2562 2.35466 11.9443 2.35466C6.63233 2.35466 2.32617 6.71355 2.32617 12.0905Z"
                    fill="#C22E2E"
                  />
                  <path
                    d="M26.704 30.7329C27.6489 31.7396 29.2216 31.78 30.2168 30.8229C31.2121 29.8659 31.2529 28.2739 30.308 27.2671L26.704 30.7329ZM18.4013 21.8861L26.704 30.7329L30.308 27.2671L22.0053 18.4204L18.4013 21.8861Z"
                    fill="#C22E2E"
                  />
                </svg>
              </NavLink>
              {openModel && (
                <ModalSearch
                  closeModal={setOpenModel}
                  searchQuery={setSearchQuery}
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={`fixed w-full top-0 left-0 shadow-md md:hidden bg-FFF6E4 z-max`}
      >
        {/* 2 items */}
        <div className="px-5 h-28 flex items-center justify-between">
          <a href="">
            <img src={Image} alt="" className="h-10 w-auto sm:h-10" />
          </a>

          <div className="-mr-2">
            <a
              onClick={toggleMenuMobile}
              className="icon-toggle bg-C22E2E cursor-pointer rounded-md p-2 inline-flex items-center justify-center ring-1 ring-white ring-opacity-20"
            >
              <svg
                className={`rotateAnimation ${
                  isAnimating ? "animate-rotate" : ""
                }`}
                onClick={handleAnimateButtonClick}
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26.5"
                  cy="26.5"
                  r="26.5"
                  transform="rotate(90 26.5 26.5)"
                  fill="#C22E2E"
                />
                <path
                  d="M26 12L26 41"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M17 18L17 35"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M35 18L35 35"
                  stroke="#FFF6E4"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* end 2 items */}

        <ul className={`toggle-menu ${toggleMenu ? "block" : "hidden"} p-2`}>
          <NavLink
            to="/"
            className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Agence
          </NavLink>
          <NavLink
            to="/"
            href="portfolio"
            className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Portfolio
          </NavLink>
          <li>
            <NavLink className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold">
              <button onClick={toggleSousListsMenu}>
                <div className="flex items-center justify-between">
                  <div className="pr-2">Services</div>
                  <LuArrowDown className="mt-1" />
                </div>
              </button>

              <ul
                className={`toggle-menu ${
                  showSousListsMenu ? "block" : "hidden"
                } p-2`}
              >
                <li className="list-decimal ml-4">
                  <NavLink
                    to="/nosvaleurs"
                    className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    Nos valeurs
                  </NavLink>
                </li>
                <li className="list-decimal ml-4">
                  <NavLink
                    to="/services"
                    className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    Qui sommes-nous ?
                  </NavLink>
                </li>
                <li className="list-decimal ml-4">
                  <NavLink
                    to="/prestations"
                    className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    Prestations
                  </NavLink>
                </li>
                <li className="list-decimal ml-4">
                  <a
                    to="/tarifs"
                    className="block text-C22E2E border-C22E2E border-b-2 hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    Tarifications
                  </a>
                </li>
                <li className="list-decimal ml-4">
                  <a
                    to="/devis"
                    className="block text-C22E2E  hover:text-0C3E78 px-4 py-2 font-extrabold"
                  >
                    Devis gratuit
                  </a>
                </li>
              </ul>
            </NavLink>
          </li>
          <NavLink
            to="/"
            className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            Contact
          </NavLink>
          <NavLink
            to="/"
            href="translate"
            className="text-C22E2E block px-3 py-2 border-C22E2E border-b-2 rounded-md text-base font-extrabold hover:text-0C3E78"
          >
            FR
          </NavLink>
          <NavLink
            to="/"
            href="contact"
            className="text-C22E2E hover:text-0C3E78 px-3 py-2 text-base font-extrabold"
          >
            <svg
              className="h-5 ml-2"
              onClick={() => {
                setOpenModel(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
            >
              <path
                d="M23.8885 12.0905C23.8885 18.7679 18.5409 24.181 11.9443 24.181C5.34762 24.181 0 18.7679 0 12.0905C0 5.4131 5.34762 0 11.9443 0C18.5409 0 23.8885 5.4131 23.8885 12.0905ZM2.32617 12.0905C2.32617 17.4675 6.63233 21.8264 11.9443 21.8264C17.2562 21.8264 21.5623 17.4675 21.5623 12.0905C21.5623 6.71355 17.2562 2.35466 11.9443 2.35466C6.63233 2.35466 2.32617 6.71355 2.32617 12.0905Z"
                fill="#C22E2E"
              />
              <path
                d="M26.704 30.7329C27.6489 31.7396 29.2216 31.78 30.2168 30.8229C31.2121 29.8659 31.2529 28.2739 30.308 27.2671L26.704 30.7329ZM18.4013 21.8861L26.704 30.7329L30.308 27.2671L22.0053 18.4204L18.4013 21.8861Z"
                fill="#C22E2E"
              />
            </svg>
          </NavLink>
          {openModel && <ModalSearch closeModal={setOpenModel} />}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarDevis;