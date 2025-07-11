import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';

const MyCourse = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setCourses(allCourses);
  }, [allCourses]);

  return courses ? (
    <div className="min-h-screen w-full flex flex-col items-center md:px-8 px-4 py-8 bg-gray-50">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Courses</h2>

        <div className="overflow-x-auto rounded-lg shadow bg-white border border-gray-200">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 border-b border-gray-200 text-gray-700 text-sm">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Course</th>
                <th className="px-6 py-4 text-left font-medium">Earnings</th>
                <th className="px-6 py-4 text-left font-medium">Students</th>
                <th className="px-6 py-4 text-left font-medium">Published On</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={course.courseThumbnail}
                      alt={course.courseTitle}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                    <span className="truncate max-w-[200px]">{course.courseTitle}</span>
                  </td>

                  <td className="px-6 py-4">
                    {currency}{' '}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice - (course.discount * course.coursePrice) / 100)
                    )}
                  </td>

                  <td className="px-6 py-4">{course.enrolledStudents.length}</td>
                  <td className="px-6 py-4">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourse;
