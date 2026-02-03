import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfoCards = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-amber-500 to-orange-400 p-6 text-white">
        <h3 className="text-xl font-bold">Contact Information</h3>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Contact Number</p>
            <p className="font-semibold text-gray-900">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Email Address</p>
            <p className="font-semibold text-gray-900">info@airparadise.in</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Office Location</p>
            <p className="font-semibold text-gray-900">
              C-143, 1st Floor, Naraina Industrial Area, Phase-1, New
              Delhi-110028.
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Business Hours</p>
            <p className="font-semibold text-gray-900">
              Mon – Sat: 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
