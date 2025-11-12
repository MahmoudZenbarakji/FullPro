import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const result = await axios.get(`http://localhost:3000/api/course/${id}`);
        setCourse(result.data.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
      <p className="mb-4 text-gray-700">{course.description}</p>
      {course.image && (
        <img
          src={`http://localhost:3000/uploads/${course.image}`}
          alt={course.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <p className="text-sm text-gray-500 mb-6">Created by: {course.user?.name || 'Unknown'}</p>

      {/* Lectures Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-blue-700">Lectures</h3>
        {course.lectures && course.lectures.length > 0 ? (
          <ul className="space-y-4">
            {course.lectures.map((lecture, index) => (
              <li key={lecture._id || index} className="bg-white p-4 rounded shadow">
                <h4 className="text-lg font-medium text-gray-800">
                  {index + 1}. {lecture.title}
                </h4>
                <p className="text-gray-600">{lecture.description}</p>
                {lecture.videoUrl && (
                  <video
                    controls
                    src={`http://localhost:3000/uploads/${lecture.videoUrl}`}
                    className="w-full mt-2 rounded"
                  />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No lectures available for this course.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
