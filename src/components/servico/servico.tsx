interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgIconColor?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  bgIconColor = "bg-[#f4e6e3]",
}: ServiceCardProps) {
  return (
    <div className="service-card bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300">
      <div
        className={`${bgIconColor} rounded-xl w-16 h-16 flex items-center justify-center mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
}
