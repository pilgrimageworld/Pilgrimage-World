import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Mumbai, India",
      text: "The Char Dham Yatra was a life-changing experience. Everything was perfectly organized, and the team was very supportive throughout the journey.",
      rating: 5,
    },
    {
      name: "Fatima Al-Rashid",
      location: "Dubai, UAE",
      text: "Our Umrah package exceeded all expectations. The accommodations were excellent, and our guide was extremely knowledgeable and helpful.",
      rating: 5,
    },
    {
      name: "John Peterson",
      location: "London, UK",
      text: "I traveled to India for the Do Dham Yatra. The spiritual experience combined with professional service made this journey unforgettable.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Pilgrim Experiences
          </h2>
          <p className="text-lg text-gray-600">
            Hear from those who have embarked on sacred journeys with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
