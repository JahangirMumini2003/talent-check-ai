
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook, Mail, MessageSquare } from "lucide-react";

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
    ],
  };

  return (
    <footer className="bg-white pt-20 pb-12 px-6 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="glassmorphism rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-4 py-2 rounded-full bg-screeny-blue/10 text-screeny-blue text-sm font-medium inline-block mb-4">
                Связаться с нами
              </span>
              <h2 className="text-3xl font-bold mb-4">Готовы изменить свой процесс найма?</h2>
              <p className="text-gray-600 mb-6">
                Есть вопросы о Screeny AI? Наша команда поможет вам найти идеальное решение для ваших потребностей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2 rounded-full bg-screeny-blue hover:bg-screeny-blue/90">
                  <Mail className="h-5 w-5" />
                  Написать нам
                </Button>
                <Button variant="outline" className="flex items-center gap-2 rounded-full">
                  <MessageSquare className="h-5 w-5" />
                  Живой чат
                </Button>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-screeny-blue/50"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-screeny-blue/50"
                      placeholder="Ваш email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-screeny-blue/50"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <Button className="btn-gradient w-full rounded-full py-6 flex items-center justify-center gap-2">
                  Отправить сообщение
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>

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
