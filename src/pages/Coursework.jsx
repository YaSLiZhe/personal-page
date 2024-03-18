import PageNav from "../components/PageNav";
function Coursework() {
  const courseworkData = [
    {
      id: 1,
      title: "CISC 672 COMPILER CONSTRUCTION",
      grade: "A",
      description:
        "A course to implement a complete compiler using Swift ANTLR",
      notes: "", // No notes for this coursework
    },
    {
      id: 2,
      title: "CISC 681 ARTIFICIAL INTELLIGENCE",
      grade: "A",
      description:
        "An introduction to the field of AI including Intelligent agents, Search, Games, Constraint Satisfaction Problems, Markov Decision Processes, Reinforcement Learning, Probability, Bayes Nets, Decision Networks – Value of Information, Hidden Markov Models (time allowing), Machine Learning, AI and society.",
      notes: "https://github.com/luomi16/AI-algorithm-solutions",
    },
    {
      id: 2,
      title: "CISC 650 COMPUTER NETWORKS II",
      grade: "A",
      description:
        "This course examines how the Internet works. Mainly about the internet's foundational principles and architectures and the design techniques employed in computer and communication networks",
      notes: "",
    },
  ];
  return (
    <div>
      <PageNav />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            My Coursework
          </h1>
          <div className="grid gap-6">
            {/* Map through courseworkData to render coursework items */}
            {courseworkData.map((coursework) => (
              <div
                key={coursework.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {coursework.title}
                  </h2>
                  <div
                    className={`text-${
                      coursework.grade === "A" ? "green" : "yellow"
                    }-500 font-bold`}
                  >
                    Grade: {coursework.grade}
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{coursework.description}</p>
                {coursework.notes ? (
                  <a
                    href={coursework.notes}
                    className="text-blue-500 hover:underline mt-2 block"
                  >
                    View Course Notes
                  </a>
                ) : (
                  <span className="text-gray-400 mt-2 block">
                    No notes available
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursework;
