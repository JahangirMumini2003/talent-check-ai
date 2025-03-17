
import React from "react";
import { Button } from "@/components/ui/button";
import Transition from "@/components/ui/Transition";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-screeny-blue/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-screeny-purple/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-screeny-green/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <Transition animation="fade-up" delay={100}>
              <span className="px-4 py-2 rounded-full bg-screeny-purple/10 text-screeny-purple text-sm font-medium inline-block mb-4">
                AI-Powered Recruiting Assistant
              </span>
            </Transition>

            <Transition animation="fade-up" delay={200}>
              <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold leading-tight">
                Stop Wasting Time on <span className="gradient-text">First Rounds</span> — We'll Handle It for You!
              </h1>
            </Transition>

            <Transition animation="fade-up" delay={300}>
              <p className="text-lg text-gray-600 max-w-lg">
                Screeny AI is your smart hiring assistant. Save time and find the best candidates faster with our AI-powered interview platform.
              </p>
            </Transition>

            <Transition animation="fade-up" delay={400}>
              <div className="flex flex-col xs:flex-row gap-4">
                <Button className="btn-gradient rounded-full px-8 py-6 text-lg">
                  Try For Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-gray-300 hover:bg-gray-50">
                  Watch Demo
                </Button>
              </div>
            </Transition>

            <Transition animation="fade-up" delay={500}>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">250+</span> companies trust Screeny AI
                </div>
              </div>
            </Transition>
          </div>

          <Transition
            className="relative flex justify-center items-center"
            animation="blur-in"
            delay={300}
            duration={800}
          >
            <div className="relative w-full aspect-square max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-screeny-blue/20 to-screeny-purple/20 rounded-3xl transform rotate-3 animate-float" />
              <div className="absolute inset-0 glassmorphism rounded-3xl -rotate-3 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                {/* Interactive illustration showing the AI interview process */}
                <div className="w-[90%] h-[90%] rounded-2xl overflow-hidden bg-white/60 p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="text-xs text-gray-500 ml-2">Screeny AI Interview</div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-gray-700 max-w-[80%]">
                        Tell me about your experience with React.js
                      </div>
                    </div>
                    
                    <div className="flex gap-4 flex-row-reverse mb-4">
                      <div className="w-8 h-8 rounded-full bg-screeny-blue/20 flex-shrink-0" />
                      <div className="bg-screeny-blue/10 rounded-2xl rounded-tr-none px-4 py-2 text-sm text-gray-700 max-w-[80%]">
                        I have 3 years of experience working with React, building responsive web applications...
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-gray-700 max-w-[80%]">
                        What do you know about our company?
                      </div>
                    </div>
                    
                    <div className="flex gap-4 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-screeny-blue/20 flex-shrink-0" />
                      <div className="bg-screeny-blue/10 rounded-2xl rounded-tr-none px-4 py-2 text-sm text-gray-700 max-w-[80%]">
                        I've researched that your company specializes in...
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-10 bg-gray-100 rounded-full flex items-center px-4 mt-4">
                    <div className="text-xs text-gray-400">Type your answer...</div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
