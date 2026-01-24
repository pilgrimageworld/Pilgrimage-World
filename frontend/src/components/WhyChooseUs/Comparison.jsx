import {
  Award,
  Calendar,
  CheckCircle,
  Headphones,
  MapPin,
  Users,
} from "lucide-react";

const Comparison = () => {
  const comparison = [
    {
      feature: "Group Size",
      us: "12-15 pilgrims",
      others: "25-40 pilgrims",
      icon: <Users className="h-5 w-5" />,
    },
    {
      feature: "Guide Expertise",
      us: "Certified & 5+ years experience",
      others: "Basic certification",
      icon: <Award className="h-5 w-5" />,
    },
    {
      feature: "Accommodation",
      us: "4-star near sacred sites",
      others: "3-star, distant locations",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      feature: "Inclusions",
      us: "All meals & spiritual activities",
      others: "Basic meals only",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      feature: "Support",
      us: "24/7 dedicated coordinator",
      others: "Office hours only",
      icon: <Headphones className="h-5 w-5" />,
    },
    {
      feature: "Flexibility",
      us: "Fully customizable",
      others: "Fixed packages",
      icon: <Calendar className="h-5 w-5" />,
    },
  ];

  return (
    <section className="mb-20">
      <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            The Pilgrimage World Difference
          </h2>
          <p className="text-amber-100 text-lg">
            Compare and see why we're the preferred choice
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-amber-500">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-left bg-amber-700/30">
                  Pilgrimage World
                </th>
                <th className="py-4 px-6 text-left">Other Agencies</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <tr key={index} className="border-b border-amber-500/30">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-white/20 rounded-lg mr-3">
                        {item.icon}
                      </div>
                      <span className="font-semibold">{item.feature}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 bg-amber-700/20">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                      <span className="font-bold">{item.us}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-amber-200">{item.others}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
