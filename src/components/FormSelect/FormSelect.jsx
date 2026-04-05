import React, { useState } from 'react';

/**
 * FormSelect — Dropdown select with label and accessible states.
 */
export const FormSelect = ({
  label, required = false, value, onChange,
  options = [], disabled = false,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {label && (
        <label style={{
          fontSize: '0.8125rem', fontWeight: 600, color: '#404040',
          fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', gap: '4px',
        }}>
          {label}
          {required && <span style={{ color: '#DC2626', fontWeight: 700 }} aria-label="required">*</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '10px 36px 10px 14px',
            borderRadius: 'var(--radius-md)',
            border: `1.5px solid ${focused ? '#F97316' : '#D4D4D4'}`,
            fontSize: '0.9375rem',
            fontFamily: 'var(--font-body)',
            color: disabled ? '#A3A3A3' : '#171717',
            background: disabled ? '#FAFAFA' : '#fff',
            appearance: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'all 0.15s ease',
            outline: 'none',
            boxShadow: focused ? '0 0 0 3px rgba(249,115,22,0.25)' : 'none',
          }}
        >
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <div style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: '#737373',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FormSelect;
