import axios from 'axios'

function Detail({product = {}}) {
  return (
    <div>
         <img src={product.image} alt="" width={320} height={305}/>
        <a href={product.id}>{product.title}</a>
        <h1>{product.title}</h1>
    </div>
  )
}


export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    )

    const product = await response.data;
    return {
        props: {product}
    }
}

export async function getStaticPaths(){
    const response = await axios.get (
        'https://fakestoreapi.com/products'
    )
    const products = await response.data;
    const paths = products.map((product)=>{
        return {params: {id: String(product.id)}}
    })
    
    return {
        paths,
        fallback: false,
    }
}

export default Detail