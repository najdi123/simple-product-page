import { ProductsType } from "@/app/page";
import Link from "next/link";

type ProductCardProps={
    product:ProductsType
}

const ProductCard = ({product}:ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`} className="border p-4 rounded-3xl w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33%-0.5rem)]">
           <p>{product.name}</p>
          <div className="flex gap-2">
              <p>Price:</p>
              <p>{product.price}</p>
          </div>
    </Link>
  )
};

export default ProductCard;
