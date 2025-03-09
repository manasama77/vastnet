import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, CreditCard, Clock, Shield } from "lucide-react";

export default function Fitur() {
  return (
    <>
      <section id="fitur" className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-12 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-vastnet-navy">
              Mengapa Memilih VastNet?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Kami menawarkan layanan internet terbaik dengan berbagai
              keunggulan
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-vastnet-blue/20">
                  <Wifi className="w-6 h-6 text-vastnet-blue" />
                </div>
                <CardTitle className="text-vastnet-navy">
                  Internet Cepat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kecepatan download dan upload yang tinggi untuk memenuhi
                  kebutuhan digital Anda.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-vastnet-blue/20">
                  <CreditCard className="w-6 h-6 text-vastnet-blue" />
                </div>
                <CardTitle className="text-vastnet-navy">
                  Harga Terjangkau
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Paket internet dengan harga bersaing dan sesuai dengan
                  kebutuhan Anda.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-vastnet-blue/20">
                  <Clock className="w-6 h-6 text-vastnet-blue" />
                </div>
                <CardTitle className="text-vastnet-navy">
                  Pelayanan 24 Jam
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tim dukungan teknis siap membantu Anda kapan saja, 24 jam
                  sehari, 7 hari seminggu.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-background">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-vastnet-blue/20">
                  <Shield className="w-6 h-6 text-vastnet-blue" />
                </div>
                <CardTitle className="text-vastnet-navy">
                  Jaminan Kestabilan Jaringan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Koneksi yang stabil dan andal dengan jaminan uptime tinggi
                  untuk aktivitas online tanpa gangguan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
