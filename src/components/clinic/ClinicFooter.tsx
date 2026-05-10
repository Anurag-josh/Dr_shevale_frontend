import { Phone, Mail, Clock, MapPin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

interface ClinicFooterProps {
  onContactClick: () => void;
}

const ClinicFooter = ({ onContactClick }: ClinicFooterProps) => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-public-secondary">
      <div className="container-clinic py-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Care Info */}
        <div>
          <p className="text-public-accent font-semibold text-sm uppercase tracking-widest mb-2">
            {t('footer.contact_us')}
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('footer.get_in_touch')}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-8">
            {t('footer.description')}
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">

          <div className="flex items-center gap-3 group">
            <Phone className="w-5 h-5 text-public-accent flex-shrink-0 group-hover:scale-110 transition-transform" />

            <span className="text-white/80 text-sm">
              +91 744-744-5121
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <Clock className="w-5 h-5 text-public-accent flex-shrink-0 group-hover:scale-110 transition-transform" />

            <span className="text-white/80 text-sm">
              {t('footer.visiting_hours')}
            </span>
          </div>

          <div className="flex items-start gap-3 group">
            <MapPin className="w-5 h-5 text-public-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />

            <span className="text-white/80 text-sm">
              {t('topbar.address')}
            </span>
          </div>
        </div>

        {/* Socials & Action */}
        <div>

          <div className="flex gap-2 mb-6">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Dr-Shewales-Sai-Heart-Maternity-Care-100064275300587/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-public-accent/20 text-public-accent flex items-center justify-center hover:bg-public-accent hover:text-white transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/saiheartcaresolapur/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-public-accent/20 text-public-accent flex items-center justify-center hover:bg-public-accent hover:text-white transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5z"/>
              </svg>
            </a>

          </div>

          {/* Contact Button */}
          {/*
          <Button
            variant="contact"
            size="lg"
            onClick={onContactClick}
            className="w-full sm:w-auto"
          >
            {t('nav.contact')}
          </Button>
          */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container-clinic text-center">

          <p className="text-white/50 text-xs">
            {t('footer.copyright')}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default ClinicFooter;