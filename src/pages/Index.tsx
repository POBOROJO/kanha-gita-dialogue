
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Kanha GPT - Conversations with Lord Krishna";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="relative bg-gradient-to-b from-krishna-blue to-krishna-blue/90 min-h-screen overflow-hidden"
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23ffffff\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"
        }}
      >
        <Navbar />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-20 flex flex-col md:flex-row items-center">
          {/* Content */}
          <div className="w-full md:w-1/2 md:pr-8 mb-12 md:mb-0">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Have meaningful conversations with Lord Krishna
            </motion.h1>
            <motion.p 
              className="text-lg text-krishna-darkBlue/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore the teachings of the Bhagavad Gita through insightful and engaging dialogue with Krishna.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                className="bg-krishna-gold hover:bg-amber-500 text-krishna-darkBlue px-8 py-6 rounded-full text-lg transition-all duration-300"
              >
                Start Chatting
              </Button>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="animate-float"
            >
              <img
                src="public/lovable-uploads/dbb9115b-89cf-4049-9a44-cc1bc8690237.png"
                alt="Lord Krishna playing flute"
                className="max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-krishna-blue/90 to-krishna-blue/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Experience Divine Guidance
            </motion.h2>
            <motion.p 
              className="text-lg text-krishna-darkBlue/80 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover the unique features that make Kanha GPT a gateway to ancient wisdom in the modern world.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-krishna-darkBlue" />}
              title="Conversational Interaction"
              description="Engage in natural, flowing dialogues with Krishna for deeper understanding."
            />
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-krishna-darkBlue" />}
              title="Personalized Content"
              description="Receive responses tailored to your queries and spiritual needs."
            />
            <FeatureCard
              icon={<Lightbulb className="h-10 w-10 text-krishna-darkBlue" />}
              title="Easy-to-Understand Answers"
              description="Gain clarity with simplified explanations of complex concepts."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-krishna-blue/70 to-krishna-blue/90">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Users Say
            </motion.h2>
            <motion.p 
              className="text-lg text-krishna-darkBlue/80 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hear from people who have experienced meaningful conversations with Kanha GPT.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Kanha GPT has been a source of comfort and wisdom during difficult times. The answers are profound yet accessible."
              name="Priya Sharma"
              title="Yoga Teacher"
            />
            <TestimonialCard 
              quote="I've been studying the Gita for years, but the conversational format makes the teachings come alive in new ways."
              name="Raj Patel"
              title="Software Engineer"
            />
            <TestimonialCard 
              quote="The personalized responses helped me apply ancient wisdom to modern challenges in my daily life."
              name="Anita Desai"
              title="College Student"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-krishna-blue/90 to-krishna-blue/80">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Begin Your Spiritual Journey Today
          </motion.h2>
          <motion.p 
            className="text-lg text-krishna-darkBlue/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start a conversation with Lord Krishna and discover timeless wisdom that can guide you through life's complexities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="bg-krishna-gold hover:bg-amber-500 text-krishna-darkBlue px-8 py-6 rounded-full text-lg transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

