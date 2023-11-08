export async function fetchProductsByCategory(category: string) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      if (!response.ok) {
        throw new Error('No se pudo obtener la información de productos.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error; 
    }
  }