'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [activeCategory, setActiveCategory] = useState('all');

  const fetchProducts = (url) => {
    axios.get(url)
      .then((response) => {
        if (response.status !== 200) return alert('something went wrong');
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    if (activeCategory === 'all') {
      fetchProducts('https://dummyjson.com/products?limit=194');
    }
    else {
      fetchProducts(`https://dummyjson.com/products/category/${activeCategory}`);
    }
  }, [activeCategory]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error)
        alert('something went wrong')
      })
  }, [])
  let searchitem = (element) => {
    let data = element.target.value;
    axios.get(`https://dummyjson.com/products/search?q=${data}`)
      .then((ress) => {
        setProducts(ress.data.products);
      })


  }

  return (
    <>
      <div className=" text-center mx-auto ">
        <input type="text" placeholder="search" onChange={searchitem} className="w-50% p-2 bg-slate-500 m-2" />
      </div>
      <div className="w-full grid grid-cols-[25%_auto] gap-2  ">
        <div className=" h-[100vh] overflow-y-scroll ">

          <ul class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className={`w-full ${(activeCategory === 'all') ? 'bg-white text-[black]' : ''} px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer`}
              onClick={() => { setActiveCategory('all') }}
            >All</li>
            {
              categories.map((category) => (
                <li className={`w-full ${(activeCategory === category.slug) ? 'bg-white text-[black]' : ''} px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer`}
                  onClick={() => { setActiveCategory(category.slug) }}
                >
                  {category.name}</li>
              ))
            }
          </ul>

        </div>

        {products.length === 0 ? <h2 className="text-lg" >product no found</h2> : <div className="grid grid-cols-4 gap-2  h-[100vh] overflow-y-scroll ">
          {
            products.map((product) => (
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src={product.thumbnail} />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>

            ))
          }




        </div>}


      </div>
    </>
  );
}
