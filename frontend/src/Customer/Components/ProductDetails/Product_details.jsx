import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import Rating from "@mui/material/Rating";
import { Box, Grid2, LinearProgress } from "@mui/material";
import Product_ReviewCard from "./Product_ReviewCard";
import { mens_kurta } from "../../../../public/Data/Men/men_kurta";
import SectionCarousrl from "../HomeCarouselCard/SectionCarousrl";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Product_details() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10 ">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product.images[0].alt}
                src={product.images[0].src}
                className="hidden size-full rounded-lg object-cover lg:block"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div
                  key={item.src}
                  className="aspect-h-2 aspect-w-3 overflow-hidden  rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    alt={item.alt}
                    src={item.src}
                    className="aspect-3/2 w-full rounded-lg object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                Universaloutfit
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                Women White Top
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">₹199</p>
                <p className="line-through opacity-50">₹211</p>
                <p className="text-green-600 font-semibold">%5 OFF</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={3.5} readOnly />
                  <p className="opacity-50 text-sm">56450 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3870 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4 grid grid-cols-4 gap-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-2 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1",
                            size.inStock && selectedSize === size
                              ? "border-indigo-500"
                              : "border-gray-300"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
                  
                  className="text-white font-medium py-4 px-8 mt-5 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  
                >
                  Add To Cart
                </button>
              </form>
            </div>

            {/* Description and details */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              <div>
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-900">{product.description}</p>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Rating And Reviewes */}
        <section >
          <h1 className="font-semibold text-lg  pb-4">Rating And Reviews</h1>
          <div className="border-t p-5  flex ">
            {/* Create a grid with two columns */}
            <Grid2 container spacing={7} className="grid grid-cols-2 gap-7">
              {/* Left side for reviews */}
              <Grid2 item xs={7} justifyItems={"start"}>
                <div className="space-y-5 space-x-5">
                  {[1, 1, 1].map((item, index) => (
                    <Product_ReviewCard key={index} />
                  ))}
                </div>
              </Grid2>

              {/* Right side for product rating */}
              

    <Grid2 item xs={12} sm={6} justifyItems={"end"}  >
      <h1 className="text-xl font-semibold pb-1 text-center">Product Rating</h1>
      
      <div className=" items-center space-x-3 mb-4 ">
        <Rating value={4.6} precision={0.5} readOnly />
        <p className="opacity-60">59856 Ratings</p>
      </div>

      {/* Progress Bar Section */}
      <div className="flex justify-center items-center w-full py-4">
        <div className="w-full max-w-3xl">
         
            <Box  className="flex items-center justify-center w-full mb-4">
              <Box className="w-full sm:w-1/6 text-center">
                <p>Excellent</p>
              </Box>
              <Box className="ml-4 sm:ml-10 w-full sm:w-7/12">
                <LinearProgress
                  sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                  variant="determinate"
                  value={40}
                  color="success"
                />
              </Box>
            </Box>
            <Box  className="flex items-center justify-center w-full mb-4">
              <Box className="w-full sm:w-1/6 text-center">
                <p>Very Good</p>
              </Box>
              <Box className="ml-4 sm:ml-10 w-full sm:w-7/12">
                <LinearProgress
                  sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                  variant="determinate"
                  value={30}
                  color="success"
                />
              </Box>
            </Box>
            <Box  className="flex items-center justify-center w-full mb-4">
              <Box className="w-full sm:w-1/6 text-center">
                <p>Good</p>
              </Box>
              <Box className="ml-4 sm:ml-10 w-full sm:w-7/12">
                <LinearProgress
                  sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7,color:'yellow' }}
                  variant="determinate"
                  value={30}
                />
              </Box>
            </Box>
            <Box  className="flex items-center justify-center w-full mb-4">
              <Box className="w-full sm:w-1/6 text-center">
                <p>Avarage</p>
              </Box>
              <Box className="ml-4 sm:ml-10 w-full sm:w-7/12">
                <LinearProgress
                  sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                  variant="determinate"
                  value={20}
                  color="warning"
                />
              </Box>
            </Box>
            <Box  className="flex items-center justify-center w-full mb-4">
              <Box className="w-full sm:w-1/6 text-center">
                <p>Poor</p>
              </Box>
              <Box className="ml-4 sm:ml-10 w-full sm:w-7/12">
                <LinearProgress
                  sx={{ bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }}
                  variant="determinate"
                  value={10}
                  color="error"
                />
              </Box>
            </Box>
       
        </div>
      </div>
    </Grid2>


            </Grid2>
          </div>
        </section>
        <section>
          <h1 >Similar Products</h1>
                  <div className="">
                  <SectionCarousrl data={mens_kurta} sectionName={"Men's Kurta"} />
                  </div>
        </section>
      </div>
    </div>
  );
}

export default Product_details;
