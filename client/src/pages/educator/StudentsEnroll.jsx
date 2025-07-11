import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnroll = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className="min-h-screen flex flex-col items-center md:p-8 p-4 pt-8 bg-gray-50">
      <div className="w-full max-w-5xl overflow-x-auto rounded-md shadow bg-white border border-gray-200">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100 border-b border-gray-300 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Course Title</th>
              <th className="px-4 py-3 text-center hidden sm:table-cell">Purchase Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {enrolledStudents.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 text-center hidden sm:table-cell">{index + 1}</td>
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={item.student.imageUrl}
                    alt={item.student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{item.student.name}</span>
                </td>
                <td className="px-4 py-3 truncate">{item.courseTitle}</td>
                <td className="px-4 py-3 text-center hidden sm:table-cell">
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnroll;
