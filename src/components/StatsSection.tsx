import { Users, Code, Award, MapPin } from 'lucide-react';
import { achievements, stats } from '@/data';

const statIcons = {
  award: Award,
  users: Users,
  code: Code,
  'map-pin': MapPin,
} as const;

const StatsSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      aria-label="Professional Statistics and Achievements"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Impact & Statistics
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quantifiable results and achievements in software engineering
            leadership
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                <Icon className="h-8 w-8" />
              </div>
              <div
                className="text-3xl font-bold text-gray-900 mb-2"
                itemProp="value"
              >
                {stat.value}
              </div>
              <div
                className="text-lg font-semibold text-gray-700 mb-2"
                itemProp="name"
              >
                {stat.label}
              </div>
              <p className="text-sm text-gray-600" itemProp="description">
                {stat.description}
              </p>
            </div>
          );
          })}
        </div>

        {/* Key Achievements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">
            Key Achievements & Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                itemScope
                itemType="https://schema.org/Achievement"
              >
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Award className="h-4 w-4 text-green-600" />
                </div>
                <p
                  className="text-gray-700 leading-relaxed"
                  itemProp="description"
                >
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
