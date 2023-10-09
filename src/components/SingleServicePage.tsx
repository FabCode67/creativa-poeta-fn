// import { Link, useParams } from "react-router-dom";
// import blogData from "../data/blog";
// import { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import MoreNavBar from "./MoreNavBar";

// const SingleServicePage = () => {
//   const { id } = useParams();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);
//   const parsedId = parseInt(id as string);
//   const blog = blogData.find((blog) => blog.id === parsedId);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   const filteredBlogs = blogData.filter((blog) => {
//     const { title, description } = blog;
//     const lowerCaseQuery = searchQuery.toLowerCase();
//     return (
//       title.toLowerCase().includes(lowerCaseQuery) ||
//       description.toLowerCase().includes(lowerCaseQuery)
//     );
//   });

//   return (
//     <div className="App w-full flex flex-col snap-x scroll-smooth bg-black">
//       <div className="navnv-container w-full ml-6 right-2 left flex justify-end">
//       <MoreNavBar />
//       </div>
//       <div className="flex flex-col laptop:flex-row desktop:flex-row basis-full laptop:space-x-14 desktop:space-x-14 laptop:px-7 desktop:px-7 px-2 h-fit mt-[3%]">
//         <div className="bg-slate-200 p-4 h-fit pt-3 laptop:basis-[70%] desktop:basis-[70%] basis-[100%]">
//           <img
//             src={blog?.image}
//             alt="test"
//             className="w-full laptop:h-[40rem] desktop:h-[25rem] object-cover"
//           />
//           <h3 className="text-xl font-bold mt-2">{blog?.title} </h3>
//           <p className="mt-1 ">{blog?.description}</p>
//         </div>
//         <div className="laptop:p-4 desktop:p-4 p-2 h-fit pt-3 laptop:basis-[30%] desktop:basis-[30%] basis-[100%]">
//           <div className="search-form">
//             <form>
//               <div className="flex space-x-2 rounded-md justify-center m-auto text-center items-center w-full bg-slate-200">
//                 <input
//                   type="text"
//                   placeholder="Search blog"
//                   className=" bg-slate-200 focus:border-none focus:border-0 p-4 focus:border-slate-200 h-fit w-[90%]"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button className=" h-fit w-[10%]">
//                   <FaSearch />
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="other-blogs space-y-3">
//             <h3 className="text-xl font-bold mt-2">Other Blogs</h3>
//             <div className="other-blogs-list flex flex-col justify-between space-y-4">
//               {filteredBlogs.slice(0, 3).map((blogs) => (
//                 <Link className="other-blog bg-slate-200 p-4" key={blogs.id} to={`/services/${blogs.id}`}>
//                   <img
//                     src={blogs.image}
//                     alt="test"
//                     className="w-full h-[10rem] object-cover"
//                   />
//                   <h3 className="text-xl font-bold mt-2">{blogs.title} </h3>
//                   <p className="mt-1 line-clamp-3">{blogs.description}</p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleServicePage;
