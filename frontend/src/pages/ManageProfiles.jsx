// src/pages/ManageProfiles.jsx
import React, { useState } from "react";

const initialProfiles = [
  { name: "You", type: "Adult", color: "#3498db" },
  { name: "Kid 1", type: "Kids", color: "#e67e22" },
];

export default function ManageProfiles() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [newProfileName, setNewProfileName] = useState("");
  const [profileType, setProfileType] = useState("Adult");

  const handleAddProfile = () => {
    if (!newProfileName) return;

    const newProfile = {
      name: newProfileName,
      type: profileType,
      color: profileType === "Kids" ? "#e67e22" : "#3498db",
    };
    setProfiles([...profiles, newProfile]);
    setNewProfileName("");
    setProfileType("Adult");
  };

  return (
    <div className="min-h-screen bg-[#111] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Profiles</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="rounded-lg p-4 shadow-lg"
            style={{ backgroundColor: profile.color }}
          >
            <div className="text-lg font-semibold">{profile.name}</div>
            <div className="text-sm">{profile.type}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#222] p-4 rounded-md w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Add New Profile</h2>
        <input
          type="text"
          placeholder="Profile Name"
          value={newProfileName}
          onChange={(e) => setNewProfileName(e.target.value)}
          className="w-full p-2 mb-2 bg-[#333] text-white rounded-md"
        />
        <select
          value={profileType}
          onChange={(e) => setProfileType(e.target.value)}
          className="w-full p-2 mb-4 bg-[#333] text-white rounded-md"
        >
          <option value="Adult">Adult</option>
          <option value="Kids">Kids</option>
        </select>
        <button
          onClick={handleAddProfile}
          className="w-full bg-[#4CAF50] text-white py-2 px-4 rounded hover:bg-[#45a049]"
        >
          Add Profile
        </button>
      </div>
    </div>
  );
}
