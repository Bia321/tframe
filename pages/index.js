import axios from 'axios'
import Link from 'next/link'
 function Products({products}) {
  return (
    <div>
      {
        products.map((detail)=>(

          <div className="box" key={detail.id}>
          <Link href="/detail/[id]" as={`/detail/${detail.id}`}>
          <img src={detail.image} width={320} height={305}/>
          <div>
          
          <h4>{detail.title}</h4>
          
          </div>
          
          <h5>${detail.price}</h5>
          </Link>
        </div>
        ))
      }
    </div>
  )
 }

 export async function getStaticProps(context){

  const response= await axios.get(
    'https://fakestoreapi.com/products'
  );
  const data = await response.data;
  return {
    props: {products:data},
  }
  
}

export default Products;