import { Award, Headphones, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const ValueProposition = () => {
  return (
    <section className="mb-12">
      <div className="bg-linear-to-r from-amber-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Wallet className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">Best Value</h3>
            <p className="text-amber-100">
              Premium experiences at competitive prices with no hidden costs
            </p>
          </div>

          <div className="text-center p-6 border-l border-r border-amber-500/50">
            <Headphones className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">Dedicated Support</h3>
            <p className="text-amber-100">
              Personal coordinator from planning through journey completion
            </p>
          </div>

          <div className="text-center p-6">
            <Award className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">Quality Guarantee</h3>
            <p className="text-amber-100">
              If any aspect doesn't meet expectations, we make it right
            </p>
          </div>
        </div>

        <div className="text-center mt-10 pt-8 border-t border-amber-500/50">
          {/* <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors duration-300"
          >
            Start Your Journey
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a> */}

          <Link
            to="/contact#book-now"
            className="inline-flex items-center px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors duration-300"
          >
            Start Your Journey
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ValueProposition;
