import copyrightSign from "../assets/icons/copyright-sign.svg";
import footerLogo from "../assets/icons/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

const Footer = () => {
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "String of Pearls", link: "/" },
        { name: "Spider Plant", link: "/" },
        { name: "Boston Fern", link: "/" },
        { name: "English Ivy", link: "/" },
        { name: "Pothos", link: "/" },
        { name: "Maidenhair Fern", link: "/" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "About us", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "How it works", link: "/" },
        { name: "Privacy policy", link: "/" },
        { name: "Payment policy", link: "/" },
      ],
    },
    {
      title: "Get in touch",
      links: [
        { name: "customer@hangingplants.com", link: "mailto:customer@hangingplants.com" },
        { name: "+1234567890", link: "tel:+1234567890" },
      ],
    },
  ];
  const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];

  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Transform your space with beautiful hanging plants from SkyGardeners. 
          Find the perfect plant to fit your home. Join our loyalty program and enjoy exclusive rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
