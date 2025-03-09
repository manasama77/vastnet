import Link from "next/link";
import LogoVastNet from "../public/logo_vastnet.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-gray-50">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src={LogoVastNet}
              alt="Logo VastNet"
              className="w-32 hover:opacity-80"
            />
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#paket"
              className="text-sm font-medium hover:underline underline-offset-4 text-vastnet-navy"
            >
              Paket
            </Link>
            <Link
              href="#fitur"
              className="text-sm font-medium hover:underline underline-offset-4 text-vastnet-navy"
            >
              Fitur
            </Link>
            <Link
              href="#kontak"
              className="text-sm font-medium hover:underline underline-offset-4 text-vastnet-navy"
            >
              Kontak
            </Link>
          </nav>
          <Button className="bg-vastnet-green hover:bg-vastnet-green/70">
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2"
            >
              <FaWhatsapp className="inline text-white size-5" />
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
}
