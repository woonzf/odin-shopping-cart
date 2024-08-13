export default function Store({
  category,
  products,
  isLoading,
}: {
  category: category;
  products: product[];
  isLoading: boolean;
}) {
  return (
    <section className="">
      <div className="text-xl font-semibold capitalize">{category.name}</div>
      <div className="mt-3 flex flex-wrap gap-3">
        {isLoading ? (
          <div className="animate-pulse">Loading...</div>
        ) : (
          <>
            {products.map((product) => (
              <div
                key={product.id}
                className="aspect-[0.7] w-[150px] rounded-md bg-light p-3"
              >
                {product.title}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
