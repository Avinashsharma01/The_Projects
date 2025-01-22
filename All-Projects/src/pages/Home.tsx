import All_Mini_projects from  "../assets/images/All-Mini-js-pro.png"
import TextUtil  from "../assets/images/TextUtii.png"
import ChatApp from "../assets/images/ChatApp.png"
import Pathology from "../assets/images/Pathology.png"
import Eommerce from "../assets/images/Ecomorce.png"
import Google_gemini from "../assets/images/Google_gemini.png"
import ToDO from "../assets/images/ToDo.png"
import React_25_mini from "../assets/images/React_25_mini_projects.png"
import Student_Management from "../assets/images/Student_Management.png"
import Brijesh_portFolio from "../assets/images/Brijesh_port_folio.png"

const Home = () => {
  const imageArray = [
    {
      imageULR:All_Mini_projects,
      Title:'All Mini projects',
      Link:"https://all-mini-projectss.vercel.app/",
    },
    {
      imageULR:Eommerce,
      Title:'E commerce',
      Link:"https://e-com-nine-chi.vercel.app/",
    },
    {
      imageULR:ChatApp,
      Title:'ChatApp',
      Link:"https://react-app-nwtv.vercel.app/",
    },
    {
      imageULR:TextUtil,
      Title:'TextUtil',
      Link:"https://textuttils-avinashsharma01s-projects.vercel.app/",
    },
    {
      imageULR:Pathology,
      Title:'Pathlogy',
      Link:"https://pathology-website.vercel.app/",
    },
    {
      imageULR:Google_gemini,
      Title:'Google Gemini',
      Link:"https://googlegemini-ten.vercel.app/",
    },
    {
      imageULR:ToDO,
      Title:'Todo App',
      Link:"https://react-projects-nine-roan.vercel.app/",
    },
    {
      imageULR:React_25_mini,
      Title:'React 25 Mini Project',
      Link:"https://reactminiprojects.vercel.app/",
    },
    {
      imageULR:Student_Management,
      Title:'Student Management',
      Link:"https://datagatheringapp.vercel.app/",
    },
    {
      imageULR:Brijesh_portFolio,
      Title:'Brijesh PortFolio',
      Link:"https://brijeshsharma0001.vercel.app/",
    },

  ];


    return (
      <div className=" main mx-5 md:mx-10 my-10">
        {/* Heading */}
        <div className="heading mb-8">
          <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white uppercase p-4 text-center text-2xl font-bold rounded-md shadow-md">
            Here is some MERN Projects
          </h1>
        </div>
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          {
            imageArray.map((item)=> (
              <div className="box bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all">
            <div className="img h-[240px] bg-gray-200">
              <img
                src={item.imageULR}
                alt="Text-Utill-App"
                className="w-full h-full "
              />
            </div>
            <div className="desc w-full p-4 flex justify-center items-center">
              <a
                href={item.Link}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 text-sm rounded-md hover:bg-emerald-600 transition-all w-full text-center "
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.Title}
              </a>
            </div>
          </div> 
            ))
          }
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
  