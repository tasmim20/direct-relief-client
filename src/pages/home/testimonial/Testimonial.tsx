import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { responsive } from "./Data";
import { useGetTestimonialQuery } from "@/redux/features/testimonial/testimonialApi";

interface EventType {
  image: string;
  name: string;
  profession: string;
  _id: number;
  description: string;
}
const Testimonial = () => {
  const { data, isLoading } = useGetTestimonialQuery("");
  console.log(data);

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <div className="my-28">
      <h2
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-5xl font-bold text-black mb-16 text-center"
      >
        Testimonial
      </h2>
      {isLoading && <p>Loading...</p>}
      {data && data.result && (
        <Carousel className="text-black " responsive={responsive}>
          {data.result.map((testimonial: EventType) => (
            <div className="card mx-5 ">
              <Card
                key={testimonial._id}
                className="border-none shadow-md"
                style={{ backgroundColor: "#f6f7f9" }}
              >
                <CardHeader className="flex justify-center items-center">
                  <figure className="-m-6">
                    <img src={testimonial.image} alt="" />
                  </figure>
                </CardHeader>

                <CardContent>
                  <h2 className="flex justify-start items-start font-semibold mt-2 text-blue-900  ">
                    {testimonial.name}
                  </h2>
                  <h2 className="flex justify-start items-start text-sm font-semibold mb-2 mt-1    ">
                    {testimonial.profession}
                  </h2>

                  <p className="text-sm">{testimonial.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Testimonial;
