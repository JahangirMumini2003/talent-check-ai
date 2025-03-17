
import React from "react";
import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/Transition";
import { 
  FileText, 
  HelpCircle, 
  Link as LinkIcon, 
  User, 
  FileBarChart, 
  List 
} from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Create a Vacancy",
      description: "Specify the job title, description, and requirements for the position."
    },
    {
      icon: <List className="h-8 w-8" />,
      title: "Set Up Questions",
      description: "Add your list of interview questions for candidates to answer."
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: "Add Info for AI",
      description: "Upload company details so the AI can answer candidates' questions accurately."
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: "Generate a Link",
      description: "Get a unique link for the vacancy to include in your job postings."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Candidate Takes the Interview",
      description: "Candidates follow the link, answer AI questions, and ask their own."
    },
    {
      icon: <FileBarChart className="h-8 w-8" />,
      title: "Receive a Report",
      description: "Get a detailed performance report with candidates ranked from best to worst."
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
              Step-By-Step Process
            </span>
          </Transition>
          
          <Transition animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Screeny AI <span className="gradient-text">Simplifies Hiring</span>
            </h2>
          </Transition>
          
          <Transition animation="fade-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes it easy to automate your initial interviews,
              saving you valuable time and helping you identify the best candidates efficiently.
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
            <a href="#pricing">Create Your First Vacancy</a>
          </Button>
        </Transition>
      </div>
    </section>
  );
};

export default HowItWorks;
