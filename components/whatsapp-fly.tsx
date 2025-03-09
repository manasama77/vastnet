import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFly() {
  return (
    <>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 items-center justify-center hidden p-3 text-white transition-all duration-300 rounded-full shadow-lg bottom-6 right-6 bg-vastnet-green hover:bg-vastnet-green/80 md:flex"
        aria-label="Hubungi kami via WhatsApp"
      >
        <FaWhatsapp className="size-6" />
      </a>
    </>
  );
}
