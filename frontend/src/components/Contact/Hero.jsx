import { Mail, Phone, MapPin, Clock, Heart, Globe, Users } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-amber-600 via-orange-500 to-amber-700 text-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Animated floating elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-pulse">
        <Heart className="h-16 w-16" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-pulse delay-700">
        <Globe className="h-20 w-20" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20 animate-bounce">
        <Users className="h-12 w-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connect With Divine
              <span className="block">
                <span className="text-white">Guidance &</span>
                <span className="bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  {" "}
                  Spiritual Support
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 leading-relaxed max-w-3xl mx-auto">
              Your journey to sacred destinations begins with a conversation.
              Our spiritual travel experts are here to guide you every step of
              the way.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-4">
              <Heart className="h-6 w-6 text-red-300" fill="currentColor" />
              <span className="font-semibold text-lg">
                24/7 Compassionate Support for Your Spiritual Journey
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
