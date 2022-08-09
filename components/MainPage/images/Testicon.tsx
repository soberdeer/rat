import React from 'react';

export default function TestIcon({ size = 40 }: { size: number }) {
  return (
    <svg viewBox="0 0 502 502" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <path d="M71 10h360v482H71z" fill="#f0efe4" />
      <path d="M126 68h87v87h-87zm0 281h87v87h-87z" fill="#f77e65" />
      <path
        d="M431 0H71c-5.522 0-10 4.477-10 10v482c0 5.523 4.478 10 10 10h360c5.522 0 10-4.477 10-10V10c0-5.523-4.478-10-10-10zm-10 482H81V20h340v462z"
      />
      <path
        d="M126 165h87c5.522 0 10-4.477 10-10V68c0-5.523-4.478-10-10-10h-87c-5.522 0-10 4.477-10 10v87c0 5.523 4.478 10 10 10zm10-87h67v67h-67V78zm-10 228h87c5.522 0 10-4.477 10-10v-19c0-5.523-4.478-10-10-10s-10 4.477-10 10v9h-67v-67h62c5.522 0 10-4.477 10-10s-4.478-10-10-10h-72c-5.522 0-10 4.477-10 10v87c0 5.523 4.478 10 10 10zm0 140h87c5.522 0 10-4.477 10-10v-87c0-5.523-4.478-10-10-10h-87c-5.522 0-10 4.477-10 10v87c0 5.523 4.478 10 10 10zm10-87h67v67h-67v-67zM327 99h50c5.522 0 10-4.477 10-10s-4.478-10-10-10h-50c-5.522 0-10 4.477-10 10s4.478 10 10 10zm-59 0h17c5.522 0 10-4.477 10-10s-4.478-10-10-10h-17c-5.522 0-10 4.477-10 10s4.478 10 10 10zm0 41h109c5.522 0 10-4.477 10-10s-4.478-10-10-10H268c-5.522 0-10 4.477-10 10s4.478 10 10 10zm109 81h-50c-5.522 0-10 4.477-10 10s4.478 10 10 10h50c5.522 0 10-4.477 10-10s-4.478-10-10-10zm-109 20h17c5.522 0 10-4.477 10-10s-4.478-10-10-10h-17c-5.522 0-10 4.477-10 10s4.478 10 10 10zm0 41h109c5.522 0 10-4.477 10-10s-4.478-10-10-10H268c-5.522 0-10 4.477-10 10s4.478 10 10 10zm109 78h-50c-5.522 0-10 4.477-10 10s4.478 10 10 10h50c5.522 0 10-4.477 10-10s-4.478-10-10-10zm-109 20h17c5.522 0 10-4.477 10-10s-4.478-10-10-10h-17c-5.522 0-10 4.477-10 10s4.478 10 10 10zm0 41h109c5.522 0 10-4.477 10-10s-4.478-10-10-10H268c-5.522 0-10 4.477-10 10s4.478 10 10 10z"
      />
      <path
        d="M173.429 275.071c1.953 1.953 4.512 2.929 7.071 2.929s5.118-.976 7.071-2.929l59.5-59.5c3.905-3.905 3.905-10.237 0-14.143-3.906-3.905-10.236-3.905-14.143 0l-52.52 52.52-18.501-17.678c-3.991-3.815-10.323-3.672-14.138.321-3.816 3.993-3.672 10.323.321 14.139l25.339 24.341z"
      />
    </svg>
  );
}