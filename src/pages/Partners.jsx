import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  Handshake,
  PencilLine,
  Trash2,
  Save,
  X,
} from "lucide-react";

const initialPartners = [
  {
    id: 1,
    companyName: "GrowthPoint Media",
    contactName: "Kyla Naidoo",
    category: "Media Partner",
    email: "kyla@growthpointmedia.co.za",
    phone: "082 555 0101",
    website: "www.growthpointmedia.co.za",
    location: "Johannesburg",
    status: "Active",
  },
  {
    id: 2,
    companyName: "Prime Venue Group",
    contactName: "Daniel Jacobs",
    category: "Venue Partner",
    email: "daniel@primevenuegroup.co.za",
    phone: "082 555 0102",
    website: "www.primevenuegroup.co.za",
    location: "Cape Town",
    status: "Active",
  },
  {
    id: 3,
    companyName: "Investor Connect SA",
    contactName: "Michelle Dlamini",
    category: "Strategic Partner",
    email: "michelle@investorconnectsa.co.za",
    phone: "082 555 0103",
    website: "www.investorconnectsa.co.za",
    location: "Durban",
    status: "Pending",
  },
];

const blankForm = {
  companyName: "",
  contactName: "",
  category: "",
  email: "",
  phone: "",
  website: "",
  location: "",
  status: "Active",
};

function PartnersCard({
  partner,
  isEditing,
  editForm,
  onEdit,
  onDelete,
  onChange,
  onSave,
  onCancel,
}) {
  const initials = partner.companyName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (isEditing) {
    return (
      <div className="partners-card partners-card-editing">
        <div className="partners-card-top">
          <div className="partners-avatar">{initials}</div>
          <div className="partners-card-actions">
            <button className="partners-action-btn save" type="button" onClick={onSave}>
              <Save size={16} />
              Save
            </button>
            <button className="partners-action-btn" type="button" onClick={onCancel}>
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>

        <div className="partners-form-grid">
          <div className="partners-field full">
            <label>Company Name</label>
            <input
              type="text"
              value={editForm.companyName}
              onChange={(e) => onChange("companyName", e.target.value)}
            />
          </div>

          <div className="partners-field">
            <label>Contact Name</label>
            <input
              type="text"
              value={editForm.contactName}
              onChange={(e) => onChange("contactName", e.target.value)}
            />
          </div>

          <div className="partners-field">
            <label>Category</label>
            <input
              type="text"
              value={editForm.category}
              onChange={(e) => onChange("category", e.target.value)}
            />
          </div>

          <div className="partners-field">
            <label>Email</label>
            <input
              type="email"
              value={editForm.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </div>

          <div className="partners-field">
            <label>Phone</label>
            <input
              type="text"
              value={editForm.phone}
              onChange={(e) => onChange("phone", e.target.value)}
            />
          </div>

          <div className="partners-field">
            <label>Website</label>
            <input
              type="text"
              value={editForm.website}
              onChange={(e) => onChange("website", e.target.value)}
            />
          </div>

          <div className="partners-field">
            <label>Location</label>
            <input
              type="text"
              value={editForm.location}
              onChange={(e) => onChange("location", e.target.value)}
            />
          </div>

          <div className="partners-field">
            <label>Status</label>
            <input
              type="text"
              value={editForm.status}
              onChange={(e) => onChange("status", e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="partners-card">
      <div className="partners-card-top">
        <div className="partners-identity">
          <div className="partners-avatar">{initials}</div>
          <div>
            <div className="partners-name">{partner.companyName}</div>
            <div className="partners-role">{partner.category}</div>
          </div>
        </div>

        <div className="partners-card-actions">
          <button className="partners-action-icon" type="button" onClick={onEdit}>
            <PencilLine size={16} />
          </button>
          <button className="partners-action-icon danger" type="button" onClick={onDelete}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="partners-status-row">
        <span className={`partners-status-pill ${partner.status.toLowerCase()}`}>
          {partner.status}
        </span>
      </div>

      <div className="partners-meta-list">
        <div className="partners-meta-item">
          <Handshake size={15} />
          <span>{partner.contactName || "No contact added"}</span>
        </div>
        <div className="partners-meta-item">
          <Mail size={15} />
          <span>{partner.email || "No email added"}</span>
        </div>
        <div className="partners-meta-item">
          <Phone size={15} />
          <span>{partner.phone || "No phone added"}</span>
        </div>
        <div className="partners-meta-item">
          <Globe size={15} />
          <span>{partner.website || "No website added"}</span>
        </div>
        <div className="partners-meta-item">
          <MapPin size={15} />
          <span>{partner.location || "No location added"}</span>
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  const [partners, setPartners] = useState(initialPartners);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(blankForm);
  const [newPartner, setNewPartner] = useState(blankForm);

  const filteredPartners = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return partners;

    return partners.filter((partner) =>
      [
        partner.companyName,
        partner.contactName,
        partner.category,
        partner.email,
        partner.phone,
        partner.website,
        partner.location,
        partner.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(term)
    );
  }, [partners, search]);

  const totalPartners = partners.length;
  const activePartners = partners.filter((partner) => partner.status === "Active").length;
  const pendingPartners = partners.filter((partner) => partner.status === "Pending").length;

  const startEdit = (partner) => {
    setEditingId(partner.id);
    setEditForm({ ...partner });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm(blankForm);
  };

  const saveEdit = () => {
    setPartners((prev) =>
      prev.map((partner) =>
        partner.id === editingId ? { ...partner, ...editForm } : partner
      )
    );
    cancelEdit();
  };

  const deletePartner = (id) => {
    setPartners((prev) => prev.filter((partner) => partner.id !== id));
    if (editingId === id) cancelEdit();
  };

  const addNewPartner = () => {
    if (!newPartner.companyName.trim()) return;

    const nextPartner = {
      id: Date.now(),
      ...newPartner,
    };

    setPartners((prev) => [nextPartner, ...prev]);
    setNewPartner(blankForm);
  };

  return (
    <div className="partners-page">
      <div className="partners-header">
        <div>
          <h1 className="partners-page-title">Partners</h1>
          <p className="partners-page-copy">
            Manage current partners and add new strategic relationships quickly.
          </p>
        </div>
      </div>

      <section className="partners-summary-grid">
        <div className="partners-summary-card">
          <div className="partners-summary-label">Total Partners</div>
          <div className="partners-summary-value">{totalPartners}</div>
        </div>

        <div className="partners-summary-card">
          <div className="partners-summary-label">Active</div>
          <div className="partners-summary-value">{activePartners}</div>
        </div>

        <div className="partners-summary-card">
          <div className="partners-summary-label">Pending</div>
          <div className="partners-summary-value">{pendingPartners}</div>
        </div>
      </section>

      <section className="partners-toolbar">
        <div className="partners-search-wrap">
          <Search className="partners-search-icon" size={18} />
          <input
            className="partners-search-input"
            type="text"
            placeholder="Search by company, contact, category, email or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <section className="partners-add-panel">
        <div className="partners-add-panel-header">
          <div className="partners-add-title-wrap">
            <Building2 size={18} />
            <h2 className="partners-add-title">Add New Partner</h2>
          </div>
          <button className="primary-btn" type="button" onClick={addNewPartner}>
            <Plus size={18} />
            Add Partner
          </button>
        </div>

        <div className="partners-form-grid">
          <div className="partners-field full">
            <label>Company Name</label>
            <input
              type="text"
              value={newPartner.companyName}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, companyName: e.target.value }))
              }
              placeholder="Enter company name"
            />
          </div>

          <div className="partners-field">
            <label>Contact Name</label>
            <input
              type="text"
              value={newPartner.contactName}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, contactName: e.target.value }))
              }
              placeholder="Enter contact person"
            />
          </div>

          <div className="partners-field">
            <label>Category</label>
            <input
              type="text"
              value={newPartner.category}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, category: e.target.value }))
              }
              placeholder="Enter partner category"
            />
          </div>

          <div className="partners-field">
            <label>Email</label>
            <input
              type="email"
              value={newPartner.email}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter email"
            />
          </div>

          <div className="partners-field">
            <label>Phone</label>
            <input
              type="text"
              value={newPartner.phone}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, phone: e.target.value }))
              }
              placeholder="Enter phone number"
            />
          </div>

          <div className="partners-field">
            <label>Website</label>
            <input
              type="text"
              value={newPartner.website}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, website: e.target.value }))
              }
              placeholder="Enter website"
            />
          </div>

          <div className="partners-field">
            <label>Location</label>
            <input
              type="text"
              value={newPartner.location}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="Enter city or region"
            />
          </div>

          <div className="partners-field">
            <label>Status</label>
            <input
              type="text"
              value={newPartner.status}
              onChange={(e) =>
                setNewPartner((prev) => ({ ...prev, status: e.target.value }))
              }
              placeholder="Active or Pending"
            />
          </div>
        </div>
      </section>

      <section className="partners-list-section">
        <div className="partners-section-head">
          <h2 className="partners-section-title">Current Partners</h2>
          <div className="partners-section-count">{filteredPartners.length} shown</div>
        </div>

        <div className="partners-card-grid">
          {filteredPartners.map((partner) => (
            <PartnersCard
              key={partner.id}
              partner={partner}
              isEditing={editingId === partner.id}
              editForm={editForm}
              onEdit={() => startEdit(partner)}
              onDelete={() => deletePartner(partner.id)}
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
