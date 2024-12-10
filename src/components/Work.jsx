import React, { useState } from "react";

const RolesAndPermissions = () => {
  const [roles, setRoles] = useState([
    {
      role: "Admin",
      permissions: ["✔️", "✔️", "✔️", "✔️"],
      status: "Active",
    },
    {
      role: "Viewer",
      permissions: ["❌", "❌", "❌", "❌"],
      status: "Inactive",
    },
    {
      role: "Manager",
      permissions: ["✔️", "❌", "✔️", "❌"],
      status: "Active",
    },
    {
      role: "Editor",
      permissions: ["❌", "✔️", "❌", "✔️"],
      status: "Inactive",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [form, setForm] = useState({
    role: "",
    permissions: Array(4).fill("❌"),
    status: "Inactive",
  });

  const openModal = (role) => {
    setCurrentRole(role);
    setForm(
      role
        ? { ...role }
        : { role: "", permissions: Array(4).fill("❌"), status: "Inactive" }
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handlePermissionChange = (index, value) => {
    const updatedPermissions = [...form.permissions];
    updatedPermissions[index] = value;
    setForm({ ...form, permissions: updatedPermissions });
  };

  const handleSave = () => {
    if (currentRole) {
      const updatedRoles = roles.map((role) =>
        role === currentRole ? { ...form } : role
      );
      setRoles(updatedRoles);
    } else {
      setRoles([...roles, form]);
    }
    closeModal();
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Roles and Permissions</h1>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Roles</th>
            {["Read", "Write", "Delete", "Permission-4"].map((perm, i) => (
              <th key={i} className="border border-gray-300 p-2">
                {perm}
              </th>
            ))}
            <th className="border border-gray-300 p-2">Active/Inactive</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{role.role}</td>
              {role.permissions.map((permission, i) => (
                <td
                  key={i}
                  className={`border border-gray-300 p-2 ${
                    permission === "✔️" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {permission}
                </td>
              ))}
              <td
                className={`border border-gray-300 p-2 ${
                  role.status === "Active" ? "text-green-500" : "text-red-500"
                }`}
              >
                {role.status}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => openModal(role)}
                  className="bg-blue-500 text-white px-3 py-1 mr-2 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => setRoles(roles.filter((_, i) => i !== index))}
                  className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => openModal(null)}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        + Create
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
              {currentRole ? "Edit Role" : "Create Role"}
            </h2>
            <div className="mb-4">
              <label className="block font-bold mb-1 text-gray-700">
                Role Name
              </label>
              <input
                type="text"
                value={form.role}
                placeholder="Enter role name"
                onChange={(e) => handleFormChange("role", e.target.value)}
                className="border border-gray-300 rounded w-full p-2 text-gray-800 bg-blue-50 placeholder-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1 text-gray-700">
                Permissions
              </label>
              {["Read", "Write", "Delete", "Permission-4"].map((perm, i) => (
                <div key={i} className="flex items-center mb-2">
                  <label className="mr-2 text-gray-700">{perm}:</label>
                  <select
                    value={form.permissions[i]}
                    onChange={(e) =>
                      handlePermissionChange(i, e.target.value)
                    }
                    className="border border-gray-300 rounded p-1 text-gray-800 bg-blue-50"
                  >
                    <option value="✔️">✔️</option>
                    <option value="❌">❌</option>
                  </select>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1 text-gray-700">Status</label>
              <select
                value={form.status}
                onChange={(e) => handleFormChange("status", e.target.value)}
                className="border border-gray-300 rounded w-full p-2 text-gray-800 bg-blue-50"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 rounded mr-2 hover:bg-gray-400 text-gray-800 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RolesAndPermissions;
