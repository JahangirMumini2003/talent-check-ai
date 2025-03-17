
import React from "react";
import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/Transition";
import { MessageCircle, Mic, BarChart } from "lucide-react";

const ServiceOverview: React.FC = () => {
  const features = [
    {
      icon: <Mic className="h-10 w-10 text-screeny-blue" />,
      title: "AI Asks Questions",
      description: "Our AI conducts interviews using your custom questions tailored to each role."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-screeny-purple" />,
      title: "AI Answers Candidates",
      description: "Candidates can ask questions about the role or company, and our AI provides accurate responses."
    },
    {
      icon: <BarChart className="h-10 w-10 text-screeny-green" />,
      title: "Detailed Ranking",
      description: "Receive a comprehensive report with candidates ranked from best to worst match."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Transition animation="fade-up">
            <span className="px-4 py-2 rounded-full bg-screeny-blue/10 text-screeny-blue text-sm font-medium inline-block mb-4">
              What is Screeny AI
            </span>
          </Transition>
          
          <Transition animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Screeny AI — Your Virtual <span className="gradient-text">Recruiter</span>
            </h2>
          </Transition>
          
          <Transition animation="fade-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Screeny is an AI-powered service that takes over initial interviews. It asks candidates questions, answers their inquiries, and provides a detailed report for each participant. After the interview, you get a ranked list of candidates from best to worst, so you can focus on the most suitable ones.
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
            <a href="#how-it-works">Learn How It Works</a>
          </Button>
        </Transition>
      </div>
    </section>
  );
};

export default ServiceOverview;
