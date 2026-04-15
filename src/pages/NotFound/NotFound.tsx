import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      <div className="z-10 text-center flex flex-col items-center justify-center max-w-lg w-full">
        <h1 className="text-[100px] sm:text-[140px] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-600">
          404
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white mt-2 mb-8">
          Page Not Found
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium text-sm transition-all rounded-full w-full sm:w-auto min-w-[160px]"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>

          <button
            onClick={() => navigate("/")}
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 font-medium text-sm transition-all rounded-full w-full sm:w-auto min-w-[160px]"
          >
            <Home size={16} />
            <span>Return Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
