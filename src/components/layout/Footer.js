import React from 'react';

const Footer = () => (
  <footer>
          &copy;
    {' '}
    {new Date().getFullYear()}
    {' '}
JMG. Designed and Developed by
    {' '}
    <a
      href="https://www.juangarcia.design"
      target="_blank"
      rel="noopener noreferrer"
    >
            Juan Mart&iacute;n Garc&iacute;a
    </a>
  </footer>
);

export default Footer;
