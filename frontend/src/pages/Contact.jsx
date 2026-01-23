// components/Contact.js
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Globe,
  User,
  Calendar,
  Users,
  ChevronRight,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    journeyType: "",
    travelDate: "",
    groupSize: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        journeyType: "",
        travelDate: "",
        groupSize: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        { label: "General Inquiries", value: "+1 (555) 123-4567" },
        { label: "Emergency 24/7", value: "+1 (555) 987-6543" },
        { label: "Group Bookings", value: "+1 (555) 456-7890" },
      ],
      bgColor: "from-amber-500 to-orange-400",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        { label: "General", value: "info@pilgrimageworld.com" },
        { label: "Bookings", value: "bookings@pilgrimageworld.com" },
        { label: "Support", value: "support@pilgrimageworld.com" },
      ],
      bgColor: "from-orange-500 to-red-400",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Locations",
      details: [
        {
          label: "Headquarters",
          value: "123 Spiritual Ave, Faith City, FC 10001",
        },
        {
          label: "Regional Office",
          value: "456 Sacred St, Devotion Town, DT 20002",
        },
        {
          label: "International",
          value: "789 Pilgrim Rd, Harmony City, HC 30003",
        },
      ],
      bgColor: "from-amber-600 to-orange-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        { label: "Monday - Friday", value: "8:00 AM - 8:00 PM" },
        { label: "Saturday", value: "9:00 AM - 6:00 PM" },
        { label: "Sunday", value: "10:00 AM - 4:00 PM" },
        { label: "24/7 Emergency", value: "Always Available" },
      ],
      bgColor: "from-orange-400 to-amber-500",
    },
  ];

  const journeyTypes = [
    "Camino de Santiago",
    "Holy Land Pilgrimage",
    "Char Dham Yatra",
    "Umrah/Hajj",
    "Mount Kailash",
    "Japanese Temples",
    "European Sacred Sites",
    "Custom Spiritual Journey",
  ];

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

  const quickLinks = [
    { label: "Pilgrimage Planning Guide", href: "/guides/planning" },
    { label: "Required Documents Checklist", href: "/checklists/documents" },
    { label: "Health & Safety Information", href: "/health-safety" },
    { label: "Packing List for Pilgrimages", href: "/guides/packing" },
    { label: "Cultural Etiquette Guide", href: "/guides/etiquette" },
    { label: "Payment Options", href: "/payment" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`bg-linear-to-r ${info.bgColor} p-6 text-white`}
                  >
                    <div className="flex items-center">
                      <div className="p-3 bg-white/20 rounded-xl mr-4">
                        {info.icon}
                      </div>
                      <h3 className="text-xl font-bold">{info.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="flex flex-col">
                          <span className="text-sm text-gray-600 font-medium">
                            {detail.label}
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {detail.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-2xl p-8 text-white mb-12">
              <h3 className="text-xl font-bold mb-6">Quick Resources</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h3>
              <p className="text-gray-700 mb-6">
                Follow our journey and get inspiration for your pilgrimage
              </p>
              <div className="flex space-x-4">
                {["Facebook", "Instagram", "Twitter", "YouTube"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href={`https://${platform.toLowerCase()}.com`}
                      className="flex-1 bg-linear-to-r from-amber-600 to-orange-500 text-white p-4 rounded-xl text-center font-semibold hover:opacity-90 transition-opacity"
                    >
                      {platform}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-8 bg-linear-to-r from-green-500 to-emerald-400 rounded-2xl p-8 text-white">
                <div className="flex items-center">
                  <CheckCircle className="h-12 w-12 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-green-100">
                      Your inquiry has been received. Our pilgrimage expert will
                      contact you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-linear-to-r from-amber-600 to-orange-500 rounded-xl mr-4">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Send Your Inquiry
                  </h2>
                  <p className="text-gray-700">
                    Fill out the form below and we'll get back to you promptly
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-3">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Full Name *
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address *
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-3">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Phone Number *
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Preferred Travel Date
                      </div>
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Journey Details */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Interested Journey Type *
                    </div>
                  </label>
                  <select
                    name="journeyType"
                    value={formData.journeyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select a pilgrimage journey</option>
                    {journeyTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-3">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Group Size
                    </div>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Solo", "2 People", "3-5 People", "6+ People"].map(
                      (size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              groupSize: size,
                            }))
                          }
                          className={`p-4 rounded-xl text-center font-medium transition-all ${
                            formData.groupSize === size
                              ? "bg-linear-to-r from-amber-600 to-orange-500 text-white"
                              : "bg-amber-50 text-gray-900 hover:bg-amber-100"
                          }`}
                        >
                          {size}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-3">
                    Your Spiritual Journey Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your spiritual goals, any special requirements, or questions you have about the pilgrimage..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 bg-linear-to-r from-amber-600 to-orange-500 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                      isSubmitting
                        ? "opacity-80 cursor-not-allowed"
                        : "hover:opacity-90 hover:scale-[1.02]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Sending Your Inquiry...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-3" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                  <p className="text-gray-600 text-sm mt-4 text-center">
                    By submitting, you agree to our Privacy Policy. We'll
                    contact you within 24 hours.
                  </p>
                </div>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-amber-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors"
                  >
                    <div className="p-6 cursor-pointer bg-amber-50 hover:bg-amber-100 transition-colors">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-gray-900">
                          {faq.question}
                        </h4>
                        <ChevronRight className="h-5 w-5 text-amber-600 transform transition-transform" />
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/faq"
                  className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700"
                >
                  View All FAQ
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Find Our Office
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="bg-linear-to-r from-amber-600 to-orange-500 h-64 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    Interactive Map Here
                    <br />
                    <span className="text-sm font-normal">
                      (Google Maps Integration)
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Headquarters
                    </h4>
                    <p className="text-gray-700">
                      123 Spiritual Ave
                      <br />
                      Faith City, FC 10001
                      <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Parking</h4>
                    <p className="text-gray-700">
                      Free visitor parking available
                      <br />
                      Accessible parking spaces
                      <br />
                      Underground garage
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Public Transport
                    </h4>
                    <p className="text-gray-700">
                      Bus: Lines 12, 45, 78
                      <br />
                      Subway: Faith City Station
                      <br />
                      Train: Spiritual Line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Your Spiritual Journey?
            </h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Call us now for immediate assistance or schedule a personal
              consultation with our pilgrimage experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 (555) 123-4567
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
