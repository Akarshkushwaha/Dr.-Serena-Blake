import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-blue-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-4">
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 text-sm px-4 py-2">
            About Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles,
            CA
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="bg-white p-4 rounded-3xl shadow-lg">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/dr-serena-blake.png"
                    alt="Dr. Serena Blake - Licensed Clinical Psychologist"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <div className="bg-blue-900/90 text-white p-4 rounded-b-2xl">
                  <h3 className="font-bold text-lg">Dr. Serena Blake</h3>
                  <p className="text-blue-200 text-sm">PsyD</p>
                  <div className="flex items-center mt-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-blue-200">
                      Top Rated | 8+ Years Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                Hi I am Dr. Serena Blake
              </h1>

              <div className="space-y-6 text-lg text-blue-800 leading-relaxed">
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                  based in Los Angeles, CA, with{" "}
                  <strong>eight years of experience</strong> and over{" "}
                  <strong>500 client sessions</strong>. She blends
                  evidence-based approaches—like cognitive-behavioral therapy
                  and mindfulness—with compassionate, personalized care to help
                  you overcome anxiety, strengthen relationships, and heal from
                  trauma.
                </p>
                <p>
                  Whether you meet in her{" "}
                  <strong>Maplewood Drive office</strong> or connect virtually
                  via <strong>Zoom</strong>, Dr. Blake is committed to creating
                  a safe, supportive space for you to thrive. Her approach
                  combines proven therapeutic techniques with genuine empathy to
                  help clients navigate life's challenges and discover their
                  inner strength.
                </p>
                <p>
                  Dr. Blake specializes in helping individuals and couples work
                  through <strong>anxiety and stress management</strong>,{" "}
                  <strong>relationship challenges</strong>, and{" "}
                  <strong>trauma recovery</strong>. Together, you can work
                  towards achieving your goals for a more fulfilling and
                  purposeful existence.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">
                Credentials & Specializations
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-blue-700">
                    PsyD Clinical Psychology
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-blue-700">
                    Licensed Clinical Psychologist
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-blue-700">
                    CBT & Mindfulness Specialist
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-blue-700">Trauma-Informed Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
