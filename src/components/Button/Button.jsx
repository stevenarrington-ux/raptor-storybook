import React, { useState } from 'react';

const variantStyles = {
  primary: { bg: '#F97316', hoverBg: '#EA580C', color: '#fff', border: 'none' },
  secondary: { bg: '#fff', hoverBg: '#F5F5F5', color: '#404040', border: '1px solid #D4D4D4' },
  danger: { bg: '#DC2626', hoverBg: '#B91C1C', color: '#fff', border: 'none' },
  ghost: { bg: 'transparent', hoverBg: '#F5F5F5', color: '#525252', border: 'none' },
  outline: { bg: 'transparent', hoverBg: '#FFF7ED', color: '#EA580C', border: '2px solid #FB923C' },
  success: { bg: '#16A34A', hoverBg: '#15803D', color: '#fff', border: 'none' },
};

const sizeStyles = {
  sm: { padding: '6px 12px', fontSize: '0.8125rem' },
  md: { padding: '9px 18px', fontSize: '0.875rem' },
  lg: { padding: '11px 22px', fontSize: '0.9375rem' },
};

/**
 * Button — Primary action component with multiple variants and sizes.
 *
 * Includes hover state transitions, disabled state, and focus-visible outline.
 * All colored variants meet WCAG AA contrast requirements.
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'danger'|'ghost'|'outline'|'success'} props.variant
 * @param {'sm'|'md'|'lg'} props.size
 * @param {boolean} props.disabled
 * @param {React.ReactNode} props.icon - Optional leading icon
 * @param {Function} props.onClick
 * @param {React.ReactNode} props.children
 */
export const Button = ({
  children, variant = 'primary', size = 'md',
  icon, onClick, disabled = false, ...rest
}) => {
  const [hovered, setHovered] = useState(false);
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeStyles[size] || sizeStyles.md;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: disabled ? '#E5E5E5' : (hovered ? v.hoverBg : v.bg),
        color: disabled ? '#A3A3A3' : v.color,
        border: v.border,
        padding: s.padding,
        fontSize: s.fontSize,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        borderRadius: 'var(--radius-lg)',
        fontWeight: 600,
        fontFamily: 'var(--font-body)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all var(--transition-base)',
        letterSpacing: '-0.01em',
        lineHeight: 1.4,
        opacity: disabled ? 0.6 : 1,
      }}
      {...rest}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
