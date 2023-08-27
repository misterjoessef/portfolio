import { FaTiktok, FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GrReddit } from "react-icons/gr";
import Logo from "@/app/components/Theming/LogoText";
import Link from "next/link";
type FooterLink = {
  link: string;
  id: string;
  tag: JSX.Element;
};

export default function Footer() {
  const currentYear = new Date().getFullYear().toString();
  const footerLinks: FooterLink[] = [
    {
      link: "https://www.tiktok.com/@misterjoessef",
      id: "tiktok",
      tag: <FaTiktok />,
    },
    {
      link: "https://twitter.com/misterjoessef",
      id: "twitter",
      tag: (
        <svg
          className={`h-3.5 w-3.5 `}
          fill="currentColor"
          viewBox="0 0 1200 1227"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
        </svg>
      ),
    },
    {
      link: "https://www.youtube.com/@misterjoessef",
      id: "youtube",
      tag: <BsYoutube />,
    },
    {
      link: "https://www.instagram.com/misterjoessef",
      id: "instagram",
      tag: <AiFillInstagram />,
    },
    {
      link: "https://discord.com/invite/Uw6MzXAAvb",
      id: "discord",
      tag: <FaDiscord />,
    },
  ];
  return (
    <footer className=" mb-0 bg-base-300 text-base-content">
      <section className=" py-4 ">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-row ">
              <div className="flex flex-col text-xs">
                <div className="flex flex-row  ">
                  <Logo textSize={1} />
                  <p className="my-auto ml-1 flex whitespace-nowrap font-semibold">
                    {`© ${currentYear}`}
                  </p>
                </div>
              </div>
            </div>

            <ul className="flex items-center space-x-3  md:order-3">
              {footerLinks.map((entry, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={entry.link}
                      target="_blank"
                      className="flex h-7 w-7 items-center justify-center text-secondary transition-all duration-200 hover:text-accent "
                    >
                      {entry.tag}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
