
import React from "react";
import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/Transition";
import { Check } from "lucide-react";

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for trying out Screeny AI",
      price: "0",
      features: [
        "1 free interview",
        "Basic candidate ranking",
        "Email support",
        "Results valid for 14 days"
      ],
      cta: "Get Started for Free",
      href: "#",
      highlighted: false
    },
    {
      name: "Basic Plan",
      description: "Perfect for small teams and startups",
      price: "10",
      unit: "for 10 interviews",
      features: [
        "10 interviews",
        "Advanced candidate ranking",
        "Priority email support",
        "Results stored for 30 days",
        "Custom interview questions"
      ],
      cta: "Buy for $10",
      href: "#",
      highlighted: true
    },
    {
      name: "Custom Plan",
      description: "For businesses with specific needs",
      price: "Custom",
      features: [
        "Unlimited interviews",
        "Custom integration options",
        "Dedicated account manager",
        "Advanced analytics",
        "Results stored for 90 days",
        "White-labeling options"
      ],
      cta: "Contact Us",
      href: "#contact",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Transition animation="fade-up">
            <span className="px-4 py-2 rounded-full bg-screeny-purple/10 text-screeny-purple text-sm font-medium inline-block mb-4">
              Pricing
            </span>
          </Transition>
          
          <Transition animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple and <span className="gradient-text">Affordable</span> Pricing
            </h2>
          </Transition>
          
          <Transition animation="fade-up" delay={200}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for you. Start for free and upgrade as your needs grow.
            </p>
          </Transition>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan, index) => (
            <Transition
              key={plan.name}
              animation="fade-up"
              delay={300 + index * 100}
              className="flex flex-col"
            >
              <div 
                className={`p-8 rounded-2xl h-full card-hover flex flex-col relative ${
                  plan.highlighted 
                    ? "bg-white border-2 border-screeny-blue/30 shadow-xl" 
                    : "glassmorphism"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-screeny-blue text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                  </span>
                  {plan.unit && <span className="text-gray-500 ml-2">{plan.unit}</span>}
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-screeny-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={
                    plan.highlighted
                      ? "btn-gradient rounded-full py-6"
                      : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full py-6"
                  }
                  asChild
                >
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              </div>
            </Transition>
          ))}
        </div>

        <Transition animation="fade-up" delay={600} className="mt-16 text-center">
          <div className="glassmorphism p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 mb-6">
              We offer tailored packages for companies with specific requirements.
              Get in touch to discuss how we can help you scale your hiring process.
            </p>
            <Button
              variant="outline"
              className="rounded-full border-gray-300 hover:bg-gray-50"
              asChild
            >
              <a href="#contact">Contact our sales team</a>
            </Button>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default PricingSection;
