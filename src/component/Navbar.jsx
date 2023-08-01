import alba from '../images/alba-logo.png'
const Navbar = () => {
  return (
    <>
      <nav class="flex items-center justify-center flex-wrap p-6">
        <div class="flex-grow pl-16 items-center flex-shrink-0 text-white">
          <a href="/">
            <img src={alba} alt="" />
            </a>
        </div>
        
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-lg flex justify-between lg:flex-grow pr-[600px] font-bold">
            <a
              href="#responsive-header"
              class="block mt-4 pt-2  lg:inline-block lg:mt-0 text-black hover:text-white"
            >
              Service
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 pt-2 lg:inline-block lg:mt-0 text-black hover:text-white"
            >
              About
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 pt-2 lg:inline-block lg:mt-0 text-black hover:text-white"
            >
              Portfolio
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 pt-2 lg:inline-block lg:mt-0 text-black hover:text-white"
            >
              Blog
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 pt-2 lg:inline-block lg:mt-0 text-black hover:text-white"
            >
              Career
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
            >
                <div className='rounded-full font-normal bg-yellow-400 w-32 h-12 pt-2 text-center '>
                    Contact Us
                </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
