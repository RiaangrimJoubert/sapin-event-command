import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  PencilLine,
  Trash2,
  Save,
  X,
  UserPlus,
} from "lucide-react";

const initialStaff = [
  {
    id: 1,
    fullName: "Alani Naidoo",
    role: "Event Coordinator",
    email: "alani@sapropertynetwork.com",
    phone: "082 555 0111",
    location: "Johannesburg",
    status: "Active",
  },
  {
    id: 2,
    fullName: "Sam Mokoena",
    role: "Operations Lead",
    email: "sam@sapropertynetwork.com",
    phone: "082 555 0222",
    location: "Johannesburg",
    status: "Active",
  },
  {
    id: 3,
    fullName: "Michelle Daniels",
    role: "Marketing Manager",
    email: "michelle@sapropertynetwork.com",
    phone: "082 555 0333",
    location: "Cape Town",
    status: "Active",
  },
  {
    id: 4,
    fullName: "Warren Jacobs",
    role: "Sales Support",
    email: "warren@sapropertynetwork.com",
    phone: "082 555 0444",
    location: "Durban",
    status: "Onboarding",
  },
];

const blankForm = {
  fullName: "",
  role: "",
  email: "",
  phone: "",
  location: "",
  status: "Active",
};

function StaffCard({ member, isEditing, editForm, onEdit, onDelete, onChange, onSave, onCancel }) {
  const initials = member.fullName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (isEditing) {
    return (
      <div className="staff-card staff-card-editing">
        <div className="staff-card-top">
          <div className="staff-avatar">{initials}</div>
          <div className="staff-card-actions">
            <button className="staff-action-btn save" type="button" onClick={onSave}>
              <Save size={16} />
              Save
            </button>
            <button className="staff-action-btn" type="button" onClick={onCancel}>
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>

        <div className="staff-form-grid">
          <div className="staff-field full">
            <label>Full Name</label>
            <input
              type="text"
              value={editForm.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
            />
          </div>

          <div className="staff-field">
            <label>Role</label>
            <input
              type="text"
              value={editForm.role}
              onChange={(e) => onChange("role", e.target.value)}
            />
          </div>

          <div className="staff-field">
            <label>Status</label>
            <select
              value={editForm.status}
              onChange={(e) => onChange("status", e.target.value)}
            >
              <option>Active</option>
              <option>Onboarding</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="staff-field">
            <label>Email</label>
            <input
              type="email"
              value={editForm.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </div>

          <div className="staff-field">
            <label>Phone</label>
            <input
              type="text"
              value={editForm.phone}
              onChange={(e) => onChange("phone", e.target.value)}
            />
          </div>

          <div className="staff-field full">
            <label>Location</label>
            <input
              type="text"
              value={editForm.location}
              onChange={(e) => onChange("location", e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="staff-card">
      <div className="staff-card-top">
        <div className="staff-identity">
          <div className="staff-avatar">{initials}</div>
          <div>
            <div className="staff-name">{member.fullName}</div>
            <div className="staff-role">{member.role}</div>
          </div>
        </div>

        <div className="staff-card-actions">
          <button className="staff-action-icon" type="button" onClick={onEdit}>
            <PencilLine size={16} />
          </button>
          <button className="staff-action-icon danger" type="button" onClick={onDelete}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="staff-status-row">
        <span className={`staff-status-pill ${member.status.toLowerCase()}`}>
          {member.status}
        </span>
      </div>

      <div className="staff-meta-list">
        <div className="staff-meta-item">
          <Mail size={15} />
          <span>{member.email || "No email added"}</span>
        </div>
        <div className="staff-meta-item">
          <Phone size={15} />
          <span>{member.phone || "No phone added"}</span>
        </div>
        <div className="staff-meta-item">
          <Briefcase size={15} />
          <span>{member.role || "No role added"}</span>
        </div>
        <div className="staff-meta-item">
          <MapPin size={15} />
          <span>{member.location || "No location added"}</span>
        </div>
      </div>
    </div>
  );
}

export default function Staff() {
  const [staff, setStaff] = useState(initialStaff);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(blankForm);
  const [newMember, setNewMember] = useState(blankForm);

  const filteredStaff = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return staff;

    return staff.filter((member) =>
      [
        member.fullName,
        member.role,
        member.email,
        member.phone,
        member.location,
        member.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [staff, search]);

  const totalStaff = staff.length;
  const activeStaff = staff.filter((member) => member.status === "Active").length;
  const onboardingStaff = staff.filter((member) => member.status === "Onboarding").length;
  const inactiveStaff = staff.filter((member) => member.status === "Inactive").length;

  const startEdit = (member) => {
    setEditingId(member.id);
    setEditForm({ ...member });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm(blankForm);
  };

  const saveEdit = () => {
    setStaff((prev) =>
      prev.map((member) =>
        member.id === editingId ? { ...member, ...editForm } : member
      )
    );
    cancelEdit();
  };

  const deleteMember = (id) => {
    setStaff((prev) => prev.filter((member) => member.id !== id));
    if (editingId === id) cancelEdit();
  };

  const addNewMember = () => {
    if (!newMember.fullName.trim()) return;

    const nextMember = {
      id: Date.now(),
      ...newMember,
    };

    setStaff((prev) => [nextMember, ...prev]);
    setNewMember(blankForm);
  };

  return (
    <div className="staff-page">
      <div className="staff-header">
        <div>
          <h1 className="staff-page-title">Staff</h1>
          <p className="staff-page-copy">
            Manage current team members and add new staff when needed.
          </p>
        </div>
      </div>

      <section className="staff-summary-grid">
        <div className="staff-summary-card">
          <div className="staff-summary-label">Total Staff</div>
          <div className="staff-summary-value">{totalStaff}</div>
        </div>

        <div className="staff-summary-card">
          <div className="staff-summary-label">Active</div>
          <div className="staff-summary-value">{activeStaff}</div>
        </div>

        <div className="staff-summary-card">
          <div className="staff-summary-label">Onboarding</div>
          <div className="staff-summary-value">{onboardingStaff}</div>
        </div>

        <div className="staff-summary-card">
          <div className="staff-summary-label">Inactive</div>
          <div className="staff-summary-value">{inactiveStaff}</div>
        </div>
      </section>

      <section className="staff-toolbar">
        <div className="staff-search-wrap">
          <Search className="staff-search-icon" size={18} />
          <input
            className="staff-search-input"
            type="text"
            placeholder="Search by name, role, email, phone or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <section className="staff-add-panel">
        <div className="staff-add-panel-header">
          <div className="staff-add-title-wrap">
            <UserPlus size={18} />
            <h2 className="staff-add-title">Add New Staff Member</h2>
          </div>
          <button className="primary-btn" type="button" onClick={addNewMember}>
            <Plus size={18} />
            Add Staff
          </button>
        </div>

        <div className="staff-form-grid">
          <div className="staff-field full">
            <label>Full Name</label>
            <input
              type="text"
              value={newMember.fullName}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, fullName: e.target.value }))
              }
              placeholder="Enter full name"
            />
          </div>

          <div className="staff-field">
            <label>Role</label>
            <input
              type="text"
              value={newMember.role}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, role: e.target.value }))
              }
              placeholder="Enter role"
            />
          </div>

          <div className="staff-field">
            <label>Status</label>
            <select
              value={newMember.status}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, status: e.target.value }))
              }
            >
              <option>Active</option>
              <option>Onboarding</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="staff-field">
            <label>Email</label>
            <input
              type="email"
              value={newMember.email}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter email"
            />
          </div>

          <div className="staff-field">
            <label>Phone</label>
            <input
              type="text"
              value={newMember.phone}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, phone: e.target.value }))
              }
              placeholder="Enter phone number"
            />
          </div>

          <div className="staff-field full">
            <label>Location</label>
            <input
              type="text"
              value={newMember.location}
              onChange={(e) =>
                setNewMember((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="Enter city or region"
            />
          </div>
        </div>
      </section>

      <section className="staff-list-section">
        <div className="staff-section-head">
          <h2 className="staff-section-title">Current Staff</h2>
          <div className="staff-section-count">{filteredStaff.length} shown</div>
        </div>

        <div className="staff-card-grid">
          {filteredStaff.map((member) => (
            <StaffCard
              key={member.id}
              member={member}
              isEditing={editingId === member.id}
              editForm={editForm}
              onEdit={() => startEdit(member)}
              onDelete={() => deleteMember(member.id)}
              onChange={(field, value) =>
                setEditForm((prev) => ({ ...prev, [field]: value }))
              }
              onSave={saveEdit}
              onCancel={cancelEdit}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
