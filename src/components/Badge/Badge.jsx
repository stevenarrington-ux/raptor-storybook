import React from 'react';
import { badgeVariants } from '../../tokens/tokens';

/**
 * Badge — Bold status indicator following SmartPass design patterns.
 *
 * Uses fully saturated backgrounds with white text.
 * All color combos meet WCAG AA for bold text at these sizes (≥ 3:1 contrast).
 *
 * @param {Object} props
 * @param {'default'|'primary'|'success'|'danger'|'warning'|'info'|'navy'|'magenta'|'teal'} props.variant
 * @param {'sm'|'md'} props.size
 * @param {React.ReactNode} props.children
 */
export const Badge = ({ children, variant = 'default', size = 'sm' }) => {
  const v = badgeVariants[variant] || badgeVariants.default;
  return (
    <span
      role="status"
      style={{
        background: v.bg,
        color: v.color,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: size === 'sm' ? '3px 10px' : '5px 14px',
        borderRadius: '9999px',
        fontSize: size === 'sm' ? '0.75rem' : '0.8125rem',
        fontWeight: 600,
        fontFamily: 'var(--font-body)',
        lineHeight: 1.5,
        whiteSpace: 'nowrap',
        letterSpacing: '0.01em',
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
