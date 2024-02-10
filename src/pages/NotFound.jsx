import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-[450px] flex flex-col  py-20 ">
      <h1 className="text-3xl text-bold text-center">
        {" "}
        OOPS You entered Wrong URL
      </h1>
      <button
        onClick={() => navigate("/")}
        className="bg-red-900 text-white p-3 mx-auto my-5"
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default NotFound;
