import { FiFacebook, FiInstagram, FiLinkedin, FiMapPin } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-red-100 py-10">
      <div className="container">
        <div className="space-y-4 md:grid md:grid-cols-3 gap-4">
          {/** Column 1 */}
          <div className="flex flex-col">
            <div className="text-3xl font-semibold mb-4">Tripply</div>
            <span className="text-xs">
              © {new Date().getFullYear()} Tripply LLC All rights reserved.
            </span>
            <div className="flex  items-center gap-1 text-sm"><FiMapPin/> Dhaka, Bangladesh</div>
            <div className="flex flex-row items-center gap-2 text-sm">
              <span>Follow us on: </span>
              <FiFacebook className="cursor-pointer hover:text-blue-500 transition ease-in-out" />
              <FiInstagram className="cursor-pointer hover:text-blue-500 transition ease-in-out" />
              <FiLinkedin className="cursor-pointer hover:text-blue-500 transition ease-in-out" />
            </div>
          </div>

          {/** Column 2 */}
          <div>
            <ul className="flex gap-8 font-semibold mb-4">
              <FooterLink text="Terms of Use" />
              <FooterLink text="Privacy" />
              <FooterLink text="Contact Us" />
            </ul>
            <div className="text-xs">
              This is the version of our website addressed to speakers of
              English in the United States. If you are a resident of another
              country or region, please select the appropriate version of
              Tripadvisor for your country or region in the drop-down menu. more
            </div>
          </div>

          {/** Column 3 */}
          <div className="mx-auto">
            <ul className="font-semibold">
              <FooterLink text="About Us" />
              <FooterLink text="Trending Destinations" />
              <FooterLink text="Top Search" />
              <FooterLink text="Drop A Review" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }: { text: string }) => (
  <li className="cursor-pointer underline">{text}</li>
);

export default Footer;
