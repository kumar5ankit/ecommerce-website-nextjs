import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer class="bg-gray-900 text-gray-300 py-10">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
    
    <div>
      <h2 class="text-white text-2xl font-bold mb-4">ShopName</h2>
      <p class="text-gray-400">
        Discover the best products at amazing prices. We bring the world to your doorstep.
      </p>
    </div>


    <div>
      <h3 class="text-white text-xl font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white">Home</a></li>
        <li><a href="#" class="hover:text-white">Shop</a></li>
        <li><a href="#" class="hover:text-white">About Us</a></li>
        <li><a href="#" class="hover:text-white">Contact Us</a></li>
      </ul>
    </div>


    <div>
      <h3 class="text-white text-xl font-semibold mb-4">Customer Service</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white">Shipping & Returns</a></li>
        <li><a href="#" class="hover:text-white">FAQs</a></li>
        <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
        <li><a href="#" class="hover:text-white">Terms of Service</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-white text-xl font-semibold mb-4">Stay Connected</h3>
      <form class="flex items-center space-x-2 mb-4">
        <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 rounded bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none"/>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe</button>
      </form>
      
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white">
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35 8.62 8.62 0 0 1-2.72 1.04 4.26 4.26 0 0 0-7.27 3.88A12.1 12.1 0 0 1 2.67 4.9a4.25 4.25 0 0 0 1.32 5.68 4.23 4.23 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.41 4.18 4.28 4.28 0 0 1-1.92.07 4.26 4.26 0 0 0 3.97 2.95A8.56 8.56 0 0 1 2 19.28a12.07 12.07 0 0 0 6.56 1.92c7.87 0 12.17-6.52 12.17-12.17 0-.19 0-.39-.01-.58a8.7 8.7 0 0 0 2.14-2.22z"/>
          </svg>
        </a>
        <a href="#" class="hover:text-white">
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.04c-5.53 0-10 4.47-10 10.01 0 4.42 3.64 8.08 8.34 9.15.61.11.83-.27.83-.6v-2.17c-3.39.74-4.09-1.44-4.09-1.44-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.26 1.85 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.63-2.71-.31-5.56-1.35-5.56-6.01 0-1.33.47-2.42 1.23-3.27-.12-.31-.53-1.57.12-3.26 0 0 1.01-.32 3.31 1.24a11.5 11.5 0 0 1 6.02 0c2.31-1.56 3.32-1.24 3.32-1.24.65 1.69.24 2.95.12 3.26.76.85 1.23 1.94 1.23 3.27 0 4.68-2.86 5.69-5.58 5.99.44.38.83 1.13.83 2.29v3.39c0 .33.22.72.84.6 4.71-1.08 8.35-4.73 8.35-9.15 0-5.54-4.48-10.01-10-10.01z"/>
          </svg>
        </a>
        <a href="#" class="hover:text-white">
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.16c3.18 0 3.56.01 4.81.07 1.17.06 1.96.25 2.42.42a4.92 4.92 0 0 1 1.77 1.1 4.92 4.92 0 0 1 1.1 1.76c.17.47.36 1.26.42 2.43.06 1.24.07 1.62.07 4.8s-.01 3.57-.07 4.81c-.06 1.17-.25 1.96-.42 2.42a4.92 4.92 0 0 1-1.1 1.77 4.92 4.92 0 0 1-1.77 1.1c-.47.17-1.26.36-2.42.42-1.24.06-1.62.07-4.81.07s-3.56-.01-4.8-.07c-1.17-.06-1.96-.25-2.42-.42a4.92 4.92 0 0 1-1.77-1.1 4.92 4.92 0 0 1-1.1-1.77c-.17-.47-.36-1.26-.42-2.42-.06-1.24-.07-1.62-.07-4.81s.01-3.56.07-4.8c.06-1.17.25-1.96.42-2.43a4.92 4.92 0 0 1 1.1-1.76 4.92 4.92 0 0 1 1.77-1.1c.47-.17 1.26-.36 2.42-.42 1.24-.06 1.62-.07 4.8-.07m0-2.16C8.68 0 8.26.01 7.01.07 5.69.13 4.48.36 3.48.77a7.19 7.19 0 0 0-2.58 1.72A7.19 7.19 0 0 0 .77 5.07C.36 6.07.13 7.29.07 8.6.01 9.85 0 10.26 0 12s.01 2.15.07 3.4c.06 1.31.29 2.53.7 3.53a7.19 7.19 0 0 0 1.72 2.58 7.19 7.19 0 0 0 2.58 1.72c1 .41 2.21.64 3.53.7 1.25.06 1.67.07 4.98.07s3.73-.01 4.98-.07c1.31-.06 2.53-.29 3.53-.7a7.19 7.19 0 0 0 2.58-1.72 7.19 7.19 0 0 0 1.72-2.58c.41-1 .64-2.21.7-3.53.06-1.25.07-1.67.07-4.98s-.01-3.73-.07-4.98c-.06-1.31-.29-2.53-.7-3.53a7.19 7.19 0 0 0-1.72-2.58A7.19 7.19 0 0 0 17.99.77c-1-.41-2.21-.64-3.53-.7C15.26.01 14.85 0 12 0z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

 
  <div class="mt-10 text-center text-gray-500 border-t border-gray-700 pt-6">
    <p>&copy; 2024 ShopName. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}
