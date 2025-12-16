import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const GradientBackground = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? 'bg-corporate-light' : 'bg-corporate-slate'}>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default GradientBackground;