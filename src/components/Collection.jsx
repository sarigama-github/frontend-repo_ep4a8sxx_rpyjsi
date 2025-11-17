export default function Collection() {
  const items = [
    { id: 1, title: 'Velocity Jacket', price: '$160', img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Night Runner Tee', price: '$45', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'City Tech Pants', price: '$120', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Mono Crewneck', price: '$80', img: 'https://images.unsplash.com/photo-1548883354-2d7fdbb82a4b?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="new" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">New Arrivals</h2>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-black">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <a key={item.id} href="#" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
