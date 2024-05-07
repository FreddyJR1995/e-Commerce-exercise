import { useState, useEffect, createContext } from "react";
import PropTypes from 'prop-types'; 

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(0);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [ratingProduct, setRatingProduct] = useState(1);
  const [selectedRate, setSelectedRate] = useState(1);
  const [order, setOrder] = useState("");
  const [categories, setCategories] = useState([]);
  const [openCartSection, setOpenCartSection] =  useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        setProducts(productList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const searchedProducts = products.filter(product => {
    const productName = product.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return productName.includes(searchText);
  }).filter(product => {
    return categories.length === 0 ? true : categories.includes(product.category);
  })
  .filter(product => {
    return categories.length === 0 ? product.rating.rate >= selectedRate : (categories.includes(product.category) && product.rating.rate >= selectedRate);
  })
  .sort((a, b) => {
    switch (order) {
      case "Name":
        return a.title.localeCompare(b.title);
      case "Price_Low":
        return a.price - b.price;
      case "Price_High":
        return b.price - a.price;
      default:
        return 0;
    }
  });


  const filterByCategories = (id) => {
    setCategories((prevCategories) => {
      const categoryExists = prevCategories.includes(id);
      return categoryExists
        ? prevCategories.filter((category) => category !== id)
        : [...prevCategories, id];
    });
  };

  const addProducts = (productToAdd) => {
    const isProductExist = selectedProducts.find(product => product.id === productToAdd.id);
    if (!isProductExist) {
      setSelectedProducts([...selectedProducts, productToAdd]);
      setIsOpen(false)
      setOpenCartSection(true)
    }
  }

  const removeProduct = (productId) => {
    setSelectedProducts(selectedProducts.filter(product => product.id !== productId));
  }

  const updateProductTotal = (productId, count) => {
    setSelectedProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === productId) {
          const total = product.price * count;
          return { ...product, count, total };
        }
        return product;
      });
    });
  };
  

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        searchedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        setRatingProduct,
        ratingProduct,
        order,
        setOrder,
        categories,
        setCategories,
        filterByCategories,
        selectedRate,
        setSelectedRate,
        openCartSection,
        setOpenCartSection,
        addProducts,
        selectedProducts,
        productId,
        setProductId,
        removeProduct,
        updateProductTotal
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchContext, SearchProvider };