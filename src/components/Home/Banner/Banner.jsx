import bannerImg from '/banner.png';
import { RiFocus2Fill } from "react-icons/ri";

const Banner = () => {
  return (
    <div className='grid md:grid-cols-2 items-center justify-center container lg:max-w-7xl mx-auto py-4 md:py-5 lg:py-7 px-4 md:px-6 lg:px-8'>
      <div className="max-w-[500px] flex flex-col items-center md:items-start md:space-y-5 lg:space-y-6">
        <p className="inline-flex items-center text-lg gap-2 px-4 p-1 rounded-full bg-linear-to-r from-[#4F39F6]/20 to-[#9514FA]/20 text-sm">
          <span className="text-[#4F39F6] animate-ping text-xs ">
            <RiFocus2Fill />
          </span>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </p>
        <h2 className="text-3xl text-center md:text-start md:text-4xl lg:text-5xl font-bold">
          Supercharge Your Digital Workflow
        </h2>
        <p className="text-[#627382] text-center md:text-start">
          Access premium AI tools, design assets, templates, and productivity 
          software—all in one place. Start creating faster today.  Explore
          Products
        </p>
        <div className="flex items-center  gap-2 mt-2">
        <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Explore Products</button>
        <button className="btn btn-primary btn-outline rounded-full hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white ">Explore Products</button>
        </div>
      </div>
      <div >
        <img className='md:max-w-sm lg:max-w-lg rounded-lg shadow-2xl mx-auto mt-5 md:mt-0' src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
