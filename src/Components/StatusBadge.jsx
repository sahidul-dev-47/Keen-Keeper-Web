export default function StatusBadge({ status }) {
  const config = {
    overdue: { cls: "bg-red-100 text-red-600", label: "Overdue" },
    "almost due": {
      cls: "bg-yellow-100 text-yellow-600",
      label: "Almost Due",
    },
    "on-track": {
      cls: "bg-emerald-100 text-emerald-600",
      label: "On Track",
    },
  };

  const { cls, label } = config[status] || config["on-track"];

  return (
    <span
      className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${cls}`}
    >
      {label}
    </span>
  );
}