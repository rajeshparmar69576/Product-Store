// import React, { useState, useEffect } from 'react'

// // Simplified product service
// const productService = {
//   getProducts: async () => {
//     try {
//       const response = await fetch('http://localhost:1001/api/products');
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return [];
//     }
//   },

//   createProduct: async (productData) => {
//     try {
//       const response = await fetch('http://localhost:1001/api/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData)
//       });
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   },

//   editProduct: async(id,productData) =>{
//     try{
//       const response = await fetch(`http://localhost:1001/api/products/${id}`,{
//         method:"PUT",
//       },{
//         headers:{
//           'Content-Type':'application/json'
//         },
//         body : JSON.stringify(productData),
//       });
//       const data = await response.json();
//       return data.data
//     }catch (error) {
//       console.error('Error Editing product:', error);
//     }
//   },

//   deleteProduct: async (id) => {
//     try {
//       const response = await fetch(`http://localhost:1001/api/products/${id}`, {
//         method: 'DELETE',
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   }
// };

// function App() {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const fetchedProducts = await productService.getProducts();
//     setProducts(fetchedProducts);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await productService.createProduct(newProduct);
//     fetchProducts();
//     setNewProduct({ name: '', price: '', image: '' });
//   };

//   const handleDelete = async (id) => {
//     await productService.deleteProduct(id);
//     fetchProducts();
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <h1 className="text-3xl font-bold text-center text-brand-blue mb-6">
//         Product Management
//       </h1>

   

//       {/* Product Form */}
//       <form 
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6"
//       >
//         <div className="mb-4">
//           <input 
//             type="text" 
//             placeholder="Product Name"
//             value={newProduct.name}
//             onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required 
//           />
//         </div>
//         <div className="mb-4">
//           <input 
//             type="number" 
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required 
//           />
//         </div>
//         <div className="mb-4">
//           <input 
//             type="text" 
//             placeholder="Image URL"
//             value={newProduct.image}
//             onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required 
//           />
//         </div>
//         <button 
//           type="submit"
//           className="bg-brand-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//         >
//           Add Product
//         </button>
//       </form>

//       {/* Product List */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div 
//             key={product._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <img 
//               src={product.image} 
//               alt={product.name} 
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-brand-purple mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-700 mb-4">
//                 ${product.price}
//               </p>
//               <button 
//                 onClick={() => handleDelete(product._id)}
//                 className="bg-brand-pink hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';

// // Simplified product service
// const productService = {
//   getProducts: async () => {
//     try {
//       const response = await fetch('http://localhost:1001/api/products');
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       return [];
//     }
//   },

//   createProduct: async (productData) => {
//     try {
//       const response = await fetch('http://localhost:1001/api/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData),
//       });
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   },

//   editProduct: async (id, productData) => {
//     try {
//       const response = await fetch(`http://localhost:1001/api/products/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData),
//       });
//       const data = await response.json();
//       return data.data;
//     } catch (error) {
//       console.error('Error editing product:', error);
//     }
//   },

//   deleteProduct: async (id) => {
//     try {
//       const response = await fetch(`http://localhost:1001/api/products/${id}`, {
//         method: 'DELETE',
//       });
//       return await response.json();
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   },
// };

// function App() {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
//   const [editingProduct, setEditingProduct] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const fetchedProducts = await productService.getProducts();
//     setProducts(fetchedProducts);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editingProduct) {
//       // Update existing product
//       await productService.editProduct(editingProduct._id, newProduct);
//       setEditingProduct(null);
//     } else {
//       // Add new product
//       await productService.createProduct(newProduct);
//     }
//     fetchProducts();
//     setNewProduct({ name: '', price: '', image: '' });
//   };

//   const handleEdit = (product) => {
//     setEditingProduct(product);
//     setNewProduct({ name: product.name, price: product.price, image: product.image });
//   };

//   const handleDelete = async (id) => {
//     await productService.deleteProduct(id);
//     fetchProducts();
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <h1 className="text-3xl font-bold text-center text-brand-blue mb-6">Product Management</h1>

//       {/* Product Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6"
//       >
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={newProduct.name}
//             onChange={(e) =>
//               setNewProduct({ ...newProduct, name: e.target.value })
//             }
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="number"
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={(e) =>
//               setNewProduct({ ...newProduct, price: e.target.value })
//             }
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newProduct.image}
//             onChange={(e) =>
//               setNewProduct({ ...newProduct, image: e.target.value })
//             }
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-brand-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//         >
//           {editingProduct ? 'Update Product' : 'Add Product'}
//         </button>
//       </form>

//       {/* Product List */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-brand-purple mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-700 mb-4">${product.price}</p>
//               <button
//                 onClick={() => handleEdit(product)}
//                 className="bg-brand-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(product._id)}
//                 className="bg-brand-pink hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { productService } from './services/productService'
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchedProducts = await productService.getProducts();
    setProducts(fetchedProducts);
  };

  const handleCreateOrUpdate = async (productData) => {
    if (editingProduct) {
      // Update product
      await productService.editProduct(editingProduct._id, productData);
    } else {
      // Create new product
      await productService.createProduct(productData);
    }
    fetchProducts();
    setEditingProduct(null); // Reset edit mode
  };

  const handleDelete = async (id) => {
    await productService.deleteProduct(id);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product); // Set product to edit
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center text-brand-blue mb-6">
        Product Management
      </h1>
      <ProductForm onSubmit={handleCreateOrUpdate} editingProduct={editingProduct} />
      <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
