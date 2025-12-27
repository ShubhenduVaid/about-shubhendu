import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { advisoryServices } from '@/data';

const AdvisorySection = () => {
  return (
    <section
      id="section-advisory"
      className="py-20 bg-gray-50"
      aria-label="Advisory and consulting services"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advisory & Consulting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I offer paid 1:1 sessions and project reviews for engineering
            leaders, teams, and founders who want practical, high‑leverage help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advisoryServices.map((service) => (
            <Card key={service.title} className="card-hover">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="bg-teal-900 hover:bg-teal-600 text-white rounded-full px-8"
            asChild
          >
            <a href="#section-contact">Request a session</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;
