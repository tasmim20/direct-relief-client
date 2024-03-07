// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
// const photos = [
//   {
//     id: 1,
//     imageUrl:
//       "https://i0.wp.com/www.directrelief.org/wp-content/uploads/Haiti_Matthew-1-1-e1606264969799.jpg?resize=472%2C265&ssl=1",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://cdn.who.int/media/images/default-source/who_homepage/who-unfpa-supply-delivery-to-gaza.tmb-1920v.jpg?sfvrsn=8b0132b_6",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://www.who.int/images/default-source/departments/polio-transition/environmentalsurveillanceofficersconductingactivitiesinkhartoumsudan.jpg?sfvrsn=de5b6047_5",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/12/DIRECT_RELIEF_PICKS_48-e1639421849436.jpg?w=800&ssl=1",
//   },
//   {
//     id: 5,
//     imageUrl:
//       "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/12/Louisiana-Floods-Volunteers-143-e1639421994731.jpg?w=800&ssl=1",
//   },
//   {
//     id: 6,
//     imageUrl:
//       "https://cdn.who.int/media/images/default-source/who_homepage/cholera-response-in-sudan.tmb-sm.jpg?sfvrsn=3c7a38c0_3",
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="my-28">
//       <h2 className="text-5xl font-bold text-black mb-16 text-center">
//         Gallery
//       </h2>
//       <Carousel className="text-black " responsive={responsive}>
//         {photos.map((photo, index) => (
//           <div key={index} className="card mx-4  ">
//             <img className="h-72" src={photo.imageUrl} alt="" />
//           </div>
//         ))}
//       </Carousel>
//       ;
//     </div>
//   );
// };

// export default Testimonial;

import React, { useState } from "react";

// Sample JSON data representing categories and their images
const imageData = [
  {
    category: "Medical Supplies",
    images: [
      "https://www.who.int/images/default-source/departments/polio-transition/environmentalsurveillanceofficersconductingactivitiesinkhartoumsudan.jpg?sfvrsn=de5b6047_5",
      "https://cdn.who.int/media/images/default-source/imported/measles-euro.jpg?sfvrsn=202ae871_12",
      "https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Gallery-02.jpg",
      "https://cdn.who.int/media/images/default-source/who_homepage/cholera-response-in-sudan.tmb-sm.jpg?sfvrsn=3c7a38c0_3",
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/12/DIRECT_RELIEF_PICKS_48-e1639421849436.jpg?w=800&ssl=1",
      "https://www.who.int/images/default-source/departments/polio-transition/environmentalsurveillanceofficersconductingactivitiesinkhartoumsudan.jpg?sfvrsn=de5b6047_5",
    ],
  },
  {
    category: "First Aid Kits",
    images: [
      "https://cdn.who.int/media/images/default-source/who_homepage/who-unfpa-supply-delivery-to-gaza.tmb-1920v.jpg?sfvrsn=8b0132b_6",
      "https://www.who.int/images/default-source/departments/polio-transition/environmentalsurveillanceofficersconductingactivitiesinkhartoumsudan.jpg?sfvrsn=de5b6047_5",
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/Haiti_Matthew-1-1-e1606264969799.jpg?resize=472%2C265&ssl=1",
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/12/Louisiana-Floods-Volunteers-143-e1639421994731.jpg?w=800&ssl=1",
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/Haiti_Matthew-1-1-e1606264969799.jpg?resize=472%2C265&ssl=1",
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/Haiti_Matthew-1-1-e1606264969799.jpg?resize=472%2C265&ssl=1",
    ],
  },
  {
    category: "Others Donation",
    images: [
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/12/Louisiana-Floods-Volunteers-143-e1639421994731.jpg?w=800&ssl=1",
      "https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/four-young-multicultural-volunteers-in-white-t-shi-NBY778K.jpg",
      "https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/four-young-multicultural-volunteers-in-white-t-shi-NBY778K.jpg",
      "https://templatekit.tokomoo.com/gaveall/wp-content/uploads/sites/20/2021/01/Gallery-03.jpg",
      "https://cdn.who.int/media/images/default-source/who_homepage/cholera-response-in-sudan.tmb-sm.jpg?sfvrsn=3c7a38c0_3",
    ],
  },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(imageData[0].category);

  const handleTabClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="py-16 mb-16">
      <h2 className="text-center font-bold text-5xl text-black mb-16 ">
        Gallery
      </h2>
      <div className="flex pb-2">
        {imageData.map((item, index) => (
          <button
            key={index}
            className={`${
              activeCategory === item.category ? "bg-blue-900" : "bg-blue-200"
            } px-4 py-2 rounded-lg mr-2`}
            onClick={() => handleTabClick(item.category)}
          >
            {item.category}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mt-10 ">
        {imageData
          .find((item) => item.category === activeCategory)
          ?.images.slice(0, 2)
          .map((image, index) => (
            <div className="relative">
              <img
                key={index}
                src={image}
                className="w-full rounded-lg h-96"
                alt="Your image alt text"
              />

              <div className="absolute top-0 left-0 w-full h-96 bg-blue-500 opacity-20 rounded-lg"></div>
            </div>
          ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-5">
        {imageData
          .find((item) => item.category === activeCategory)
          ?.images.slice(2, 5)
          .map((image, index) => (
            <div className="relative">
              <img
                key={index}
                src={image}
                className="w-full rounded-lg h-80"
                alt="Your image alt text"
              />

              <div className="absolute top-0 left-0 w-full h-80 bg-blue-500 opacity-20 rounded-lg"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
