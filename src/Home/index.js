import { Avatar } from "flowbite-react";
import Article from "../Components/Article";
import Cards from "../Components/Cards";
import MyFooter from "../Components/MyFooter";
import MyNav from "../Components/MyNav";
import { useEffect, useState } from "react";
function Home(){
    // state -> special variables
    // state is used to store data from api respone
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([true])
    const fetchProducts = (limit, offset) => {
        fetch(`https://api.escuelajs.co/api/v1/products`)
        .then(res => res.json)
        .then(res => {
            setProducts(res)
            setLoading(false)
        })
    }
    // execute 
    useEffect(() => {
        // call to api products
        fetchProducts(6, 0)
        console.log("in use effect")
    }, [])
    return (
        <>
            <MyNav />
            <main>
                <Article />
                <section>

                </section>
            </main>
        </>
    )   
}
export default Home;