const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar: '/assets/testimonials/sarah.png',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar: '/assets/testimonials/james.png',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar: '/assets/testimonials/alex.png',
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7EE] py-20 lg:py-24">
      {/* Decorative Glow Elements */}
      <img
        src="/assets/testimonials/glow-left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-[442px] top-[149px] size-[1137px] opacity-70"
      />
      <img
        src="/assets/testimonials/glow-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-[400px] -top-[241px] size-[1137px] opacity-70"
      />

      <div className="relative mx-auto flex w-[1200px] max-w-full flex-col gap-14 lg:gap-16 px-6">
        {/* Header (Left Title, Right Description) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <h2 className="max-w-[540px] font-heading text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="max-w-[560px] text-[16px] sm:text-[18px] leading-[1.6] text-muted">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-start gap-6 rounded-[24px] border border-[#E5E7EB] bg-white p-7 shadow-sm transition-all hover:shadow-md"
            >
              <img
                src={item.avatar}
                alt={item.name}
                width={80}
                height={80}
                className="size-16 sm:size-20 rounded-full object-cover"
              />
              <div className="flex flex-col items-start">
                <p className="font-heading text-[18px] sm:text-[20px] font-semibold leading-[1.3] text-[#040819]">
                  {item.name}
                </p>
                <p className="text-[14px] sm:text-[16px] font-medium leading-[1.4] text-brand">{item.role}</p>
              </div>
              <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#4F4F4F]">{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
