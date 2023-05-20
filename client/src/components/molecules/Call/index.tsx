import { useState } from 'react';
import Image from 'next/image';

const Call = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="callback-bt" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`text-call ${isHovered ? 'hovered' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="w-6 h-6">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        
      </div>
      <div className="social-icons callback-icons">
            <a href="https://www.google.com" className="icon1 callback-icon">
              <Image src="/img/face.png" alt="Facebook" width={34} height={34} />
            </a>
            <a href="#" className="icon2 callback-icon">
              <Image src="/img/viber.png" alt="Twitter" width={34} height={34} />
            </a>
            <a href="#" className="icon3 callback-icon">
              <Image src="/img/telegram.png" alt="Instagram" width={34} height={34} />
            </a>
            <a href="#" className="icon4 callback-icon">
              <Image src="/img/skype.png" alt="Twitter" width={34} height={34} />
            </a>
            <a href="#" className="icon5 callback-icon">
              <Image src="/img/what.png" alt="Instagram" width={34} height={34} />
            </a>
        </div>
    </div>
  );
};

export default Call;
