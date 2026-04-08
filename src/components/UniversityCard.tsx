import React from "react";

export interface UniversityCardProps {
  name: string;
  description: string;
  icon: string;
  tags: string[];
  activeCount: string;
  iconContainerClass: string;
  activeCountClass: string;
  activeCountDotClass: string;
  className?: string;
}

export function UniversityCard({
  name,
  description,
  icon,
  tags,
  activeCount,
  iconContainerClass,
  activeCountClass,
  activeCountDotClass,
  className = "",
}: UniversityCardProps) {
  return (
    <div
      className={`group relative bg-surface-container-lowest p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary-container/30 flex flex-col ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconContainerClass}`}>
          <span className="material-symbols-outlined" data-icon={icon}>
            {icon}
          </span>
        </div>
        <span className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full ${activeCountClass}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${activeCountDotClass}`}></span>
          {activeCount}
        </span>
      </div>
      <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
      <p className="text-on-surface-variant text-sm mb-6 flex-1 line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-wider text-outline rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="w-full py-3 bg-surface-container-highest text-primary font-bold rounded-xl group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2">
        Enter Rooms
        <span
          className="material-symbols-outlined text-sm"
          data-icon="arrow_forward"
        >
          arrow_forward
        </span>
      </button>
    </div>
  );
}
