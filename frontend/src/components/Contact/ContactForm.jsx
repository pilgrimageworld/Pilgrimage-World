import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Globe,
  Users,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pilgrimageType: "",
    travelDate: "",
    groupSize: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const pilgrimageTypes = [
    "Do Dham Yatra",
    "Char Dham Yatra",
    "Hajj Packages",
    "Umrah Package",
    "Kailash Mansarovar Yatra",
    "Vaishno Devi Yatra",
    "Amarnath Yatra",
    "Vrindavan Mathura Yatra",
    "Golden Temple Yatra",
    "Ayodhya Ram Mandir Yatra",
    "Kashi Vishwanath Yatra",
    "Tirupati Balaji Yatra",
    "Shirdi Sai Baba Yatra",
    "Rameshwaram Yatra",
    "Dwarka Somnath Yatra",
    "Ujjain Mahakal Yatra",
    "Bodh Gaya Buddhist Circuit",
    "Hemkund Sahib Yatra",
  ];

  // Validation rules
  const validationRules = {
    name: (value) => {
      if (!value.trim()) return "Full name is required";
      if (value.length < 2) return "Name must be at least 2 characters";
      if (value.length > 50) return "Name cannot exceed 50 characters";
      if (!/^[a-zA-Z\s]+$/.test(value))
        return "Name can only contain letters and spaces";
      return "";
    },
    email: (value) => {
      if (!value) return "Email address is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
      return "";
    },
    phone: (value) => {
      if (!value) return "Phone number is required";
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanedPhone = value.replace(/[\s\-\(\)]/g, "");
      if (!phoneRegex.test(cleanedPhone))
        return "Please enter a valid phone number";
      return "";
    },
    pilgrimageType: (value) => {
      if (!value) return "Please select a pilgrimage type";
      return "";
    },
    travelDate: (value) => {
      if (value) {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) return "Travel date cannot be in the past";
      }
      return "";
    },
    groupSize: (value) => {
      return "";
    },
    message: (value) => {
      if (!value.trim()) return "Please tell us about your spiritual journey";
      if (value.length < 10) return "Message must be at least 10 characters";
      if (value.length > 1000) return "Message cannot exceed 1000 characters";
      return "";
    },
  };

  // Validate individual field
  const validateField = (name, value) => {
    const validator = validationRules[name];
    return validator ? validator(value) : "";
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  // Handle field blur
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name] && touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleGroupSizeChange = (size) => {
    setFormData((prev) => ({ ...prev, groupSize: size }));

    if (errors.groupSize) {
      setErrors((prev) => ({
        ...prev,
        groupSize: "",
      }));
    }
  };

  // Send email using EmailJS
  const sendEmail = async () => {
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_name: "Admin", // This will be replaced with actual admin name in EmailJS
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        pilgrimage_type: formData.pilgrimageType,
        travel_date: formData.travelDate
          ? new Date(formData.travelDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Not specified",
        group_size: formData.groupSize || "Not specified",
        message: formData.message,
        inquiry_date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      console.log("Email sent successfully!", response);
      return { success: true, message: "Email sent successfully!" };
    } catch (error) {
      console.error("Failed to send email:", error);
      return {
        success: false,
        message: error.text || "Failed to send email. Please try again later.",
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((field) => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    // Validate all fields
    const formErrors = validateForm();
    setErrors(formErrors);

    // Check if form is valid
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      try {
        // Send email using EmailJS
        const result = await sendEmail();

        if (result.success) {
          console.log("Form submitted:", formData);
          setIsSubmitted(true);

          // Reset form after 5 seconds
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              pilgrimageType: "",
              travelDate: "",
              groupSize: "",
              message: "",
            });
            setErrors({});
            setTouched({});
            setIsSubmitted(false);
            setSubmitError("");
          }, 5000);
        } else {
          setSubmitError(result.message);
        }
      } catch (error) {
        setSubmitError("An unexpected error occurred. Please try again.");
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
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
              <p className="text-green-100 text-sm mt-2">
                A confirmation email has been sent to {formData.email}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="mb-8 bg-linear-to-r from-red-500 to-red-400 rounded-2xl p-8 text-white">
          <div className="flex items-center">
            <AlertCircle className="h-12 w-12 mr-4" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Submission Error</h3>
              <p className="text-red-100">{submitError}</p>
              <button
                onClick={() => setSubmitError("")}
                className="mt-4 px-4 py-2 bg-white text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                Try Again
              </button>
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

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name *"
              icon={<User className="h-4 w-4 mr-2" />}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={touched.name}
              placeholder="Enter your full name"
            />

            <FormInput
              label="Email Address *"
              icon={<Mail className="h-4 w-4 mr-2" />}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              placeholder="your.email@example.com"
            />

            <FormInput
              label="Phone Number *"
              icon={<Phone className="h-4 w-4 mr-2" />}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              touched={touched.phone}
              placeholder="+1 (555) 123-4567"
            />

            <FormInput
              label="Preferred Travel Date"
              icon={<Calendar className="h-4 w-4 mr-2" />}
              name="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.travelDate}
              touched={touched.travelDate}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Pilgrimage Types Details */}
          <div>
            <label className="block text-gray-900 font-semibold mb-3">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Interested Pilgrimage Type *
              </div>
            </label>
            <select
              name="pilgrimageType"
              value={formData.pilgrimageType}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-amber-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none ${
                errors.pilgrimageType && touched.pilgrimageType
                  ? "border-red-300 focus:ring-red-500"
                  : "border-amber-200 focus:ring-amber-500"
              }`}
            >
              <option value="">Select a pilgrimage journey</option>
              {pilgrimageTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.pilgrimageType && touched.pilgrimageType && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.pilgrimageType}
              </div>
            )}
          </div>

          <GroupSizeSelector
            value={formData.groupSize}
            onChange={handleGroupSizeChange}
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
              onBlur={handleBlur}
              rows="6"
              className={`w-full px-4 py-3 bg-amber-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                errors.message && touched.message
                  ? "border-red-300 focus:ring-red-500"
                  : "border-amber-200 focus:ring-amber-500"
              }`}
              placeholder="Tell us about your spiritual goals, any special requirements, or questions you have about the pilgrimage..."
            />
            {errors.message && touched.message && (
              <div className="flex items-center mt-2 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.message}
              </div>
            )}
          </div>

          {/* Form Status */}
          <div className="pt-4">
            <div
              className={`p-4 rounded-xl mb-6 ${
                Object.keys(errors).some((key) => errors[key] && touched[key])
                  ? "bg-red-50 border border-red-200"
                  : "bg-green-50 border border-green-200"
              }`}
            >
              <div className="flex items-center">
                {Object.keys(errors).some(
                  (key) => errors[key] && touched[key],
                ) ? (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <p className="text-red-800 font-medium">
                        Please fix the errors above before submitting
                      </p>
                      <p className="text-red-600 text-sm mt-1">
                        {
                          Object.keys(errors).filter(
                            (key) => errors[key] && touched[key],
                          ).length
                        }{" "}
                        field(s) need attention
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="text-green-800 font-medium">
                      All fields are properly filled. Ready to submit!
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <SubmitButton
            isSubmitting={isSubmitting}
            hasErrors={Object.keys(errors).some(
              (key) => errors[key] && touched[key],
            )}
          />
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
  onBlur,
  error,
  touched,
  placeholder,
  min,
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
      onBlur={onBlur}
      className={`w-full px-4 py-3 bg-amber-50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
        error && touched
          ? "border-red-300 focus:ring-red-500"
          : "border-amber-200 focus:ring-amber-500"
      }`}
      placeholder={placeholder}
      min={min}
    />
    {error && touched && (
      <div className="flex items-center mt-2 text-red-600 text-sm">
        <AlertCircle className="h-4 w-4 mr-1" />
        {error}
      </div>
    )}
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

const SubmitButton = ({ isSubmitting, hasErrors }) => (
  <div className="pt-6">
    <button
      type="submit"
      disabled={isSubmitting || hasErrors}
      className={`w-full py-4 px-8 bg-linear-to-r from-amber-600 to-orange-500 text-white rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
        isSubmitting || hasErrors
          ? "opacity-70 cursor-not-allowed"
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
