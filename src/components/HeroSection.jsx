import { useEffect, useState } from "react";

function HeroSection() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/waitlist")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="mb-6 text-3xl font-bold">
        Registered Users ({users.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="border p-3">Full Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Brand</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border p-3">{user.fullName}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3">{user.phone}</td>
                <td className="border p-3">{user.brand}</td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HeroSection;