import { title } from "@/components/primitives";
import ProductCard from "@/components/ProductCard";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1
            className={title()}
            style={{ fontFamily: "'Rubik Glitch', sans-serif" }}
          >
            Products
          </h1>
        </div>
        <ProductCard />
      </section>
    </DefaultLayout>
  );
}
