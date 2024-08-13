export default function fetchProducts(
  category: category,
  setProducts: any,
  setIsProductsLoading: any,
) {
  const abortController = new AbortController();
  const signal = abortController.signal;

  let defaultUrl: string = "https://fakestoreapi.com/products/";
  let url: string = "";

  setIsProductsLoading(true);

  if (category.id === 0) url = defaultUrl;
  else {
    const split: string[] = category.name.split(" ");
    const urlEnd: string = split.join("%20");
    url = defaultUrl + "category/" + urlEnd;
  }

  (async () => {
    try {
      const response: Response = await fetch(url, { signal });
      if (!signal.aborted) {
        if (response.ok) {
          const data: any = await response.json();
          setProducts(data);
          setIsProductsLoading(false);
        } else console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      if (!signal.aborted) console.error(error);
    }
  })();

  return () => abortController.abort();
}
