import { useState } from 'react';

interface Course {
  id: string;
  title: string;
  category: string;
  creator: {
    name: string;
    avatar: string;
  };
  image: string;
  lessons: number;
  duration: string;
  level: string;
  price: string;
  rating: number;
  reviews: number;
}

const categoryRows = {
  row1: [
    'All Category',
    'UI/UX Design',
    'Web Development',
    'Graphic Design',
    'Digital Marketing',
    'Business',
    'Photography',
    'Music & Audio',
  ],
  row2: [
    'Mobile Development',
    'Game Design',
    'Illustration',
    'Video Editing',
    'Finance & Accounting',
    'Data Science',
  ],
  row3: [
    'Artificial Intelligence',
    'Animation & 3D',
    'Personal Development',
    'Writing & Content',
  ],
};

const courses: Course[] = [
  {
    id: '1',
    title: 'Learn Figma from Scratch: Master UI/UX Design System',
    category: 'UI/UX Design',
    creator: {
      name: 'purepearl studio',
      avatar: '/assets/testimonials/alex.png',
    },
    image: '/assets/growth/growth-bottom.jpg',
    lessons: 17,
    duration: '2 hours 16 mins',
    level: 'Beginner',
    price: '$25/lifetime',
    rating: 4.9,
    reviews: 320,
  },
  {
    id: '2',
    title: 'Fullstack Web Development with React, TypeScript & Node',
    category: 'Web Development',
    creator: {
      name: 'Sarah Mitchell',
      avatar: '/assets/testimonials/sarah.png',
    },
    image: '/assets/growth/growth-bottom.jpg',
    lessons: 24,
    duration: '6 hours 45 mins',
    level: 'Intermediate',
    price: '$35/lifetime',
    rating: 4.8,
    reviews: 412,
  },
  {
    id: '3',
    title: 'Brand Identity Design: Visual Strategy & Iconography',
    category: 'Graphic Design',
    creator: {
      name: 'James Lucas',
      avatar: '/assets/testimonials/james.png',
    },
    image: '/assets/growth/growth-bottom.jpg',
    lessons: 14,
    duration: '3 hours 10 mins',
    level: 'All Levels',
    price: '$29/lifetime',
    rating: 4.9,
    reviews: 188,
  },
  {
    id: '4',
    title: 'Digital Marketing Mastery: Social Growth & SEO Strategy',
    category: 'Digital Marketing',
    creator: {
      name: 'Elena Rostova',
      avatar: '/assets/testimonials/sarah.png',
    },
    image: '/assets/growth/growth-bottom.jpg',
    lessons: 20,
    duration: '4 hours 30 mins',
    level: 'Beginner',
    price: '$22/lifetime',
    rating: 4.7,
    reviews: 245,
  },
  {
    id: '5',
    title: 'Financial Modeling & Valuation for Modern Startups',
    category: 'Finance & Accounting',
    creator: {
      name: 'Marcus Vance',
      avatar: '/assets/testimonials/james.png',
    },
    image: '/assets/growth/growth-bottom.jpg',
    lessons: 18,
    duration: '5 hours 15 mins',
    level: 'Advanced',
    price: '$45/lifetime',
    rating: 4.9,
    reviews: 160,
  },
  {
    id: '6',
    title: 'Applied AI & Machine Learning for Practical Applications',
    category: 'Artificial Intelligence',
    creator: {
      name: 'Dr. Alan Chen',
      avatar: '/assets/testimonials/alex.png',
    },
    image: '/assets/growth/growth-bottom.jpg',
    lessons: 30,
    duration: '8 hours 20 mins',
    level: 'Intermediate',
    price: '$49/lifetime',
    rating: 5.0,
    reviews: 580,
  },
];

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All Category');

  const filteredCourses =
    selectedCategory === 'All Category'
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="bg-white py-20 lg:py-24" aria-labelledby="courses-heading">
      <div className="mx-auto w-[1200px] max-w-full px-6">
        {/* Section Header (Figma Node #12:101) */}
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            id="courses-heading"
            className="max-w-[588px] font-heading text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819]"
          >
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-muted">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        {/* Category Pills Tabs (Figma Nodes #21:33, #21:56, #21:63) */}
        <div className="mt-12 flex flex-col items-center gap-4">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {categoryRows.row1.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-[14px] sm:text-[16px] font-medium leading-[1.2] transition-all ${
                    isActive
                      ? 'bg-accent text-ink shadow-sm'
                      : 'bg-surface text-ink hover:bg-[#EAEBED]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {categoryRows.row2.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-[14px] sm:text-[16px] font-medium leading-[1.2] transition-all ${
                    isActive
                      ? 'bg-accent text-ink shadow-sm'
                      : 'bg-surface text-ink hover:bg-[#EAEBED]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {categoryRows.row3.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-[14px] sm:text-[16px] font-medium leading-[1.2] transition-all ${
                    isActive
                      ? 'bg-accent text-ink shadow-sm'
                      : 'bg-surface text-ink hover:bg-[#EAEBED]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <button
              type="button"
              className="px-4 py-2.5 text-[14px] sm:text-[16px] font-medium text-brand transition-opacity hover:opacity-80"
            >
              + More
            </button>
          </div>
        </div>

        {/* 6 Course Cards Grid (Figma Node #33:683, EL-cfe85f8c: 373px x 384px, rounded-3xl) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {(filteredCourses.length > 0 ? filteredCourses : courses).map((course) => (
            <article
              key={course.id}
              className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
            >
              {/* Top Course Visual */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-surface">
                <img
                  src={course.image}
                  alt={course.title}
                  width={373}
                  height={200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-ink shadow-sm backdrop-blur-sm">
                    {course.lessons} Lessons
                  </span>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-ink shadow-sm backdrop-blur-sm">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="mt-4 flex flex-1 flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium text-brand">{course.category}</span>
                    <span className="rounded-full bg-surface px-2.5 py-0.5 text-[11px] font-medium text-muted">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 font-heading text-[18px] font-semibold leading-[1.3] text-[#040819] transition-colors group-hover:text-brand">
                    {course.title}
                  </h3>
                </div>

                <div className="mt-5 border-t border-[#F0F1F3] pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={course.creator.avatar}
                        alt=""
                        className="size-7 rounded-full object-cover"
                      />
                      <span className="text-[13px] text-muted">{course.creator.name}</span>
                    </div>
                    <p className="font-heading text-[16px] font-semibold text-brand">
                      {course.price}
                    </p>
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
