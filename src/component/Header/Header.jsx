import img from '../../assets/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className="text-3xl font-bold text-center">react core cap project</h1>
    <img src={img} alt="" />
    </header>
  );
};

export default Header;
