const services = [
  { title: 'Social Media Management', description: 'Consistent posting and engagement across platforms.' },
  { title: 'Content Creation', description: 'Eye-catching photos and videos that capture attention.' },
  { title: 'Paid Ads', description: 'Targeted advertising campaigns to reach your ideal audience.' },
  { title: 'In-Store Campaigns', description: 'Drive in-person sales with promotional events and signage.' },
  { title: 'Strategy & Consulting', description: 'Customized marketing strategies to grow your brand.' },
  { title: 'Community Growth', description: 'Build an active and loyal online community.' },
];

export default function Services() {
  return (
    <section className="py-16" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border p-6 rounded shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-700">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
