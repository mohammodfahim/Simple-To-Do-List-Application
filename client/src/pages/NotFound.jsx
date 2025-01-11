import { MdArrowCircleRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen m-0">
      <div className="w-[400px] text-center p-5 bg-slate-500 text-white hover:bg-slate-600 rounded-md shadow-xl shadow-[#d7daff] hover:-translate-y-2 duration-500 transition-all">
        <h1 className="text-7xl m-0">404</h1>
        <h2 className="text-2xl my-2.5">Oops! Page Not Found</h2>
        <p className="text-sm my-2.5">
          It seems the page you&apos;re looking for doesn&apos;t exist. But
          don&apos;t worry, you can get back to your tasks!
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-white text-slate-600 px-4 py-2 rounded-lg hover:-translate-y-1 transition-all duration-500 mt-4 hover:text-white hover:bg-zinc-700 flex justify-center items-center gap-2"
          >
            Go to My To-Do List <MdArrowCircleRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
