import React from 'react';

const WebsitePolicies = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 mt-6 text-sm ">
      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-white">Home</a> &gt; &gt; Website Policies
      </div>

      {/* Website Policies Content */}
      <h1 className="text-2xl font-bold mb-4">Website Policies</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Disclaimer</h2>
        <p className="mt-2">
          This Website is designed & developed by National Informatics Center and maintained by Department of Personnel & Training, Ministry of Personnel, Public Grievances & Pensions, Government of India.
        </p>
        <p className="mt-2">
          The contents of this website are for information purposes only, enabling the public to have a quick and easy access to information. We are taking every effort to provide accurate and updated information. However, it is likely that details such as telephone numbers, the name of the officer holding a post, etc., may change prior to their updating in the website. Hence, we do not assume any legal liability on the completeness, accuracy, or usefulness of the contents provided in this web site.
        </p>
        <p className="mt-2">
          The links are provided to other external sites in some documents. We are not responsible for the accuracy of the contents in those sites. The hyperlinks given to external sites do not constitute an endorsement of information, products, or services offered by these sites.
        </p>
        <p className="mt-2">
          Despite our best efforts, we do not guarantee that the documents on this site are free from infection by computer viruses, etc.
        </p>
        <p className="mt-2">
          We welcome your suggestions to improve our site and request that any error found may kindly be brought to our notice.
        </p>
        <p className="mt-2">Thanks for visiting our site.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Copyright Policy</h2>
        <p className="mt-2">
          All the contents available on the Department of Personnel & Training website are indigenously developed by the Department of Personnel & Training, and there is no third-party content present on this website. If any third-party content is present, then the Department of Personnel & Training has obtained the due permissions as per the copyright policies of the third parties whose contents are published on this website.
        </p>
        <p className="mt-2">
          Contents of this website may not be reproduced partially or fully, without due permission from the Department of Personnel & Training. If content from this website is referred to or forms part of content on another website, the content-source must be appropriately acknowledged.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Hyperlink Policy</h2>
        <h3 className="text-lg font-medium">Links to external Websites/portals</h3>
        <p className="mt-2">
          At many places in this Website, you shall find links to other Websites/Portal/Web Applications/Mobile applications. These links have been placed for your convenience. The Department of Administrative Reforms & Public Grievances is not responsible for the contents of the linked destinations and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this Website should not be assumed as endorsement of any kind. We cannot guarantee that these links will work all the time and we have no control over the availability of linked destinations.
        </p>
        <h3 className="text-lg font-medium mt-4">Links to our Website by other Websites/Portals</h3>
        <p className="mt-2">
          We do not object to you linking directly to the information that is hosted on this Website, and no prior permission is required for the same. However, we would like you to inform us about any links provided to this Website so that you can be informed of any changes or updates therein.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Privacy Statement</h2>
        <p className="mt-2">
          As a general rule, this website does not collect personal information about you when you visit the site. You can generally visit this site without revealing personal information unless you choose to provide such information.
        </p>
        <p className="mt-2">
          Any personal information collected shall be used only for the stated purpose and shall NOT be shared with any other department or organization (public/private).
        </p>
        <p className="mt-2">
          This site may contain links to non-Government sites whose data protection and privacy practices may differ from ours. We are not responsible for the content and privacy practices of these other websites and encourage you to consult the privacy notices of those sites.
        </p>
      </div>
    </div>
  );
};

export default WebsitePolicies;
