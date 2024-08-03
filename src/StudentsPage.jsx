import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./assets/sultan.svg";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";
import { Search, Settings, ListFilter, Trash2, Edit2, Plus, ArrowUpDown } from "lucide-react";

const StudentDashboard = () => {
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const initialData = [
    {
      id: 1,
      fullName: "Sultan Alexander",
      email: "shalexander@gmail.com",
      phoneNumber: "082323232332",
      instance: "Telkom University",
      password: "Admin#1234",
      createdAt: formatDate(new Date("2024-11-23")),
    },
  ];

  const [data, setData] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleAdd = (newStudent) => {
    const now = new Date();
    setData([
      ...data,
      {
        id: Date.now(),
        ...newStudent,
        createdAt: formatDate(now),
      },
    ]);
    setModalOpen(false);
  };

  const handleEdit = (editedStudent) => {
    setData(
      data.map((student) => (student.id === editedStudent.id ? { ...student, ...editedStudent } : student))
    );
    setEditModalOpen(false);
  };

  const handleDelete = () => {
    if (currentStudent) {
      setData(data.filter((student) => student.id !== currentStudent.id));
      setDeleteModalOpen(false);
      setCurrentStudent(null);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Mengupdate nilai searchTerm setiap kali input berubah
  };

  // Filter data berdasarkan searchTerm
  const filteredData = data.filter((student) =>
    student.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="mx-6 mt-10 mb-10 md:ml-[310px]">
        <h1 className="text-2xl font-bold mb-4">Data Student</h1>
        <div className="flex flex-col justify-between items-start mb-4 lg:flex-row">
          <div className="flex mb-4 items-center gap-2 lg:mb-0">
            <button className="px-4 py-2 border rounded flex items-center gap-2 bg-white">
              <ListFilter size={20} />
              <span>Filters</span>
            </button>
            <button
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded gap-2"
              onClick={() => setModalOpen(true)}
            >
              <Plus size={20} />
              <span>Add User</span>
            </button>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded w-40 sm:w-72 lg:w-80"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="absolute left-3 top-2.5 h-5 text-gray-400" />
            </div>
            <button className="px-4 py-2 border rounded flex items-center bg-white">
              <Settings size={20} />
            </button>
          </div>
        </div>

        <div className="bg-white border overflow-auto rounded-md">
          <table className="w-full">
            <thead>
              <tr className="text-[#8A92A6] bg-[#F9FAFB] border">
                <th className="p-3 text-sm">
                  Profile <ArrowUpDown size={16} className="inline-block" />
                </th>
                <th className="p-3 text-sm">
                  Full Name <ArrowUpDown size={16} className="inline-block" />
                </th>
                <th className="p-3 text-sm">
                  Email Address <ArrowUpDown size={16} className="inline-block" />
                </th>
                <th className="p-3 text-sm">
                  Phone Number <ArrowUpDown size={16} className="inline-block" />
                </th>
                <th className="p-3 text-sm">
                  Instance <ArrowUpDown size={16} className="inline-block" />
                </th>
                <th className="p-3 text-sm">
                  Created At <ArrowUpDown size={16} className="inline-block" />
                </th>
                <th className="p-3 text-sm">
                  Actions <ArrowUpDown size={16} className="inline-block" />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((student) => (
                <tr key={student.id} className="border-b text-center">
                  <td className="flex items-center justify-center py-4 pl-2">
                    <img src={Hero} alt={student.name} className="w-10 h-10 rounded-full mr-2" />
                  </td>
                  <td className="p-3 text-sm">
                    <strong>{student.fullName}</strong>
                  </td>
                  <td className="p-3 text-sm">
                    <strong>{student.email}</strong>
                  </td>
                  <td className="p-3 text-sm">
                    <strong>{student.phoneNumber}</strong>
                  </td>
                  <td className="p-3 text-sm">
                    <strong>{student.instance}</strong>
                  </td>
                  <td className="p-3 text-sm">
                    <strong>{student.createdAt}</strong>
                  </td>
                  <td className="p-3 pr-2">
                    <button className="text-red-600 mr-2">
                      <Trash2
                        size={19}
                        onClick={() => {
                          setCurrentStudent(student);
                          setDeleteModalOpen(true);
                        }}
                      />
                    </button>
                    <button className="text-yellow-600 ml-2">
                      <Edit2
                        size={19}
                        onClick={() => {
                          setCurrentStudent(student);
                          setEditModalOpen(true);
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center">
            <button className="px-2 py-1 mx-5 my-3  border rounded font-normal lg:font-bold lg:px-4 lg:py-2">
              Previous
            </button>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    page === 1 ? "bg-red-600 text-white" : "border"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="px-2 py-1 mx-5 my-3  border rounded font-normal lg:font-bold lg:px-4 lg:py-2">
              Next
            </button>
          </div>
        </div>
        {modalOpen && <AddModal onClose={() => setModalOpen(false)} onSubmit={handleAdd} />}
        {editModalOpen && (
          <EditModal student={currentStudent} onClose={() => setEditModalOpen(false)} onSubmit={handleEdit} />
        )}
        {deleteModalOpen && (
          <DeleteModal
            onClose={() => {
              setDeleteModalOpen(false);
              setCurrentStudent(null);
            }}
            onConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
