import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { responsive, testimonialData } from "./Data";

const Testimonial = () => {
  return (
    <div className="my-28">
      <h2 className="text-5xl font-bold text-black mb-16 text-center">
        Testimonial
      </h2>
      <Carousel className="text-black " responsive={responsive}>
        {testimonialData.map((testimonial, index) => (
          <div className="card mx-5 ">
            <Card
              key={index}
              className="border-none shadow-md"
              style={{ backgroundColor: "#f6f7f9" }}
            >
              <CardHeader className="flex justify-center items-center">
                <figure className="-m-6">
                  <img src={testimonial.imageUrl} alt="" />
                </figure>
              </CardHeader>

              <CardContent>
                <h2 className="flex justify-start items-start font-semibold mt-2 text-blue-900  ">
                  {testimonial.name}
                </h2>
                <h2 className="flex justify-start items-start text-sm font-semibold mb-2 mt-1    ">
                  {testimonial.position}
                </h2>

                <p className="text-sm">{testimonial.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Testimonial;
