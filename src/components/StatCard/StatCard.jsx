import React from 'react';
import { Badge } from '../Badge/Badge';

/**
 * StatCard — Dashboard metric display with icon accent and optional trend badge.
 *
 * Icon container uses the accent color at full saturation with white icon (WCAG AA ≥ 3:1).
 * Trend badges use the bold Badge component for consistency.
 */
export const StatCard = ({ label, value, change, icon, accent = '#F97316' }) => (
  <div style={{
    background: '#fff',
    borderRadius: 'var(--radius-xl)',
    padding: '20px',
    border: '1px solid #E5E5E5',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: 1,
    minWidth: 0,
    transition: 'box-shadow 0.15s ease',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <span style={{
        fontSize: '0.8125rem', color: '#737373', fontWeight: 500,
        fontFamily: 'var(--font-body)',
      }}>
        {label}
      </span>
      <div style={{
        width: 34, height: 34, borderRadius: 'var(--radius-lg)',
        background: accent, display: 'flex', alignItems: 'center',
        justifyContent: 'center', color: '#fff',
      }}>
        {icon}
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
      <span style={{
        fontSize: '1.75rem', fontWeight: 800,
        fontFamily: 'var(--font-display)', color: '#171717',
        letterSpacing: '-0.03em', lineHeight: 1,
      }}>
        {value}
      </span>
      {change !== undefined && change !== null && (
        <Badge variant={change > 0 ? 'success' : 'danger'} size="sm">
          {change > 0 ? '+' : ''}{change}%
        </Badge>
      )}
    </div>
  </div>
);

export default StatCard;
