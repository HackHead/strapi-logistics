import { useEffect, useState } from 'react';
import Image from 'next/image';
import { server } from '@/http';

export interface Socials {
  facebook: string;
  viber: string;
  telegram: string;
  skype: string;
  whatsup: string; // Corrected the property name to 'whatsapp'
}

const Call = () => {
  const [socialData, setSocialData] = useState<Socials | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    fetchSocialData();
  }, []);

  async function fetchSocialData() {
    try {
      const res = await server.get('/social');
      const data = res.data.data.attributes;
      const { facebook, viber, telegram, skype, whatsup } = data as Socials;
      setSocialData({ facebook, viber, telegram, skype, whatsup });
    } catch (error) {
      console.log(error);
    }
  }
  const mouseenter = () => setIsHovered(true);
  const mouseleave = () => setIsHovered(false);

  const touch = () => setIsTouched(!isTouched);

  const click = (e: any) => {
    if(!e.target.classList.contains('text-call') && e.pointerType === "mouse"){
      setIsHovered(false);
      setIsTouched(false)
    }
  }
  useEffect(() => {
    window.addEventListener('click', click);

    return () => {
      window.removeEventListener('click', click);
    }
  }, []) 
  if (!socialData) {
    return null; // Return null instead of an empty fragment
  }

  return (
    <>
    <div className="callback-wrap" onMouseEnter={() => mouseenter()}
      onMouseLeave={() => mouseleave()}>
    <div
      className={`callback-bt ${isHovered ? 'active' : ''}`}
      
    >
      <div className={`text-call`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          className="w-6 h-6"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </div>
      
      <div className="social-icons callback-icons" >
        <a href={socialData.facebook} className="icon1 callback-icon">
          <Image src="/img/face.png" alt="Facebook" width={34} height={34} />
        </a>
        <a href={socialData.viber} className="icon2 callback-icon">
          <Image src="/img/viber.png" alt="Viber" width={34} height={34} />
        </a>
        <a href={socialData.telegram} className="icon3 callback-icon">
          <Image
            src="/img/telegram.png"
            alt="Telegram"
            width={34}
            height={34}
          />
        </a>
        <a href={socialData.skype} className="icon4 callback-icon">
          <Image src="/img/skype.png" alt="Skype" width={34} height={34} />
        </a>
        <a href={socialData.whatsup} className="icon5 callback-icon">
          <Image src="/img/what.png" alt="WhatsApp" width={34} height={34} />
        </a>
      </div>
    </div>
    </div>

{/* MOBILE */}
    <div
      className={`callback-bt mobile ${isTouched ? 'active' : ''}`}
    >
      <div className={`text-call ${isTouched ? 'active' : ''}`}
        onTouchStart={() => isTouched ? setIsTouched(false) : setIsTouched(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#fff"
          className="w-6 h-6"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </div>
      <div className="social-icons callback-icons" >
        <a href={socialData.facebook} className="icon1 callback-icon">
          <Image src="/img/face.png" alt="Facebook" width={34} height={34} />
        </a>
        <a href={socialData.viber} className="icon2 callback-icon">
          <Image src="/img/viber.png" alt="Viber" width={34} height={34} />
        </a>
        <a href={socialData.telegram} className="icon3 callback-icon">
          <Image
            src="/img/telegram.png"
            alt="Telegram"
            width={34}
            height={34}
          />
        </a>
        <a href={socialData.skype} className="icon4 callback-icon">
          <Image src="/img/skype.png" alt="Skype" width={34} height={34} />
        </a>
        <a href={socialData.whatsup} className="icon5 callback-icon">
          <Image src="/img/what.png" alt="WhatsApp" width={34} height={34} />
        </a>
      </div>
    </div>
    </>
  );
};

export default Call;
