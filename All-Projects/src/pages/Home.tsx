import TextUtil from "../assets/images/TextUtil.png"

const Home = () => {
    return (
      <div className="main mx-5 md:mx-10 my-10">
        {/* Heading */}
        <div className="heading mb-8">
          <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase p-4 text-center text-2xl font-bold rounded-md shadow-md">
            Here is some MERN Projects
          </h1>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all">
            <div className="img h-[240px] bg-gray-200">
              <img
                src={TextUtil}
                alt="Text-Utill-App"
                className="w-full h-full "
              />
            </div>
            <div className="desc w-full p-4 flex justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-emerald-600 transition-all w-full text-center "
                target="_blank"
                rel="noopener noreferrer"
              >
                Random Color
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all">
            <div className="img h-[240px] bg-gray-200">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 2"
                className="w-full h-full"
              />
            </div>
            <div className="desc w-full p-4 flex justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-blue-700 transition-all w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Random Color
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all">
            <div className="img h-[240px] bg-gray-200">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 3"
                className="w-full h-full"
              />
            </div>
            <div className="desc w-full p-4 flex justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-blue-700 transition-all w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Random Color
              </a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all">
            <div className="img h-[240px] bg-gray-200">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 4"
                className="w-full h-full"
              />
            </div>
            <div className="desc w-full p-4 flex justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-blue-700 transition-all w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Random Color
              </a>
            </div>
          </div>
          {/* Project 5 */}
          <div className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all">
            <div className="img h-[240px] bg-gray-200">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 5"
                className="w-full h-full"
              />
            </div>
            <div className="desc w-full p-4 flex justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-blue-700 transition-all w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Random Color
              </a>
            </div>
          </div>
          {/* Project 6 */}
          <div className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all">
            <div className="img h-[240px] bg-gray-200">
              <img
                src="https://via.placeholder.com/300"
                alt="Project 6"
                className="w-full h-full"
              />
            </div>
            <div className="desc w-full p-4 flex justify-center items-center">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-blue-700 transition-all w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Random Color
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  


// const Home = () => {
//     // Array of unique image URLs
//     const images = [
//       "https://via.placeholder.com/300/FF0000/FFFFFF?text=Project+1", // Image 1
//       "https://via.placeholder.com/300/00FF00/FFFFFF?text=Project+2", // Image 2
//       "https://via.placeholder.com/300/0000FF/FFFFFF?text=Project+3", // Image 3
//       "https://via.placeholder.com/300/FFFF00/000000?text=Project+4", // Image 4
//       "https://via.placeholder.com/300/FF00FF/FFFFFF?text=Project+5", // Image 5
//       "https://via.placeholder.com/300/00FFFF/000000?text=Project+6", // Image 6
//     ];
  
//     return (
//       <div className="main mx-5 md:mx-10 my-10">
//         {/* Heading */}
//         <div className="heading mb-8">
//           <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase p-4 text-center text-2xl font-bold rounded-md shadow-md">
//             Here is some MERN Projects
//           </h1>
//         </div>
//         {/* Project Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all"
//             >
//               <div className="img h-[240px] bg-gray-200">
//                 {/* Unique Image */}
//                 <img
//                   src={image}
//                   alt={`Project ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="desc w-full p-4 flex justify-center items-center">
//                 <a
//                   href="#"
//                   className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-blue-700 transition-all"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Project {index + 1}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default Home;
  