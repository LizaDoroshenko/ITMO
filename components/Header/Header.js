import React from 'react';
import styles from './Header.module.css';
import svg from '../../public/Vector.svg'
import Image from 'next/image';

function Header({children}) {
  return (
    <>
    <nav className={styles.header}>
        <Image className='logo' src={svg} alt='ITMO'/>
        <select>
          <option>Eng</option>
          <option>Рус</option>
        </select>
    </nav>
    <div>
        {children}
    </div>
    </>
  );
}

export default Header;