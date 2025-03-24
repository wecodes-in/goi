import React from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const MainHeader = ({
    isDarkMode,

    isMenuOpen,
    setIsMenuOpen,
}) => {


    return (
        <div
            className={`w-full ${isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-md z-50`}
        >
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">

                        <img
                            src="https://dopt.gov.in/sites/all/modules/customs/cmf_content/assets/images/emblem-dark.png"
                            alt="national emblem"

                            className="national_emblem"
                        />
                        <h1 className="logo" role="heading" aria-label="DOPT Logo">
                            <a href="/" title="Home" rel="home" className="header__logo">
                                <strong lang="hi">कार्मिक एवं प्रशिक्षण विभाग</strong>Department of
                                <span>PERSONNEL &amp; TRAINING</span>
                            </a>
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">

                        <a className="sw-logo" title="Swachh Bharat, External Link that opens in a new window" href="https://swachhbharatmission.ddws.gov.in/" target="_blank" aria-label="Swachh Bharat">
                        <img src="https://dopt.gov.in/sites/all/modules/customs/cmf_content/assets/images/swach-bharat.png"
                         alt="Swachh Bharat"
                         className="swachh_Bharat"/>
                        </a>

                        <a title="Mahatma Gandhi 150th birth anniversary, External Link that opens in a new window" href="http://amritmahotsav.nic.in" target="_blank" aria-label="Mahatma Gandhi">
                        <img src="https://dopt.gov.in/sites/all/modules/customs/cmf_content/assets/images/AKAM_logo.jpg"
                         alt="Mahatma Gandhi"
                         className="mahatma_gandhi"/>
                        </a>

                        <a title="International Year of Cooperatives" href="#" target="_blank" aria-label="International Year of Cooperatives">
                        <img src="https://dopt.gov.in/sites/all/modules/customs/cmf_content/assets/images/IYC-Logo.png" 
                        alt="International Year of Cooperatives"
                        className="international_year_cooperatives"/>
                        </a>
                      


                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
