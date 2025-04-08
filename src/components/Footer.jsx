import React from "react";

const Footer = () => {

    return (
        <footer className="bg-[#333333] text-[#cccccc] py-6">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center pb-5">
                {/* Basic Links */}
                <ul className="flex flex-wrap justify-center space-x-6  text-sm">
                    <li className="border-r border-gray-700 pr-4">
                        <a href="/website-policies" className="hover:text-white">Website Policies</a>
                    </li>
                    <li className="border-r border-gray-700 pr-4"><a href="/help" className="hover:text-white">Help</a></li>
                    <li className="border-r border-gray-700 pr-4"><a href="/screen-reader-access" className="hover:text-white">Screen Reader Access</a></li>
                    <li className="border-r border-gray-700 pr-4"><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
                    <li className="border-r border-gray-700 pr-4"><a href="/feedback" className="hover:text-white">Feedback</a></li>
                    <li className="border-r border-gray-700 pr-4"><a href="/archives" className="hover:text-white">Archives</a></li>
                    <li className="border-r border-gray-700 pr-4"><a href="/online-services" className="hover:text-white">Online Services for Voters</a></li>
                    <li className="border-r border-gray-700 pr-4"><a href="/visitor-analytics" className="hover:text-white">Visitor Analytics</a></li>
                    <li><a href="/web-information-manager" className="hover:text-white">WIM</a></li>
                </ul>
            </div>

            <div className=" border-t-3 border-black"></div>

            {/* Additional Info */}
            <div className="container mx-auto px-6 lg:px-12 mt-6 text-xs text-center">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
                    {/* Built On CMF Section */}
                    <div className="flex items-center justify-center">
                        {/*           
                         <a href="https://cmf.gov.in/" target="_blank" rel="noopener noreferrer">
                         <img
                          src="https://dopt.gov.in/sites/all/modules/customs/cmf_content/assets/images/cmf-logo.png"
                          alt="CMF Logo"
                          className="h-6 mr-2"
                          />
                        </a> */}
                    </div>


                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
                        <a href="https://cmf.gov.in/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://dopt.gov.in/sites/all/modules/customs/cmf_content/assets/images/cmf-logo.png"
                                alt="CMF Logo"
                                className="h-6 mr-2"
                            />
                        </a>

                        <span className="hidden md:block text-gray-500 p-5">|</span>

                        <div className="text-xs text-center md:text-left">

                            <p>Website Content Managed by <strong className="text-white">Department of Personnel & Training, MoPP&P, GoI</strong></p>
                            <p>Designed, Developed and Hosted by <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">National Informatics Centre (NIC)</a></p>
                            <p>Last Updated: <strong className="text-white">16 Mar 2023</strong></p>
                        </div>
                    </div>

                    {/* Certification Section */}
                    <div className="flex items-center justify-center">
                        <a href="https://dopt.gov.in/sites/default/files/STQC-DOPT-Certificate_0.pdf" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://dopt.gov.in/sites/all/modules/customs/cmf_content/assets/images/cqw_logo.png"
                                alt="CQW Certification"

                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
