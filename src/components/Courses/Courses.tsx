import { useState } from 'react';

interface Course {
  id: string;
  title: string;
  creator: string;
  coverImage: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  rating: string;
}

const categoryPills = {
  row1: [
    'Frontend',
    'UI/UX',
    'Backend Development',
    'Data Science',
    'Mobile Apps',
    'Cyber Security',
    'DevOps & Cloud',
    'AI and Machine Learning',
  ],
  row2: [
    'Digital Marketing',
    'Graphic Design',
    'Motion',
    'Product and Project Management',
    'Game Design',
    'Photography',
  ],
  row3: [
    '3D Modeling',
    'Video Production',
    'Web3 & Blockchain',
    'Writing',
  ],
};

const courses: Course[] = [
  {
    id: '1',
    title: 'Learn Figma from Basic',
    creator: 'purepearl studio',
    coverImage: '/assets/courses/cover-1.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    rating: '4.5',
  },
  {
    id: '2',
    title: 'Build Digital Asset',
    creator: 'purepearl studio',
    coverImage: '/assets/courses/cover-2.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    rating: '4.5',
  },
  {
    id: '3',
    title: 'the Power of Big Data',
    creator: 'purepearl studio',
    coverImage: '/assets/courses/cover-3.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    rating: '4.5',
  },
  {
    id: '4',
    title: 'Mastering Productivity & Workflow',
    creator: 'purepearl studio',
    coverImage: '/assets/courses/cover-4.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    rating: '4.5',
  },
  {
    id: '5',
    title: 'Mastering Money Management',
    creator: 'purepearl studio',
    coverImage: '/assets/courses/cover-5.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    rating: '4.5',
  },
  {
    id: '6',
    title: 'From Idea to Startup Formation',
    creator: 'purepearl studio',
    coverImage: '/assets/courses/cover-6.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    rating: '4.5',
  },
];

export function Courses() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section id="courses" className="bg-[#FAF7EE] py-20 lg:py-24" aria-labelledby="courses-heading">
      <div className="mx-auto w-[1200px] max-w-full px-6">
        {/* Section Header (Figma Node #12:101) */}
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            id="courses-heading"
            className="font-heading text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]"
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="max-w-[760px] text-[16px] sm:text-[18px] leading-[1.6] text-muted">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        {/* Category Filter Pills (Exact Figma Nodes #21:33, #21:56, #21:63) */}
        <div className="mt-12 flex flex-col items-center gap-3 sm:gap-4">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categoryPills.row1.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`rounded-full px-5 py-2 text-[14px] sm:text-[15px] font-medium leading-[1.2] transition-all ${
                    isActive
                      ? 'bg-accent text-ink shadow-sm'
                      : 'border border-[#CED0D3] bg-white text-ink hover:bg-[#F3F4F6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categoryPills.row2.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`rounded-full px-5 py-2 text-[14px] sm:text-[15px] font-medium leading-[1.2] transition-all ${
                    isActive
                      ? 'bg-accent text-ink shadow-sm'
                      : 'border border-[#CED0D3] bg-white text-ink hover:bg-[#F3F4F6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categoryPills.row3.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`rounded-full px-5 py-2 text-[14px] sm:text-[15px] font-medium leading-[1.2] transition-all ${
                    isActive
                      ? 'bg-accent text-ink shadow-sm'
                      : 'border border-[#CED0D3] bg-white text-ink hover:bg-[#F3F4F6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <button
              type="button"
              className="px-3 py-2 text-[14px] sm:text-[15px] font-medium text-brand hover:underline"
            >
              + More
            </button>
          </div>
        </div>

        {/* 6 Course Cards Grid (Exact Figma Node #33:683, EL-cfe85f8c) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
            >
              {/* Card Photo with 3 Glassmorphism Floating Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px]">
                <img
                  src={course.coverImage}
                  alt={course.title}
                  width={373}
                  height={210}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-1 text-[11px] font-medium text-ink">
                  <span className="rounded-full bg-white/80 px-2.5 py-1 backdrop-blur-md shadow-sm">
                    {course.lessons}
                  </span>
                  <span className="rounded-full bg-white/80 px-2.5 py-1 backdrop-blur-md shadow-sm">
                    {course.duration}
                  </span>
                  <span className="rounded-full bg-white/80 px-2.5 py-1 backdrop-blur-md shadow-sm">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="mt-5 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="line-clamp-1 font-heading text-[20px] font-bold text-[#040819] transition-colors group-hover:text-brand">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0 text-[14px] font-medium text-[#242528]">
                      <span>{course.rating}</span>
                      <svg viewBox="0 0 24 24" fill="#CED0D3" className="size-4">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1 text-[14px] text-brand">by {course.creator}</p>
                </div>

                {/* Level + Avatar Stack */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full bg-[#F4F5F7] px-3.5 py-1.5 text-[13px] font-medium text-ink">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5 text-muted">
                      <rect x="1" y="9" width="3" height="6" rx="1" />
                      <rect x="6" y="5" width="3" height="10" rx="1" />
                      <rect x="11" y="1" width="3" height="14" rx="1" />
                    </svg>
                    <span>{course.level}</span>
                  </div>

                  {/* Overlapping Student Avatars Stack with 26+ Badge */}
                  <div className="flex items-center -space-x-2">
                    {['/assets/testimonials/alex.png', '/assets/testimonials/sarah.png', '/assets/testimonials/james.png'].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="size-7 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <span className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-accent text-[10px] font-bold text-ink">
                      26+
                    </span>
                  </div>
                </div>

                {/* Price Bar */}
                <div className="mt-5 border-t border-[#F0F1F3] pt-4">
                  <div className="flex items-baseline">
                    <span className="font-heading text-[24px] font-bold text-brand">{course.price}</span>
                    <span className="text-[14px] text-muted">/lifetime</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
