export function Growth() {
  return (
    <section id="creators" className="bg-[#FAF7EE] py-14 lg:py-20" aria-label="Professional growth">
      <div className="mx-auto w-[1200px] max-w-full px-6">
        {/* Figma Exported High-Fidelity Showcase (2x Retina Render of Node #34:1159) */}
        <div className="relative mx-auto w-full max-w-[1200px]">
          <img
            src="/assets/growth/growth-top.png"
            alt="ByteSpace Professional Growth and Creator Platform showcase"
            width={1200}
            height={1216}
            loading="lazy"
            className="h-auto w-full object-contain"
          />

          {/* Semantic Text for Screen Readers and SEO */}
          <div className="sr-only">
            <h2>Your Path to Professional Growth Starts Here!</h2>
            <p>
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <ul>
              <li>12K Students</li>
              <li>70+ Courses</li>
              <li>16 Creators</li>
            </ul>

            <h2>Create &amp; Manage Courses Easily.</h2>
            <p>
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul>
              <li>Share Your Expertise</li>
              <li>Monetize Your Passion</li>
              <li>Flexibility and Autonomy</li>
              <li>Build a Community</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
