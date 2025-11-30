import { Target, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Breakthrough Prime Properties</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Leading the way in strategic asset investment across Real Estate, Mining, and Hospitality in East Africa
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To connect investors, developers, and operators with strategic, high-value assets while providing 
                end-to-end advisory services that ensure successful transactions and sustainable returns.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be East Africa's premier platform for strategic asset investment, recognized for excellence, 
                integrity, and innovation in Real Estate, Mining, and Hospitality sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Expertise",
                description: "Deep market knowledge and technical proficiency across all sectors",
              },
              {
                title: "Integrity",
                description: "Transparent dealings and ethical practices in every transaction",
              },
              {
                title: "Excellence",
                description: "Commitment to delivering superior results and service quality",
              },
              {
                title: "Innovation",
                description: "Leveraging technology and modern practices to stay ahead",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals committed to your investment success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Chief Executive Officer",
                bio: "15+ years in real estate investment and development across Africa",
              },
              {
                name: "Michael Kimani",
                role: "Head of Mining Advisory",
                bio: "Former mining executive with extensive regulatory and commercial experience",
              },
              {
                name: "Amina Hassan",
                role: "Director of Hospitality",
                bio: "Seasoned hospitality professional with successful resort development track record",
              },
            ].map((member) => (
              <div key={member.name} className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Operating" },
              { number: "$4.2B", label: "Transaction Volume" },
              { number: "500+", label: "Properties Sold" },
              { number: "1,200+", label: "Satisfied Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold mb-2 text-accent">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
