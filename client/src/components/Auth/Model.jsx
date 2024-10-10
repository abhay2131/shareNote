import Container from "./Container";

const Model = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;
  return (
    <div className=" fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-md shadow-lg  rounded-lg">
        <button
          className="absolute top-4 right-4 text-3xl text-gray-300"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        <Container />
      </div>
    </div>
  );
};

export default Model;
