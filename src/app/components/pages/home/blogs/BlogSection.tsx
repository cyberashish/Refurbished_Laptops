import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import {v4 as uuidv4} from "uuid";

const BlogSection = () => {
  const Blogs = [
    {
      id: uuidv4(),
      author:"Rakkt Ranjan",
      title:"An Introduction to Refurbished Laptop",
      coverImage:"https://newjaisa.com/cdn/shop/articles/Introduction_to_refurbished_laptops.jpg?v=1666416377&width=1512",
      descripton:"What does refurbished mean? Refurbished Laptop GradingA Few Hidden Benefits",
      date: "22 October, 2022"
    },
    {
      id: uuidv4(),
      author:"Rakkt Ranjan",
      title:"5 Things to Consider When Buying a Refurbished Laptop",
      coverImage:"https://newjaisa.com/cdn/shop/articles/5_Best_Places_to_Buy_a_Refurbished_MacBook_cb1316bb-466f-4e65-b011-4ab08fce403d.png?v=1657095144&width=1512",
      descripton:"Do you often find yourself agonizing over what to buy? Whether it's a new...",
      date: "22 October, 2022"
    },
    {
      id: uuidv4(),
      author:"Rakkt Ranjan",
      title:"Should Your Children Have Their Own Laptops",
      coverImage:"https://newjaisa.com/cdn/shop/articles/Should_Your_children_have_their_own_laptops_1800_x_800px_1800_x_650px.png?v=1668431389&width=1512",
      descripton:"With the lockdowns and the pandemic, online education took a big leap with lots...",
      date: "22 October, 2022"
    },
    {
      id: uuidv4(),
      author:"Rakkt Ranjan",
      title:"iPhone 14 vs iPhone 14 pro | A Detailed Comparison",
      coverImage:"https://newjaisa.com/cdn/shop/articles/WhatsApp_Image_2022-09-19_at_6.16.39_PM.jpg?v=1663592100&width=1512",
      descripton:"The iPhone 14 and the iPhone 14 pro are the newest models from Apple...",
      date: "22 October, 2022"
    },
  ]
  return (
    <div className="container-sm py-8 px-6">
      <div className="flex flex-col gap-6">
        <h3 className="text-[26px] font-semibold text-dark text-center">
          <span className="text-secondary">Eco</span> Tips &{" "}
          <span className="text-secondary">Tech</span> Talks
        </h3>
        <div className="grid grid-cols-12 gap-6">
          {
            Blogs.map((item) => {
              return (
                <div key={item.id} className="lg:col-span-3 md:col-span-6 col-span-12">
            <div className="p-5 bg-white rounded-xl hover:shadow hover:-translate-y-1 transition-transform duration-500 cursor-pointer">
              <div className="relative">
              <Image
                src={
                  item.coverImage
                }
                alt="blog"
                width={100}
                height={100}
                unoptimized
                style={{ width: "100%", height: "auto" }}
                className="min-h-60 object-cover rounded-xl"
              />
              <span className="px-3 py-1.5 text-xs font-medium text-white bg-white/30 rounded-full absolute bottom-2 start-2 flex items-center gap-2"><Icon icon="solar:calendar-linear" className="text-lg" />{item.date}</span>
              </div>
              <p className="text-dark text-xs my-3">{item.author}</p>
              <h5 className="text-lg font-semibold">
                {item.title}
              </h5>
              <p className="text-muted text-xs mt-4">
                {item.descripton}
              </p>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
