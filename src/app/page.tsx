import ProductCard from "@/components/ProductCard";


export type ProductsType={id:number,name:string,price:number}

const Products:ProductsType[]=[
  {id:1,name:"phone",price:500},
  {id:2,name:"laptop",price:1000},
  {id:3,name:"headphones",price:100},
  {id:4,name:"mouse",price:50},
]

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <p className="text-3xl font-bold mb-4">    Products</p>
      <div className="flex flex-wrap gap-4">
      {Products.map((product:ProductsType)=>{
        return(
          <ProductCard key={product.id} product={product}/>
        )
      })}
      </div>
    </div>
  );
}
