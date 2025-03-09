import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Yoga from "../public/testimoni/yoga_wicaksono.jpg";
import Fahrizal from "../public/testimoni/fahrizal.jpg";
import Nuryani from "../public/testimoni/nuryani.jpg";

export default function Testimoni() {
  return (
    <>
      <section className="py-12 bg-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-vastnet-navy">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Dengarkan pengalaman dari pelanggan yang telah menggunakan layanan
              VastNet
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vastnet-blue/10">
                    <span className="font-semibold text-vastnet-blue"></span>
                    <Image
                      src={Yoga}
                      alt="Yoga Wicaksono"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-vastnet-navy">
                      Yoga Wicaksono
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pelanggan sejak 2024
                    </p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  &quot;Saya sangat puas dengan layanan VastNet. Koneksi stabil
                  dan kecepatan sesuai dengan yang dijanjikan, Cocok untuk
                  kegiatan Trading Crypto saya.&quot;
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vastnet-blue/10">
                    <Image
                      src={Fahrizal}
                      alt="Fahrizal"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-vastnet-navy">
                      Fahrizal
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pelanggan sejak 2024
                    </p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  &quot;Beralih ke VastNet adalah keputusan terbaik. Harga
                  terjangkau dengan kualitas premium. Digunakan untuk bermain
                  Mobile Legend stabil.&quot;
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-vastnet-blue/10">
                    <Image
                      src={Nuryani}
                      alt="Nuryani"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-vastnet-navy">Nuryani</h3>
                    <p className="text-sm text-muted-foreground">
                      Pelanggan sejak 2024
                    </p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  &quot;Sebagai streamer, saya membutuhkan koneksi yang stabil.
                  VastNet memberikan ping rendah dan koneksi yang konsisten.
                  Sangat direkomendasikan!&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
