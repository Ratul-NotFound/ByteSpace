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
    <section className="relative overflow-hidden bg-[#fafafa] py-[74px]">
      <img
        src="/assets/testimonials/glow-left.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-442px] top-[149px] size-[1137px]"
      />
      <img
        src="/assets/testimonials/glow-right.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[-241px] size-[1137px]"
      />

      <div className="relative mx-auto flex w-[1200px] max-w-full flex-col gap-[72px] px-6">
        <div className="flex items-end gap-[43px]">
          <h2 className="w-[577px] shrink-0 font-heading text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="w-[580px] text-[18px] leading-[1.6] text-[#4f4f4f]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="flex items-start gap-[41px]">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex shrink-0 flex-col items-start gap-6 rounded-card bg-white p-6"
            >
              <img
                src={item.avatar}
                alt=""
                width={80}
                height={80}
                className="size-20 rounded-full object-cover"
              />
              <div className="flex flex-col items-start">
                <p className="font-heading text-[20px] font-semibold leading-7 tracking-[-0.01em] text-black">
                  {item.name}
                </p>
                <p className="text-[18px] leading-[1.6] text-brand">{item.role}</p>
              </div>
              <p className="w-[326px] text-[18px] leading-[1.6] text-[#4f4f4f]">{item.quote}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
