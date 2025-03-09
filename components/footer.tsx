import Image from "next/image";
import Link from "next/link";
import LogoVastNet from "../public/logo_vastnet_text_white.png";
import { NO_WA_LINK } from "@/lib/constant";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="py-8 text-white bg-vastnet-navy md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            <div className="pl-0 space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src={LogoVastNet}
                  alt="Logo VastNet"
                  className="w-60 hover:opacity-80"
                />
              </div>
              <p className="text-sm text-gray-300">
                Penyedia layanan internet broadband terpercaya dengan kecepatan
                tinggi dan harga terjangkau.
              </p>
            </div>
            <div className="pl-0 space-y-4 lg:pl-30">
              <h3 className="text-lg font-semibold">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#paket"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Paket
                  </Link>
                </li>
                <li>
                  <Link
                    href="#fitur"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link
                    href="#kontak"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pl-0 space-y-4 lg:pl-30">
              <h3 className="text-lg font-semibold">Paket</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={`${NO_WA_LINK}?text=Saya ingin berlangganan paket Hemat 20Mbps`}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Paket Hemat 20 Mbps
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NO_WA_LINK}?text=Saya ingin berlangganan paket Hemat 35Mbps`}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Paket Hemat 35 Mbps
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${NO_WA_LINK}?text=Saya ingin berlangganan paket Hemat 50Mbps`}
                    target="_blank"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    Paket Hemat 50 Mbps
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-8 border-t border-neutral-400 sm:flex-row">
            <p className="text-xs text-gray-300">
              © {new Date().getFullYear()} VastNet. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4 mr-0 lg:mr-5">
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaFacebookF className="size-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaXTwitter className="size-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <FaTiktok className="size-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
