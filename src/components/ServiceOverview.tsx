
import React from "react";
import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/Transition";
import { MessageCircle, Video, BarChart } from "lucide-react";

const ServiceOverview: React.FC = () => {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-screeny-blue" />,
      title: "ИИ задает вопросы через видео",
      description: "Наш ИИ проводит собеседования по видеосвязи, используя специальные вопросы для каждой роли."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-screeny-purple" />,
      title: "ИИ отвечает кандидатам через видео",
      description: "Кандидаты могут задавать вопросы о должности или компании, и наш ИИ предоставляет точные ответы."
    },
    {
      icon: <BarChart className="h-10 w-10 text-screeny-green" />,
      title: "Подробный рейтинг кандидатов",
      description: "Получите комплексный отчет с ранжированием кандидатов от наиболее до наименее подходящих."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Transition animation="fade-up">
            <span className="px-4 py-2 rounded-full bg-screeny-blue/10 text-screeny-blue text-sm font-medium inline-block mb-4">
              Что такое Screeny AI
            </span>
          </Transition>
          
          <Transition animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Screeny AI — ваш <span className="gradient-text">виртуальный рекрутер</span>
            </h2>
          </Transition>
          
          <Transition animation="fade-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Screeny — это сервис на базе искусственного интеллекта, который проводит первичные собеседования в видеоформате. Он задает вопросы кандидатам через видео, отвечает на их вопросы в реальном времени и формирует подробный отчет по каждому участнику. После интервью вы получаете список кандидатов, ранжированный от лучшего к худшему.
            </p>
          </Transition>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Transition 
              key={feature.title} 
              animation="fade-up" 
              delay={300 + index * 100}
              className="flex flex-col"
            >
              <div className="glassmorphism p-8 rounded-2xl h-full card-hover flex flex-col">
                <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
              </div>
            </Transition>
          ))}
        </div>

        <Transition animation="fade-up" delay={600} className="mt-12 text-center">
          <Button
            className="btn-gradient rounded-full px-8 py-6 text-lg mx-auto"
            asChild
          >
            <a href="#how-it-works">Узнать, как это работает</a>
          </Button>
        </Transition>
      </div>
    </section>
  );
};

export default ServiceOverview;
