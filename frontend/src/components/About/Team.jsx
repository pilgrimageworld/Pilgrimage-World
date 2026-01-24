const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      experience: "15+ years in pilgrimage tourism",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
    {
      name: "David Chen",
      role: "Operations Director",
      experience: "Expert in Middle Eastern pilgrimages",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400",
    },
    {
      name: "Maria Rodriguez",
      role: "Tour Coordinator",
      experience: "Specialist in European pilgrim routes",
      img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400",
    },
  ];

  return (
    <section className="mb-20">
      <div className="px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meet Our Expert Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-700">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
