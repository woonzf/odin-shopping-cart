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
    <section className="flex w-full flex-col">
      <div className="sticky top-12 bg-theme py-3 text-xl font-semibold capitalize portrait:top-24">
        {category.name}
      </div>
      <div className="flex flex-wrap gap-2">
        {isLoading ? (
          <div className="animate-pulse">Loading...</div>
        ) : (
          <>
            {products.map((product) => (
              <div
                key={product.id}
                className="aspect-[0.7] w-[150px] bg-light p-3"
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
