import React from 'react';
import HeaderLinks from './HeaderLinks';
import Logo from './Logo';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <HeaderLinks />
    </div>
  );
}
