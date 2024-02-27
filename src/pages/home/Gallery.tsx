import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const photos = [
  {
    id: 1,
    imageUrl:
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/Haiti_Matthew-1-1-e1606264969799.jpg?resize=472%2C265&ssl=1",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.who.int/media/images/default-source/who_homepage/who-unfpa-supply-delivery-to-gaza.tmb-1920v.jpg?sfvrsn=8b0132b_6",
  },
  {
    id: 3,
    imageUrl:
      "https://www.who.int/images/default-source/departments/polio-transition/environmentalsurveillanceofficersconductingactivitiesinkhartoumsudan.jpg?sfvrsn=de5b6047_5",
  },
  {
    id: 4,
    imageUrl:
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/12/DIRECT_RELIEF_PICKS_48-e1639421849436.jpg?w=800&ssl=1",
  },
  {
    id: 5,
    imageUrl:
      "https://i0.wp.com/www.directrelief.org/wp-content/uploads/2021/12/Louisiana-Floods-Volunteers-143-e1639421994731.jpg?w=800&ssl=1",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.who.int/media/images/default-source/who_homepage/cholera-response-in-sudan.tmb-sm.jpg?sfvrsn=3c7a38c0_3",
  },
];

const Testimonial = () => {
  return (
    <div className="my-28">
      <h2 className="text-5xl font-bold text-black mb-16 text-center">
        Gallery
      </h2>
      <Carousel className="text-black " responsive={responsive}>
        {photos.map((photo, index) => (
          <div key={index} className="card mx-4  ">
            <img className="h-72" src={photo.imageUrl} alt="" />
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Testimonial;
