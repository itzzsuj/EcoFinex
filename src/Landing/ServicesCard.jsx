import React from "react";

function ServicesCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-start">
        <img
          loading="lazy"
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="mt-6 text-2xl font-semibold text-green-700">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
