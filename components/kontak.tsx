import { NO_WA_TEXT } from "@/lib/constant";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

export default function Kontak() {
  return (
    <>
      <section
        id="kontak"
        className="py-12 text-white md:py-24 bg-vastnet-blue"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-vastnet-navy">
              Hubungi Kami
            </h2>
            <p className="max-w-[700px] text-neutral-300 md:text-xl text-center">
              Punya pertanyaan atau ingin berlangganan?
              <br />
              Tim kami siap membantu Anda.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href={`${NO_WA_TEXT}`}
              passHref
              className="flex items-center justify-center gap-2 group"
            >
              <FaWhatsapp className="w-5 h-5 text-white group-hover:text-vastnet-navy" />
              <span className="group-hover:text-vastnet-navy group-hover:underline">
                {NO_WA_TEXT}
              </span>
            </Link>
            <Link
              href="mailto:info@vastnet.id"
              passHref
              className="flex items-center justify-center gap-2 group"
            >
              <MdOutlineMail className="w-5 h-5 text-white group-hover:text-vastnet-navy" />
              <span className="group-hover:text-vastnet-navy group-hover:underline">
                info@vastnet.id
              </span>
            </Link>
            <Link
              href="https://maps.app.goo.gl/zR9nxM8Xz77HrppQ6"
              passHref
              className="flex items-center justify-center gap-2 group"
            >
              <SiGooglemaps className="w-5 h-5 text-white group-hover:text-vastnet-navy" />
              <span className="group-hover:text-vastnet-navy group-hover:underline">
                Jl. Internet Cepat No. 123, Jakarta, Indonesia
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
