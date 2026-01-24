import React from "react";

const Map = () => {
  const latitude = 28.629709;
  const longitude = 77.1347409;

  return (
    <section className="mt-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Find Our Office
          </h3>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Google Map */}
            <div className="md:col-span-2 h-full">
              <div className="h-full min-h-64 rounded-xl overflow-hidden">
                <iframe
                  title="Google Map"
                  src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Info Blocks */}
            <div className="space-y-6">
              <InfoBlock
                title="Headquarters"
                content={[
                  "123 Spiritual Ave",
                  "Faith City, FC 10001",
                  "United States",
                ]}
              />
              <InfoBlock
                title="Parking"
                content={[
                  "Free visitor parking available",
                  "Accessible parking spaces",
                  "Underground garage",
                ]}
              />
              <InfoBlock
                title="Public Transport"
                content={[
                  "Bus: Lines 12, 45, 78",
                  "Subway: Faith City Station",
                  "Train: Spiritual Line",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({ title, content }) => (
  <div>
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-700">
      {content.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  </div>
);

export default Map;
