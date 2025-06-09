import React, { useState } from "react";
import "./work.css";

const RolesAndPermissions = () => {
  const [roles, setRoles] = useState([
    { role: "Admin", permissions: ["✔️", "✔️", "✔️", "✔️"], status: "Active" },
    { role: "Viewer", permissions: ["❌", "❌", "❌", "❌"], status: "Inactive" },
    { role: "Manager", permissions: ["✔️", "❌", "✔️", "❌"], status: "Active" },
    { role: "Editor", permissions: ["❌", "✔️", "❌", "✔️"], status: "Inactive" },
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

  const closeModal = () => setIsModalOpen(false);

  const handleFormChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handlePermissionChange = (index, value) => {
    const updated = [...form.permissions];
    updated[index] = value;
    setForm({ ...form, permissions: updated });
  };

  const handleSave = () => {
    if (currentRole) {
      setRoles(roles.map((r) => (r === currentRole ? { ...form } : r)));
    } else {
      setRoles([...roles, form]);
    }
    closeModal();
  };

  return (
    <div className="roles-and-permissions">
      <h1>Roles and Permissions</h1>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              {["Read", "Write", "Delete", "Permission-4"].map((perm, i) => (
                <th key={i}>{perm}</th>
              ))}
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((item, idx) => (
              <tr key={idx}>
                <td>{item.role}</td>
                {item.permissions.map((p, i) => (
                  <td
                    key={i}
                    className={p === "✔️" ? "text-green-500" : "text-red-500"}
                  >
                    {p}
                  </td>
                ))}
                <td
                  className={
                    item.status === "Active" ? "text-green-500" : "text-red-500"
                  }
                >
                  {item.status}
                </td>
                <td>
                  <button className="btn-edit" onClick={() => openModal(item)}>
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() =>
                      setRoles(roles.filter((_, i) => i !== idx))
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn-create" onClick={() => openModal(null)}>
        + Create
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{currentRole ? "Edit Role" : "Create Role"}</h2>

            <div className="form-group">
              <label>Role Name</label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => handleFormChange("role", e.target.value)}
                placeholder="Enter role name"
              />
            </div>

            <div className="form-group">
              <label>Permissions</label>
              {["Read", "Write", "Delete", "Permission-4"].map((perm, i) => (
                <div key={i} style={{ marginBottom: "0.5rem" }}>
                  <label style={{ marginRight: "0.5rem" }}>{perm}:</label>
                  <select
                    value={form.permissions[i]}
                    onChange={(e) =>
                      handlePermissionChange(i, e.target.value)
                    }
                  >
                    <option value="✔️">✔️</option>
                    <option value="❌">❌</option>
                  </select>
                </div>
              ))}
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                value={form.status}
                onChange={(e) => handleFormChange("status", e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="modal-footer">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={handleSave}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RolesAndPermissions;
