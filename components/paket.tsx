import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { NO_WA_LINK } from "@/lib/constant";

export default function Paket() {
  return (
    <>
      <section id="paket" className="py-12 bg-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-vastnet-navy">
              Paket Internet
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Pilih paket yang sesuai dengan kebutuhan Anda.
              <br />
              Semua paket termasuk gratis pemasangan.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Package 1 */}
            <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-vastnet-blue/50 hover:scale-101">
              <CardHeader>
                <CardTitle className="text-vastnet-navy">Paket Hemat</CardTitle>
                <CardDescription>
                  Ideal untuk penggunaan sehari-hari
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-2 text-4xl font-bold text-vastnet-navy">
                  20 Mbps
                </div>
                <div className="mb-4 text-2xl font-semibold text-vastnet-blue">
                  Rp 175.000
                  <span className="text-sm text-muted-foreground">/bulan</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Cocok untuk 1-3 perangkat
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Streaming video HD
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Gratis pemasangan
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-vastnet-green hover:bg-vastnet-green/90"
                  asChild
                >
                  <Link
                    href={`${NO_WA_LINK}?text=Saya ingin berlangganan paket Hemat 20Mbps`}
                    target="_blank"
                  >
                    Pilih Paket
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Package 2 */}
            <Card className="flex flex-col h-full transition-all duration-300 hover:scale-101 border-vastnet-blue hover:shadow-lg hover:border-vastnet-blue/150">
              <CardHeader className="bg-vastnet-blue/5">
                <CardTitle className="flex justify-between text-vastnet-navy">
                  Paket Keluarga
                </CardTitle>

                <CardDescription>
                  Untuk keluarga dan penggunaan aktif
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-2 text-4xl font-bold text-vastnet-navy">
                  35 Mbps
                </div>
                <div className="mb-4 text-2xl font-semibold text-vastnet-blue">
                  Rp 250.000
                  <span className="text-sm text-muted-foreground">/bulan</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Cocok untuk 3-5 perangkat
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Streaming video 4K
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Gaming online lancar
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Gratis pemasangan
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-vastnet-green hover:bg-vastnet-green/90"
                  asChild
                >
                  <Link
                    href={`${NO_WA_LINK}?text=Saya ingin berlangganan paket Hemat 35Mbps`}
                    target="_blank"
                  >
                    Pilih Paket
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Package 3 */}
            <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:border-vastnet-blue/50 hover:scale-101">
              <CardHeader>
                <CardTitle className="text-vastnet-navy">
                  Paket Premium
                </CardTitle>
                <CardDescription>
                  Untuk kebutuhan profesional dan bisnis
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-2 text-4xl font-bold text-vastnet-navy">
                  50 Mbps
                </div>
                <div className="mb-4 text-2xl font-semibold text-vastnet-blue">
                  Rp 350.000
                  <span className="text-sm text-muted-foreground">/bulan</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Cocok untuk 5+ perangkat
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Streaming video 4K HDR
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Gaming kompetitif
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Prioritas bandwidth
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-3 size-3 text-vastnet-blue" />
                    Gratis pemasangan
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-vastnet-green hover:bg-vastnet-green/90"
                  asChild
                >
                  <Link
                    href={`${NO_WA_LINK}?text=Saya ingin berlangganan paket Hemat 50Mbps`}
                    target="_blank"
                  >
                    Pilih Paket
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
