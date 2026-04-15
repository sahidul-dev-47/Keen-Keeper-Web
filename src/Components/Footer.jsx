import Image  from "../assets/logo-xl.png";
import image1 from '../assets/instagram.png';
import image2 from '../assets/facebook.png';
import image3 from '../assets/twitter.png';

export default function Footer() {
  return (
    <footer className="bg-green-950/90 w-full py-8 mt-auto">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-5 text-white/70 px-4 text-center">
        <img src={Image} alt="" />
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <h1 className="text-lg">Social Links</h1>
        <div className="flex flex-row gap-4">
          <img src={image1} className="w-6 h-6 cursor-pointer" alt="" />
          <img src={image2} className="w-6 h-6 cursor-pointer" alt="" />
          <img src={image3} className="w-6 h-6 cursor-pointer" alt="" />
        </div>
      </div>

      <hr className="border-white/10 mt-8" />

      <div className="max-w-screen-xl mx-auto px-4 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <p className="cursor-pointer hover:text-white">Privacy Policy</p>
            <p className="cursor-pointer hover:text-white">Terms of Service</p>
            <p className="cursor-pointer hover:text-white">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}