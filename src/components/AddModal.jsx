import { useEffect, useState } from "react";
import { X } from "lucide-react";

const AddModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    instance: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.password !== formData.retypePassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  useEffect(() => {
    console.log("formdata", formData);
  }, [formData]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-72 sm:w-3/4 md:w-1/2 ">
        <div className="flex justify-between items-center border mb-2 rounded-t-lg px-5 py-2 sm:mb-[32px]">
          <h2 className="text-lg font-bold sm:text-2xl">Add New Student</h2>
          <button onClick={onClose}>
            <X color="#9E9E9E" size={30} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center px-[30px] sm:flex-row sm:gap-4">
            <div className="w-full">
              <h3>Full Name</h3>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Jhon"
                className="p-2 mb-2 border rounded w-full sm:mb-4"
                required
              />
            </div>
            <div className="w-full">
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="jhondoe@gmail.com"
                className="p-2 mb-2 border rounded w-full sm:mb-4"
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-[30px] sm:flex-row sm:gap-4">
            <div className="w-full">
              <h3>Phone Number</h3>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+62 8453875329"
                className="p-2 mb-2 border rounded w-full sm:mb-4"
                required
              />
            </div>
            <div className="w-full">
              <h3>Instance</h3>
              <input
                type="text"
                name="instance"
                value={formData.instance}
                onChange={handleInputChange}
                placeholder="Telkom University"
                className="p-2 mb-2 border rounded w-full sm:mb-4"
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-center px-[30px] sm:flex-row sm:gap-4">
            <div className="w-full">
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="p-2 mb-2 border rounded w-full sm:mb-4"
                required
              />
            </div>
            <div className="w-full">
              <h3>Re-type password</h3>
              <input
                type="password"
                name="retypePassword"
                value={formData.retypePassword}
                onChange={handleInputChange}
                placeholder="Re-type password"
                className="p-2 mb-2 border rounded w-full sm:mb-4"
                required
              />
            </div>
          </div>
          {error && (
            <div className="px-[30px] mb-4">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
          <div className="flex justify-end border rounded-b-lg px-[30px] mt-3 py-[10px] sm:mt-7 sm:py-[19px]">
            <button type="submit" className="bg-[#A51535] text-white font-bold py-2 px-4 rounded-[5px]">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
