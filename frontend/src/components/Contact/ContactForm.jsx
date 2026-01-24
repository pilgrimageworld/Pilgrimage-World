import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Globe,
  Users,
  Send,
  CheckCircle,
} from "lucide-react";

const ContactForm = () => {
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

    // Reset form after 5 seconds
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

  return (
    <>
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
            <FormInput
              label="Full Name *"
              icon={<User className="h-4 w-4 mr-2" />}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <FormInput
              label="Email Address *"
              icon={<Mail className="h-4 w-4 mr-2" />}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />

            <FormInput
              label="Phone Number *"
              icon={<Phone className="h-4 w-4 mr-2" />}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              required
            />

            <FormInput
              label="Preferred Travel Date"
              icon={<Calendar className="h-4 w-4 mr-2" />}
              name="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={handleChange}
            />
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

          <GroupSizeSelector
            value={formData.groupSize}
            onChange={(size) =>
              setFormData((prev) => ({ ...prev, groupSize: size }))
            }
          />

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
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </div>
    </>
  );
};

const FormInput = ({
  label,
  icon,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div>
    <label className="block text-gray-900 font-semibold mb-3">
      <div className="flex items-center">
        {icon}
        {label}
      </div>
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
      placeholder={placeholder}
    />
  </div>
);

const GroupSizeSelector = ({ value, onChange }) => {
  const sizes = ["Solo", "2 People", "3-5 People", "6+ People"];

  return (
    <div>
      <label className="block text-gray-900 font-semibold mb-3">
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-2" />
          Group Size
        </div>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            className={`p-4 rounded-xl text-center font-medium transition-all ${
              value === size
                ? "bg-linear-to-r from-amber-600 to-orange-500 text-white"
                : "bg-amber-50 text-gray-900 hover:bg-amber-100"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

const SubmitButton = ({ isSubmitting }) => (
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
      By submitting, you agree to our Privacy Policy. We'll contact you within
      24 hours.
    </p>
  </div>
);

export default ContactForm;
