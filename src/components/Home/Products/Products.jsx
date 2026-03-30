import { use } from "react";
import Product from "../Product/Product";

const Products = ({promiseData}) => {
    const data =use(promiseData)
    console.log(data)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 container lg:max-w-7xl mx-auto">
            {
                data.map(item=><Product item={item}/>)
            }
        </div>
    );
};

export default Products;