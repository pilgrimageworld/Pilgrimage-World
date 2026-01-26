const ImportantDetails = ({ importantNotes }) => {
  return (
    importantNotes && (
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">
          Important Notes
        </h2>
        <div className="space-y-4">
          {importantNotes.map((note, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-yellow-50 rounded-xl border border-yellow-100"
            >
              <span className="text-yellow-600 font-bold mr-3">
                {index + 1}.
              </span>
              <span className="text-gray-800">{note}</span>
            </div>
          ))}
        </div>
      </section>
    )
  );
};

export default ImportantDetails;
