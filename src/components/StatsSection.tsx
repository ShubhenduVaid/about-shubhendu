import React from 'react';
import { Users, Code, Award, MapPin } from 'lucide-react';

const stats = [
  {
    icon: <Award className="h-8 w-8" />,
    number: "14+",
    label: "Years of Experience",
    description: "Progressive software engineering experience from individual contributor to senior leadership"
  },
  {
    icon: <Users className="h-8 w-8" />,
    number: "50+",
    label: "Team Members Led",
    description: "Successfully managed and mentored engineering teams across multiple organizations"
  },
  {
    icon: <Code className="h-8 w-8" />,
    number: "8",
    label: "Engineering Squads",
    description: "Currently overseeing Sales Convergence Tribe at BT Group with 8 engineering squads"
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    number: "5",
    label: "Countries Worked",
    description: "International experience across UK, Poland, and India with remote team leadership"
  }
];

const achievements = [
  "Achieved 5x improvement in page load times using Next.js optimization",
  "Delivered zero order loss in sales/renew experience rebuild at BT Group",
  "Reduced call handling times by 30% nationwide with custom CRM solution at Bharti Airtel",
  "Scaled APIs to handle 6,000 requests per minute using Java and MongoDB at PwC",
  "Led successful AWS migration enhancing scalability and performance"
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" aria-label="Professional Statistics and Achievements">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Impact & Statistics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quantifiable results and achievements in software engineering leadership
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2" itemProp="value">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2" itemProp="name">
                {stat.label}
              </div>
              <p className="text-sm text-gray-600" itemProp="description">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements & Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                itemScope
                itemType="https://schema.org/Achievement"
              >
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Award className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-gray-700 leading-relaxed" itemProp="description">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
