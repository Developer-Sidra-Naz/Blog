// src/app/[id]/page.tsx
import CommentBox from "../Components/Comment";
import { products } from "../page";
import Image from "next/image";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return <h1 className="text-center text-red-600 text-2xl">Product Not Found!</h1>;
  }

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        {/* Display Image */}
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={200}
          className="mx-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-blue-900 font-extrabold text-2xl lg:text-4xl my-4 text-center">
          Introduction of {product.name}
        </h1>
        <p className="font-medium text-gray-700 leading-relaxed">{product.description}</p>

        <h1 className="text-blue-900 font-extrabold text-2xl lg:text-4xl my-4 text-center">
          Why we learn {product.name}
        </h1>
        <p className="font-medium text-gray-700 leading-relaxed">{product.des2}</p>

        <h1 className="text-blue-900 font-extrabold text-2xl lg:text-4xl my-4 text-center">
          How it works?
        </h1>
        <p className="font-medium text-gray-700 leading-relaxed">{product.des3}</p>

        <h1 className="text-blue-900 font-extrabold text-2xl lg:text-4xl my-4 text-center">
          Conclusion
        </h1>
        <p className="font-medium text-gray-700 leading-relaxed">{product.des4}</p>
      </div>

      <div className="mt-10">
        <CommentBox />
      </div>
    </div>
  );
};

export default ProductPage;
