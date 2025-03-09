import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { NO_WA_LINK } from "../lib/constant";
import InternetBroadbandImage from "../public/pexels-pixabay-159304.jpg";

export default function Hero() {
  return (
    <>
      <section className="relative py-12 md:py-24 lg:py-32 bg-linear-to-r from-vastnet-blue/10 to-vastnet-teal/5">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 order-2 md:order-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-vastnet-navy">
                Internet cepat, Murah, Stabil.
              </h1>
              <div className="text-2xl font-semibold md:text-3xl text-vastnet-blue">
                Internet Broadband Gratis Pemasangan
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Nikmati pengalaman internet terbaik dengan VastNet. Koneksi
                stabil dan kecepatan tinggi untuk kebutuhan digital Anda.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-vastnet-green hover:bg-vastnet-green/80"
                  asChild
                >
                  <Link
                    href={NO_WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Berlangganan Sekarang
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-vastnet-teal text-vastnet-teal hover:bg-vastnet-teal/10"
                  asChild
                >
                  <Link href="#paket">Lihat Paket Internet</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-4xl overflow-hidden hover:shadow-xl  transition-all duration-300 hover:scale-102 order-1 md:order-2">
              <Image
                src={InternetBroadbandImage}
                alt="Internet Broadband"
                fill
                className="object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
