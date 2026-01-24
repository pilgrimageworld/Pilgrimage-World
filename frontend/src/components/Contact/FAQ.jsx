import React from "react";
import { ChevronRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How soon will I receive a response?",
      answer:
        "We respond to all inquiries within 24 hours during business days. For urgent matters, call our 24/7 emergency line.",
    },
    {
      question: "Do you provide visa assistance?",
      answer:
        "Yes, we offer comprehensive visa guidance and documentation support for all our pilgrimage destinations.",
    },
    {
      question: "Can I customize my pilgrimage itinerary?",
      answer:
        "Absolutely! We specialize in creating personalized spiritual journeys tailored to your specific needs and preferences.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We offer flexible cancellation policies with full refunds up to 60 days before departure. Please contact us for specific details.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h3>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => (
  <div className="border border-amber-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors">
    <div className="p-6 bg-amber-50 hover:bg-amber-100 transition-colors">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold text-gray-900">{question}</h4>
        <ChevronRight className="h-5 w-5 text-amber-600 transform transition-transform" />
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  </div>
);

export default FAQSection;
