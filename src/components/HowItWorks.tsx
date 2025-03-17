
import React from "react";
import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/Transition";
import { 
  FileText, 
  HelpCircle, 
  Link as LinkIcon, 
  User, 
  FileBarChart, 
  List,
  Video
} from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Создайте вакансию",
      description: "Укажите название, описание и требования к должности."
    },
    {
      icon: <List className="h-8 w-8" />,
      title: "Настройте вопросы",
      description: "Добавьте список вопросов для собеседования с кандидатами."
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: "Добавьте информацию для ИИ",
      description: "Загрузите данные о компании, чтобы ИИ мог точно отвечать на вопросы кандидатов."
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: "Сгенерируйте ссылку",
      description: "Получите уникальную ссылку для вакансии и включите ее в объявление о работе."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Кандидат проходит видео-интервью",
      description: "Кандидаты переходят по ссылке, отвечают на вопросы ИИ по видео и задают свои."
    },
    {
      icon: <FileBarChart className="h-8 w-8" />,
      title: "Получите отчет",
      description: "Получите подробный отчет с ранжированием кандидатов от лучшего к худшему."
    }
  ];

  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-gray-50/80 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-screeny-blue/5 to-screeny-purple/5" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Transition animation="fade-up">
            <span className="px-4 py-2 rounded-full bg-screeny-green/10 text-screeny-green text-sm font-medium inline-block mb-4">
              Пошаговый процесс
            </span>
          </Transition>
          
          <Transition animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Как Screeny AI <span className="gradient-text">упрощает подбор персонала</span>
            </h2>
          </Transition>
          
          <Transition animation="fade-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Наш упрощенный процесс позволяет автоматизировать первичные собеседования, экономя ваше время и помогая эффективно выявлять лучших кандидатов.
            </p>
          </Transition>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <Transition
              key={step.title}
              animation="fade-up"
              delay={300 + index * 100}
              className="flex flex-col"
            >
              <div className="glassmorphism p-8 rounded-2xl h-full card-hover flex flex-col relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-lg font-bold gradient-text">{index + 1}</span>
                </div>
                
                <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </Transition>
          ))}
        </div>

        <Transition animation="fade-up" delay={900} className="mt-16 text-center">
          <Button
            className="btn-gradient rounded-full px-8 py-6 text-lg mx-auto"
            asChild
          >
            <a href="#pricing">Создать первую вакансию</a>
          </Button>
        </Transition>
      </div>
    </section>
  );
};

export default HowItWorks;
