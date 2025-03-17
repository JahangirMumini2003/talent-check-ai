
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import BrandTelegram from "@/components/ui/BrandTelegram";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfyQpsL29voVoijGZQBJ4ZawBchdhaMlVb4lDBbLEiS_-KvdA/viewform";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { label: "Возможности", href: "#" },
      { label: "Тарифы", href: "#pricing" },
      { label: "Как это работает", href: "#how-it-works" },
      { label: "FAQ", href: "#" },
    ],
    company: [
      { label: "О нас", href: "#" },
      { label: "Карьера", href: "#" },
      { label: "Блог", href: "#" },
      { label: "Правовая информация", href: "#" },
    ],
    resources: [
      { label: "Центр поддержки", href: "#" },
      { label: "Документация API", href: "#" },
      { label: "Статус системы", href: "#" },
      { label: "Партнеры", href: "#" },
    ],
    social: [
      { label: "Twitter", href: "#", icon: Twitter },
      { label: "LinkedIn", href: "#", icon: Linkedin },
      { label: "Facebook", href: "#", icon: Facebook },
      { label: "Instagram", href: "#", icon: Instagram },
      { label: "Telegram", href: "https://t.me/jahangirmumini", icon: BrandTelegram },
    ],
  };

  return (
    <footer className="bg-white pt-20 pb-12 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 pt-8 border-t border-gray-100">
          <div className="col-span-2 mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-display font-bold gradient-text">Screeny AI</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              Революционизируем процесс найма с помощью видеоинтервью на базе ИИ, экономя время и находя лучших кандидатов.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5 text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Продукт</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-screeny-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-screeny-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Ресурсы</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-screeny-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Screeny AI. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
