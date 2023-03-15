import Image from "next/image";
import React from "react";
import banner from "../../public/assets/images/shop/Banner.png";
import test from "../../public/assets/images/shop/test.png";
import star from "../../public/assets/images/shop/Group.png";
import shoe from "../../public/assets/images/shop/show.png";
// import { Input } from "postcss";

const Shop = () => {
  const products = [
    {
      id: "1",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "11",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "21",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "13",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "14",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "1",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "11",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "21",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "13",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "14",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "1",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "11",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "21",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "13",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "14",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "1",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "11",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "21",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "13",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "14",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "15",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "16",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "17",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "18",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "19",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "10",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "01",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "91",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "81",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "71",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "61",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "51",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "41",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "31",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
    {
      id: "21",
      price: "৳ 300 /pair",
      sold: "32970",
      title: "jhar batti",
      img: test,
      rating: star,
    },
  ];

  return (
    <div className="mx-10 ">
      <div className="flex items-center justify-center ">
        <Image src={banner} alt="banner" width={1200} height={800} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr]  gap-10  w-full ">
        {/* left side */}
        <div>
          <div className="">
            <h1 className="text-xl font-semibold"> All Categories</h1>
            <hr className="border border-black mb-4 mt-2" />
            <button className="text-[#585858]">Fashion</button> <br />
            <button className="text-[#FF5757]">Home & Garden</button>
            <br />
            <button className="text-[#585858]">Electronics</button>
            <br />
            <button className="text-[#585858]">Furniture</button>
            <br />
            <button className="text-[#585858]">Healthy & Beauty</button>
            <br />
            <button className="text-[#585858]">Gift Ideas</button>
            <br />
            <button className="text-[#585858]">Toy & Games</button>
            <br />
            <button className="text-[#585858]">Cooking</button>
            <br />
            <button className="text-[#585858]">Smart Phones</button>
            <br />
            <button className="text-[#585858]">Cameras & Photo</button>
            <br />
            <button className="text-[#585858]"></button>
            <br />
          </div>
          {/* price */}
          <div>
            <h1 className="text-xl font-semibold">Price</h1>{" "}
            <hr className="border border-black mb-4 mt-2" />
            <h2> ৳30.00 - ৳90.00 </h2>
            <h2> ৳50.00 - ৳100.00 </h2>
            <h2> ৳500.00 - ৳1000.00 </h2>
            <div className="flex gap-2  mt-4">
              <button className="border border-gray-400 px-3 py-1 rounded">
                ৳ Min
              </button>
              <button className="border border-gray-400 px-3 py-1 rounded">
                ৳ Max
              </button>
              <button className="bg-[#FF5757]  px-3 py-1 rounded">Go</button>
            </div>
          </div>

          {/* size */}
          <div className="mt-7">
            <h1 className="text-xl font-semibold">Size</h1>{" "}
            <hr className="border border-black mb-4 mt-2" />
            <form action="" className="">
              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Extra large"
                  name="Extra large "
                  value=" Extra large"
                />
                <label for="Extra large"> Extra large</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Large"
                  name="Large "
                  value="Large "
                />
                <label for="Large"> Large </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Medium"
                  name="Medium "
                  value="Medium "
                />
                <label for="Medium"> Medium </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id="Small "
                  name="Small "
                  value="Small "
                />
                <label for="Small"> Small</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id="36 " name=" 36" value=" 36" />
                <label for="36"> 36</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id=" 37" name="37 " value="37 " />
                <label for="37"> 37</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id="38 " name=" 38" value="38 " />
                <label for="38"> 38 </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id=" 39" name=" 39" value="39 " />
                <label for="39"> 39 </label>
                <br></br>
              </div>
            </form>
          </div>

          {/* Material */}
          <div className="mt-7">
            <h1 className="text-xl font-semibold">Material</h1>{" "}
            <hr className="border border-black mb-4 mt-2" />
            <form action="" className="">
              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Silver"
                  name="Silver "
                  value=" Silver"
                />
                <label for="Silver"> Silver</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id=" Wood" name="Wood " value="Wood " />
                <label for="Wood"> Wood </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Glass"
                  name="Glass "
                  value="Glass "
                />
                <label for="Glass"> Glass </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id="Alloy "
                  name="Alloy "
                  value="Alloy "
                />
                <label for="Alloy"> Alloy</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id="Pu Leather "
                  name=" Pu Leather"
                  value=" Pu Leather"
                />
                <label for="Pu Leather"> Pu Leather</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Polyestar"
                  name="Polyestar "
                  value="Polyestar "
                />
                <label for="Polyestar"> Polyestar</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id="Ceramics "
                  name=" Ceramics"
                  value="Ceramics "
                />
                <label for="Ceramics"> Ceramics </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Synthetic Fiber"
                  name=" Synthetic Fiber"
                  value="Synthetic Fiber "
                />
                <label for="Synthetic Fiber"> Synthetic Fiber </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Plastics"
                  name=" Plastics"
                  value="Plastics "
                />
                <label for="Plastics"> Plastics </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Cotton"
                  name=" Cotton"
                  value="Cotton "
                />
                <label for="Cotton"> Cotton </label>
                <br></br>
              </div>
            </form>
          </div>

          {/* Color */}
          <div className="mt-7">
            <h1 className="text-xl font-semibold">Color</h1>{" "}
            <hr className="border border-black mb-4 mt-2" />
            <form action="" className="">
              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Black"
                  name="Black "
                  value=" Black"
                />
                <label for="Black"> Black</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id=" Blue" name="Blue " value="Blue " />
                <label for="Blue"> Blue </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Brown"
                  name="Brown "
                  value="Brown "
                />
                <label for="Brown"> Brown </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id="Green "
                  name="Green "
                  value="Green "
                />
                <label for="Green"> Green</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id="Grey " name=" Grey" value=" Grey" />
                <label for="Grey"> Grey</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Orange"
                  name="Orange "
                  value="Orange "
                />
                <label for="Orange"> Orange</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input type="checkbox" id="Pink " name=" Pink" value="Pink " />
                <label for="Pink"> Pink </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Yellow"
                  name=" Yellow"
                  value="Yellow "
                />
                <label for="Yellow"> Yellow </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" White"
                  name=" White"
                  value="White "
                />
                <label for="White"> White </label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Golden"
                  name=" Golden"
                  value="Golden "
                />
                <label for="Golden"> Golden </label>
                <br></br>
              </div>
            </form>
          </div>

          {/* Order */}
          <div className="mt-7">
            <h1 className="text-xl font-semibold">Order</h1>{" "}
            <hr className="border border-black mb-4 mt-2" />
            <form action="" className="">
              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Stock Products"
                  name="Stock Products"
                  value=" Stock Products"
                />
                <label for="Stock Products"> Stock Products</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Pre-Order"
                  name="Pre-Order "
                  value="Pre-Order "
                />
                <label for="Pre-Order"> Pre-Order </label>
                <br></br>
              </div>
            </form>
          </div>

          {/* Service */}
          <div className="mt-7">
            <h1 className="text-xl font-semibold">Service</h1>{" "}
            <hr className="border border-black mb-4 mt-2" />
            <form action="" className="">
              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Cash on Delivery"
                  name="Cash on Delivery"
                  value=" Cash on Delivery"
                />
                <label for="Cash on Delivery"> Cash on Delivery</label>
                <br></br>
              </div>

              <div className="mb-3">
                <input
                  type="checkbox"
                  id=" Free Shipping"
                  name="Free Shipping "
                  value="Free Shipping "
                />
                <label for="Free Shipping"> Free Shipping </label>
                <br></br>
              </div>
            </form>
          </div>

          {/* others */}
          <div className="mt-7">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Order</h1>{" "}
              <p className="text-3xl"> + </p>
            </div>
            <hr className="border border-black mb-4 mt-2" />
          </div>

          {/* TOP RATED PRODUCTS */}
          <div className="mt-16">
            <h1 className="text-lg font-semibold">TOP RATED PRODUCTS</h1>{" "}
            <hr className="     border-2 border-[#EAEAEA] hover:border-[#016EEF] duration-300 mb-4 mt-3" />
            {/* card 1 */}
            <div>
              <div className=" flex justify-between gap-2 text-left border p-2  rounded-md  ">
                <Image
                  src={shoe}
                  width={0}
                  height={0}
                  alt="product"
                  className="h-20 w-20"
                />

                <div className="py-2">
                  <h1 className="font-semibold mb-2">Nike</h1>
                  <h2 className="mb-1">৳ 300 /pair</h2>
                  <Image src={star} alt="ratig" className="mb-2" />
                </div>
              </div>
            </div>
            <hr className="     border-2 border-[#EAEAEA] hover:border-[#016EEF] duration-300 mb-4 mt-3" />
            {/* card 2 */}
            <div>
              {" "}
              <div className=" flex justify-between gap-2 text-left border p-2  rounded-md  ">
                <Image
                  src={shoe}
                  width={0}
                  height={0}
                  alt="product"
                  className="h-20 w-20"
                />

                <div className="py-2">
                  <h1 className="font-semibold mb-2">Nike</h1>
                  <h2 className="mb-1">৳ 300 /pair</h2>
                  <Image src={star} alt="ratig" className="mb-2" />
                </div>
              </div>
            </div>
            {/* card 3 */}
            <hr className="     border-2 border-[#EAEAEA] hover:border-[#016EEF] duration-300 mb-4 mt-3" />
            <div>
              {" "}
              <div className=" flex justify-between gap-2 text-left border p-2  rounded-md  ">
                <Image
                  src={shoe}
                  width={0}
                  height={0}
                  alt="product"
                  className="h-20 w-20"
                />

                <div className="py-2">
                  <h1 className="font-semibold mb-2">Nike</h1>
                  <h2 className="mb-1">৳ 300 /pair</h2>
                  <Image src={star} alt="ratig" className="mb-2" />
                </div>
              </div>
            </div>
            {/* card 4 */}
            <hr className="     border-2 border-[#EAEAEA] hover:border-[#016EEF] duration-300 mb-4 mt-3" />
            <div>
              {" "}
              <div className=" flex justify-between gap-2 text-left border p-2  rounded-md  ">
                <Image
                  src={shoe}
                  width={0}
                  height={0}
                  alt="product"
                  className="h-20 w-20"
                />

                <div className="py-2">
                  <h1 className="font-semibold mb-2">Nike</h1>
                  <h2 className="mb-1">৳ 300 /pair</h2>
                  <Image src={star} alt="ratig" className="mb-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}

        <div className="">
          {/* upper filter section */}
          <div>
            <div className="flex items-center gap-1 border border-red-400">
              <h2 className="font-semibold"> Filtered by:</h2>
              <button className="border border-gray-400 rounded-full px-2 ">
                Home & Garden
              </button>
              <button className="border border-gray-400 rounded-full px-2 ">
                medium
              </button>

              <button className="text-[#016EEF]">Clear All</button>
            </div>

            <div className="flex items-center   border-2 border-green-400 w-full ">
              {/* <h2 className="text-[#585858]">Showing 1–30 of 2537 results</h2> */}
              <h2 className="font-semibold">Sort by:</h2>
              {/* 1st dropdown */}
              <div className="relative w-full lg:max-w-sm">
                <select className="w-3/4  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option>Default Sorting</option>
                  <option className="text-[#FF5757]">Default Sorting</option>
                  <option>Top Selling</option>
                  <option>latest first</option>
                  <option>oldest first</option>
                  <option>higher Price first</option>
                  <option>lower Price first</option>
                </select>
              </div>
              {/* 2nd dropdown */}{" "}
              <div className="relative w-full lg:max-w-sm">
                <select className="w-3/6  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option>All Star</option>
                  <option className="text-[#FF5757]">All Star</option>
                  <option>5 Star</option>
                  <option>4 Star</option>
                  <option>3 Star</option>
                  <option>2 Star</option>
                  <option>1 Star</option>
                </select>
              </div>
              {/* 3rd dropdown */}{" "}
              <div className="relative w-full lg:max-w-sm">
                <select className="w-3/6 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                  <option>Show 30</option>
                </select>
              </div>
            </div>
          </div>

          {/* card item */}

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3">
            {products.map((product) => (
              <div key={product.id}>
                <div className=" gap-2 text-left border p-2  rounded-md  ">
                  <Image src={product.img} width={0} height={0} alt="product" />

                  <div className="py-2">
                    <h1 className="font-semibold mb-2">{product.title}</h1>
                    <h2 className="mb-1">{product.price}</h2>
                    <Image src={product.rating} alt="ratig" className="mb-2" />

                    <h2> Sold: {product.sold}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* customar Feedbacks */}

          <div>
            <h1 className="text-2xl ">customar feedback</h1>
            <h1 className="text-2xl ">brand</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
