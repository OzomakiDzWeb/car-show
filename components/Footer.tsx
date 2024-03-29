import Image from "next/image";
import React from "react";
import {footerLinks} from '../constant/index'
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="logo"
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2024 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">{footerLinks.map((link)=>(
          <div key={link.title} className="footer__link">
            <h3 className="font-bold">{link.title}</h3>
              {link.links.map((itm)=>(
                <Link key={itm.title} href={itm.url}>
                  {itm.title}
                </Link> 
              ))}
          </div>
        ))}
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 py-10">
          <div className="footer__copyrights-links">
            <Link href={'/'} className="text-gray-500">
              Privacy Policy
            </Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
