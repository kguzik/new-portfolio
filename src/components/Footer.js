import React from 'react';
import LinkInList from './LinkInList';

function Footer(){
  return (
    <footer className="footer">
      <ul className="footer__list">
        <LinkInList link="https://github.com/kguzik" title="GitHub"/>
        <LinkInList link="https://www.linkedin.com/in/karolina-guzik/" title="Linkedin"/>
        <LinkInList link="mailto:k.guzik92@gmail.com" title="Email"/>
      </ul>
    </footer>
  )
}

export default Footer;