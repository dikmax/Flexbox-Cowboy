import React from 'react';
import './Footer.css';
import telegram from '../Source/png/telegram.png'
import instagram from '../Source/png/instagram.png'
import mail from '../Source/png/mail.png'
import face from '../Source/png/face.png'

function Footer() {
  return (
    <div className="footer" ><div className="footer__flex"  >
      <div className="telegram"><a target="__blanc" href="https://t.me/PavelVLG4"><img src={telegram}/></a></div>
      <div className="mail"><a target="__blanc" href="mailto:pavevlg444@gmail.com?subject=Front-end"><img src={mail}/></a></div>
      <div className="facebook"><a target="__blanc" href="https://www.facebook.com/profile.php?id=100003398830275"><img src={face}/></a></div>
      <div className="instagram"><a target="__blanc" href="https://www.instagram.com/pavel.b.vlg"><img src={instagram}/></a></div>
    </div></div>
  );
}
export default Footer;