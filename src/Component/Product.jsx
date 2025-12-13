import { LiaStarSolid } from "react-icons/lia";
import { Link } from "react-router";

const Product = (props) => {
  return (
    <Link to = {props.path} className="w-[28%] mb-3 shadow-2xl border border-gray-500 hover:scale-105 transition-all duration-500">
        <img className="w-full h-[350px]" src = {props.img}/>
        <div className="p-3 text-[18px] space-y-2.5">
            <h1 className="text-3xl">{props.name}</h1>
            <p>{props.description || props.size}</p>
            <ul className="flex justify-center space-x-2">
                <li><LiaStarSolid className="text-yellow-500"/></li>
                <li><LiaStarSolid className="text-yellow-500"/></li>
                <li><LiaStarSolid className="text-yellow-500"/></li>
                <li><LiaStarSolid /></li>
                <li><LiaStarSolid /></li>
            </ul>
            <p className="text-center text-gray-500">{props.price}$</p>
        </div>
    </Link>
  )
}

export default Product
