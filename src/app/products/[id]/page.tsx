import { Products, ProductsType } from "@/app/page";
import { notFound } from "next/navigation";

type ProductPageProps={
    params:{id:string}
}

const ProductPage = ({params}:ProductPageProps) => {
  const Product:ProductsType | undefined=Products.find((product)=>product.id===Number(params.id))

  if (!Product){
    return(
        notFound()
    )
  }
  return (
    <div className="container mx-auto border m-4 p-4 flex justify-between items-center">
             <p className="text-3xl font-bold">{Product?.name}</p>
          <div className="flex gap-2">
              <p>Price:</p>
              <p>{Product?.price}</p>
          </div>
    </div>
  )
};

export default ProductPage;
