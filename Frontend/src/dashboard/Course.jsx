  import React, { useState, useEffect } from 'react';
  import axios from 'axios';

  const Course = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [lectures, setLectures] = useState(['']);
    const [userId, setUsername] = useState('');
    const [users, setUsers] = useState([]);
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const res = await axios.get('http://localhost:3000/api/users');
          setUsers(res.data.data); // Adjust based on your backend response structure
        } catch (err) {
          console.error('Failed to fetch users', err);
        }
      };
      fetchUsers();
    }, []);

    const handleLectureChange = (index, value) => {
      const updatedLectures = [...lectures];
      updatedLectures[index] = value;
      setLectures(updatedLectures);
    };

    const addLectureField = () => {
      setLectures([...lectures, '']);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      lectures.forEach((lecture, index) => {
        formData.append(`lectures[${index}]`, lecture);
      });
      formData.append('user', userId);
      if (image) {
        formData.append('image', image);
      }

      try {
        const response = await axios.post('http://localhost:3000/api/course', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (response.data.success) {
          setMessage('Course created successfully!');
          setTitle('');
          setDescription('');
          setLectures(['']);
          setUsername('');
          setImage(null);
        }
      } catch (error) {
        console.error(error);
        setMessage('Failed to create course.');
      }
    };

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">Create Course</h2>

          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          />

          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          />

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Lectures</label>
            {lectures.map((lecture, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Lecture ${index + 1}`}
                value={lecture}
                onChange={(e) => handleLectureChange(index, e.target.value)}
                className="w-full mb-2 px-4 py-2 border rounded-md"
              />
            ))}
            <button
              type="button"
              onClick={addLectureField}
              className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700"
            >
              Add Lecture
            </button>
          </div>

          <select
            value={userId}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select a user</option>
            {Array.isArray(users) &&
              users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-4 py-2 border rounded-md"
          />

          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-auto mt-2 rounded"
            />
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Submit Course
          </button>

          {message && <p className="text-center text-sm text-green-600">{message}</p>}
        </form>
      </div>
    );
  };

  export default Course;
