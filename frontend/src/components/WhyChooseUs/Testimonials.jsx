import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Thompson",
      location: "New York, USA",
      journey: "Camino de Santiago 2023",
      text: "The spiritual guidance and attention to detail were exceptional. Every moment was meaningful.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      journey: "Char Dham Yatra",
      text: "They handled all logistics perfectly, allowing us to focus entirely on our spiritual journey.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    },
    {
      name: "Carlos Rodriguez",
      location: "Mexico City, Mexico",
      journey: "Holy Land Pilgrimage",
      text: "Life-changing experience. The local guides had profound knowledge that enriched our journey.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400",
    },
  ];
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Hear From Our Pilgrims
        </h2>
        <p className="text-lg text-gray-700">
          Real stories from those who've journeyed with us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
              />
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
                <p className="text-amber-600 font-semibold text-sm">
                  {testimonial.journey}
                </p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-current"
                />
              ))}
            </div>

            <p className="text-gray-700 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
