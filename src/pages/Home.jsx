import Product from '../assets/Product.json'
import Technic from '../assets/Tech.json'
import SaleProduct from '../assets/SaleProduct.json'
import ProductCard from '../component/ProductCard';
import Tech from '../component/Tech';
import Portfolio from '../assets/Portfolio.json'
import PortfolioCard from '../component/PortfolioCard'
import Company from '../component/Company'
const Home =()=>{
    return (
        <>
            <div>
                <div className='text-center text-lg text-[#C4C4C4]'>
                    Complete Package
                </div>
                <div className='text-center text-4xl font-bold drop-shadow-2xl pb-16'>
                    From product design to software continuous delivery
                </div>
                <div className=' grid grid-cols-3 justify-center gap-14 pl-10 pr-10'>
                    {Product.map((Product) =>{
                        return <ProductCard img={Product.img} title = {Product.title} description = {Product.description}/>
                    })}
                </div>
                <div className='grid grid-cols-6 gap-3 pt-20 pl-60 pr-60 pb-20'>
                    {Technic.map((Technic)=>{
                        return <Tech img={Technic.img}/>
                    })}
                </div>
            </div>
            <div className=" bg-[#272727]">
                <div className=" text-[#FFCE07] text-center text-4xl pb-10 pt-10">
                    Our Progress Comes with a Collaboration Between<br /> Creativity, Ideas, and Technology
                </div>
                <div className=' grid grid-cols-3 text-center align-middle text-white'>
                    <div className='grid grid-rows-2'>
                        <span className='text-5xl text-center pl-10'>1000+ &nbsp;</span>
                        <span className='text-2xl'>Designs</span>
                    </div>
                    <div className='grid grid-rows-2'>
                        <span className='text-5xl text-center pl-5'>30+</span>
                        <span className='text-2xl'>Products</span>
                    </div>
                    <div className='grid grid-rows-2'>
                        <span className='text-5xl text-center'>58+</span>
                        <span className='text-2xl'>Website Developments</span>
                    </div>
                </div>
            </div>
            <div>
                <div className=' text-center text-gray-200 text-lg pt-10'>
                    Portfolio
                </div>
                <div className=' text-center pb-10 font-bold text-4xl pt-4'>
                    The Software that we build <br /> takes our clients to the next level
                </div>
                <div className='grid grid-cols-3 gap-8 gap-x-2 pl-10 pr-10 justify-evenly'>
                    {Portfolio.map((Portfolio)=>{
                        return <PortfolioCard img={Portfolio.img} type={Portfolio.type} title ={Portfolio.title} description = {Portfolio.description}/>
                    })}
                </div>
            </div>
            <div className='flex items-center justify-center text-center pt-10'>
                <div className='rounded-full bg-yellow-300 w-40 h-16 pt-4'>
                    Learn More
                </div>
            </div>
            <div>
                <Company />
            </div> 
            <div className='bg-yellow-300 text-center flex flex-col items-center justify-center py-10 mx-40 rounded-lg border-solid'>
                <span className='text-2xl'>Is software important for your business?</span>
                <span className='text-4xl'>Build it with Albatech</span>
                <button className='bg-yellow-300 border-x-stone-900 rounded-full pt-10'>Consultation Now</button>
            </div>


        </>
    );
}

export default Home;