import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}
export const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-none border font-medium transition-all duration-300 text-sm md:text-base font-ui';
  const variantStyles = {
    primary: 'bg-electric-cyan border-electric-cyan hover:bg-electric-cyan/80 text-digital-black neon-border',
    secondary: 'bg-synth-purple border-synth-purple hover:bg-synth-purple/80 text-highlight neon-purple',
    outline: 'border-electric-cyan text-electric-cyan hover:bg-electric-cyan/10 neon-cyan'
  };
  return <motion.button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick} whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }}>
      {children}
    </motion.button>;
};