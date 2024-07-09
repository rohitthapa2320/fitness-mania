import Logo from '../assets/icons/logo.png';

const Footer = () => (
  <div className="mt-20 bg-[#fff3f4]">
    <div className="flex flex-col flex-wrap g-8 items-center px-10 pt-6">
      <img src={Logo} alt="logo" className='w-[40px] h-[40px]' />
    </div>
    <h5 className='text-center text-lg mt-10 pb-10'>Made with ❤️ by Fitness Mania</h5>
  </div>
);

export default Footer;