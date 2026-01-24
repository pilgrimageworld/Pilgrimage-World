import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoCards = () => {
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

  return (
    <>
      <div className="space-y-6 mb-12">
        {contactInfo.map((info, index) => (
          <ContactCard key={index} {...info} />
        ))}
      </div>

      <SocialConnectCard />
    </>
  );
};

const ContactCard = ({ icon, title, details, bgColor }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
    <div className={`bg-linear-to-r ${bgColor} p-6 text-white`}>
      <div className="flex items-center">
        <div className="p-3 bg-white/20 rounded-xl mr-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <ul className="space-y-4">
        {details.map((detail, idx) => (
          <li key={idx} className="flex flex-col">
            <span className="text-sm text-gray-600 font-medium">
              {detail.label}
            </span>
            <span className="text-gray-900 font-semibold">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SocialConnectCard = () => (
  <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8">
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
      Connect With Us
    </h3>
    <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
      Follow our journey and get inspiration for your pilgrimage
    </p>

    {/* Mobile: Stack buttons vertically, Desktop: Horizontal */}
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
      {["Facebook", "Instagram", "LinkedIn"].map((platform) => (
        <a
          key={platform}
          target="_blank"
          href={`https://${platform.toLowerCase()}.com`}
          rel="noopener noreferrer"
          className="bg-linear-to-r from-amber-600 to-orange-500 text-white p-3 md:p-4 rounded-lg md:rounded-xl text-center text-sm md:text-base font-semibold hover:opacity-90 transition-opacity flex-1 min-w-0 overflow-hidden"
        >
          <span className="truncate block">{platform}</span>
        </a>
      ))}
    </div>
  </div>
);

export default ContactInfoCards;
