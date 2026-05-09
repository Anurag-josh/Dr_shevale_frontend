import { Phone, Copy, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";
//Emergency

interface AppointmentBannerProps {
  onBookClick: () => void;
}

const AppointmentBanner = ({ onBookClick }: AppointmentBannerProps) => {
  const { t } = useTranslation();

  const [showContactCard, setShowContactCard] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+91 7447445121";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <>
      <div className="w-full bg-public-secondary py-6">
        <div className="container-clinic flex flex-col md:flex-row items-center justify-center gap-6">

          {/* Clickable Phone Section */}
          <div className="flex items-center gap-4">

            {/* Phone Text */}
            <div className="flex items-center gap-3 text-primary-foreground">
              <Phone className="w-6 h-6" />

              <span className="text-lg md:text-xl font-bold tracking-wide">
                {t("banner.call_text")}
              </span>
            </div>

            {/* Small Contact Button */}
            <button
              onClick={() => setShowContactCard(true)}
              className="px-4 py-2 rounded-full bg-white text-public-secondary text-sm font-semibold hover:scale-105 transition-all shadow-md"
            >
              Contact
            </button>

          </div>

          {/* <Button variant="appointment" size="lg" onClick={onBookClick}>
            {t("common.book_appointment")}
          </Button> */}
        </div>
      </div>

      {/* Contact Popup */}
      {showContactCard && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setShowContactCard(false)}
        >
          <div
            className="relative bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowContactCard(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
            >
              <X className="w-4 h-4 text-gray-700" />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Contact Our Team
            </h2>

            <p className="text-center text-gray-500 text-sm mb-6">
              Call us directly or copy the number below
            </p>

            {/* Number Box */}
            <div className="bg-gray-100 rounded-2xl px-5 py-4 text-center mb-5">
              <p className="text-2xl font-bold text-gray-800 tracking-wide">
                {phoneNumber}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">

              {/* Call Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="w-full"
              >
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl transition">
                  Call Now
                </button>
              </a>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-3 rounded-2xl transition flex items-center justify-center gap-2"
              >
                <Copy className="w-4 h-4" />

                {copied ? "Copied!" : "Copy Number"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentBanner;