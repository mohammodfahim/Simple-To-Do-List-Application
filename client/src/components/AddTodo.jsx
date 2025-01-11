/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdAdd, MdDelete, MdUpdate } from "react-icons/md";
import { AuthContext } from "../context/authContext";

const TodoPopup = ({ handleSubmit, editingId }) => {
  const { visible, setVisible, title, setTitle, description, setDescription } =
    useContext(AuthContext);

  return (
    <div>
      {visible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-center capitalize text-xl border-b border-gray-400 text-gray-600 font-semibold mb-5 pb-2">
              {editingId ? "Edit Todo" : "Add Todo"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-8">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add Title"
                className="outline-none px-3 py-2 rounded-md w-full border border-gray-400 shadow-lg shadow-[#dae0ff] placeholder:text-sm hover:-translate-y-2 duration-500 transition-all"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add Description"
                className="outline-none px-3 py-2 border border-gray-400 rounded-md w-full h-[200px] shadow-lg shadow-[#dae0ff] placeholder:text-sm hover:-translate-y-2 duration-500 transition-all"
              />
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="border border-gray-400 rounded-md text-sm font-semibold w-1/3 py-1.5 flex justify-center items-center gap-2 hover:translate-x-2 duration-300 transition-all bg-slate-600 text-white hover:bg-white hover:text-black"
                >
                  {editingId ? "Update" : "Add"}{" "}
                  {editingId ? <MdUpdate /> : <MdAdd />}
                </button>
                <p className="text-gray-400">|</p>
                <button
                  type="button"
                  onClick={() => setVisible(!visible)}
                  className="border border-gray-400 rounded-md text-sm font-semibold w-1/3 py-1.5 flex justify-center items-center gap-2 hover:-translate-x-2 transition-all duration-300 hover:bg-slate-600 hover:text-white"
                >
                  Remove <MdDelete />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoPopup;
