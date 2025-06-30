import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Anxiety & Stress Management",
    image: "/images/anxiety.jpg?height=300&width=400",
    description:
      "Anxiety can prevent individuals from reaching their full potential. Dr. Blake provides personalized anxiety treatment, offering practical strategies to manage stress, reduce worry, and enhance overall well-being. Through evidence-based approaches like CBT and mindfulness, she helps clients build resilience and regain control over their lives.",
    price: "$200 / individual session",
  },
  {
    title: "Relationship Counseling",
    image: "/images/relationship.jpg?height=300&width=400",
    description:
      "Dr. Blake offers relationship and couples counseling to help partners improve communication, resolve conflicts, and strengthen their emotional connection. With 8 years of experience, she collaborates with couples to develop healthier relationships and navigate challenges together. Sessions focus on building trust, intimacy, and lasting partnership skills.",
    price: "$240 / couples session",
  },
  {
    title: "Trauma Recovery",
    image: "/images/trauma.jpg?height=300&width=400",
    description:
      "Specialized treatment for trauma, PTSD, and related conditions using evidence-based approaches. Dr. Blake provides a safe space for healing, utilizing trauma-focused CBT and mindfulness techniques to help clients process difficult experiences. Her compassionate approach helps individuals reclaim their lives and move forward with strength and resilience.",
    price: "$200 / individual session",
  },
];

export  function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            How I Help
          </h2>
          <p className="text-xl text-blue-700 mex-w-3xl">
            I offer specialized services to address various mental health
            concerns and support your journey toward wellness.
          </p>
        </div>

        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-green-200 rounded-3xl overflow-hidden hover-shadow-lg transition-shadow bg-green-50/30"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-green-700 font-semibold">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
