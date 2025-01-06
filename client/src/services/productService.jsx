const BASE_URL = 'http://localhost:1001/api/products';

export const productService = {
  getProducts: async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  createProduct: async (productData) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error creating product:', error);
    }
  },

  editProduct: async (id, productData) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error editing product:', error);
    }
  },

  deleteProduct: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  },
};
