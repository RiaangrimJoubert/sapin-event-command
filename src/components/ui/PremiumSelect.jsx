import { ChevronDown, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PremiumSelect({
  value,
  onChange,
  options = [],
  placeholder = "Select option",
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = value || placeholder;

  return (
    <div className="premium-dropdown" ref={rootRef}>
      <button
        type="button"
        className={`premium-dropdown-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={`premium-dropdown-value ${!value ? "placeholder" : ""}`}>
          {selectedLabel}
        </span>
        <ChevronDown
          size={18}
          className={`premium-dropdown-chevron ${open ? "open" : ""}`}
        />
      </button>

      {open && (
        <div className="premium-dropdown-menu">
          {options.map((option) => {
            const isSelected = value === option;

            return (
              <button
                key={option}
                type="button"
                className={`premium-dropdown-item ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                <span>{option}</span>
                {isSelected && <Check size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
