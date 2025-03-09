import Link from "next/link";
import { Button } from "./ui/button";
import { NO_WA_LINK } from "../lib/constant";

export default function Cta() {
  return (
    <>
      <section className="py-12 text-white md:py-24 bg-vastnet-navy">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Siap untuk Berlangganan?
            </h2>
            <p className="max-w-[700px] md:text-xl">
              Dapatkan internet cepat, murah, dan stabil sekarang juga. Gratis
              biaya pemasangan!
            </p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="text-white bg-vastnet-green hover:bg-vastnet-green/80"
                asChild
              >
                <Link
                  href={NO_WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hubungi Kami
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white bg-transparent border-white hover:text-white hover:bg-white/10"
              >
                <Link href="#paket">Lihat Paket Internet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
