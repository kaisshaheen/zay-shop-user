import { Link } from "react-router"


const Category = (props) => {
  return (
    <div className="text-center space-y-5">
        <div className="rounded-full border border-[#dee2e6] overflow-hidden w-[300px] h-[300px]">
            <img src={props.img} />
        </div>
        <p className="text-2xl">{props.name}</p>
        <Link className="text-[20px] text-white bg-[#59ab6e] px-4 py-2 rounded-lg hover:bg-[#77c28a] transition duration-500">Go Shop</Link>
    </div>
  )
}

export default Category
