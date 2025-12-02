import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-300">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};