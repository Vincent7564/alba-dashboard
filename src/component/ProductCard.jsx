import Maintenance from '../images/Maintenance.png'

const ProductCard = (props) =>{
    return(
        <div>
            <div className=" w-200 h-200 rounded-xl border hover:border-yellow-200">
                    <div className="h-150">
                        <img src={require("../images/" + props.img)} alt="" />
                    </div>
                <div className=" text-2xl text-yellow-400 font-bold">
                    {props.title}
                </div>
                <div className=''>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;