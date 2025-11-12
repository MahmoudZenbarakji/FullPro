import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/api/course');
        setCourses(result.data.data); // Adjust based on your backend response structure
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
            {course.image && (
              <img
                src={`http://localhost:3000/uploads/${course.image}`}
                alt={course.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <p className="text-sm text-gray-500">Created by: {course.user?.name || 'Unknown'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
