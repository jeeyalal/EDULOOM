import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start gap-8 md:p-8 p-4 pt-8">
      <div className="space-y-6 w-full">
        {/* Summary Cards */}
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md bg-white">
            <img src={assets.patients_icon} alt="enrollments icon" className="w-8 h-8" />
            <div>
              <p className="text-2xl font-medium text-gray-700">
                {dashboardData.enrolledStudentsData.length}
              </p>
              <p className="text-sm text-gray-500">Total Enrolments</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md bg-white">
            <img src={assets.appointments_icon} alt="courses icon" className="w-8 h-8" />
            <div>
              <p className="text-2xl font-medium text-gray-700">{dashboardData.totalCourses}</p>
              <p className="text-sm text-gray-500">Total Courses</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md bg-white">
            <img src={assets.earning_icon} alt="earnings icon" className="w-8 h-8" />
            <div>
              <p className="text-2xl font-medium text-gray-700">
                {currency}
                {dashboardData.totalEarnings}
              </p>
              <p className="text-sm text-gray-500">Total Earnings</p>
            </div>
          </div>
        </div>

        {/* Latest Enrollments */}
        <div className="w-full max-w-4xl">
          <h2 className="pb-4 text-lg font-medium">Latest Enrollments</h2>
          <div className="overflow-hidden rounded-md bg-white border border-gray-300">
            <table className="w-full table-fixed md:table-auto">
              <thead className="text-gray-900 border-b border-gray-200 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
                  <th className="px-4 py-3 font-semibold">Student Name</th>
                  <th className="px-4 py-3 font-semibold">Course Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                    <td className="md:px-4 px-2 py-3 flex items-center gap-3">
                      <img
                        src={item.student.imageUrl}
                        alt={item.student.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="truncate">{item.student.name}</span>
                    </td>
                    <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
