import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Calendar, ChevronDown } from "lucide-react";
import totalStudents from "./assets/totalStudents.svg";
import totalCertifiedStudents from "./assets/totalCertifiedStudents.svg";
import averageCertificationScore from "./assets/averageCertificationScore.svg";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = [
  { name: "Back End", students: 289 },
  { name: "Front End", students: 200 },
  { name: "Quality Assurance", students: 310 },
  { name: "UI/UX", students: 130 },
];

const chartData = {
  labels: data.map((item) => item.name),
  datasets: [
    {
      label: "Number of Students",
      data: data.map((item) => item.students),
      backgroundColor: "#A51535",
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const StatCard = ({ title, value, img, change }) => (
  <div className="bg-white p-4 rounded-lg shadow flex flex-col w-full">
    <div className="flex gap-2 justify-between items-center mb-2">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <img src={img} className="w-9" />
    </div>
    <p className="text-2xl font-semibold mb-2">{value}</p>
    <p className="text-green-500 text-sm">{change}</p>
  </div>
);

const DashboardPage = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="mx-6 mt-10 mb-10 md:ml-[310px]">
        <div className="mb-6 gap-2 flex flex-col items-start justify-start sm:flex-row sm:justify-between">
          <div className="flex gap-4 bg-white px-3 py-2 rounded-md shadow">
            <Calendar size={20} color="#64748B" />
            <span className="text-[#64748B] text-sm">Dec 29, 2023 - Jan 4, 2024</span>
          </div>
          <div className="flex gap-4 bg-white px-3 py-2 rounded-md shadow">
            <span className="text-[#64748B] text-sm">Daily</span>
            <ChevronDown size={20} color="#64748B" />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-2 mb-6 sm:flex-row">
          <StatCard title="Total Students" value="513" img={totalStudents} change="8.5% Up from yesterday" />
          <StatCard
            title="Total Certified Students"
            value="489"
            img={totalCertifiedStudents}
            change="8.5% Up from yesterday"
          />
          <StatCard
            title="Average Certification Score"
            value="84.62"
            img={averageCertificationScore}
            change="8.5% Up from yesterday"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Student</h2>
          <div className="h-[300px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
