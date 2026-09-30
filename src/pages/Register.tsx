import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#003BE2] text-white">
      {/* Background Grid Pattern (exact Figma #47:351 / EL-486e08ff) */}
      <img
        src="/assets/hero/hero-grid.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
      />

      {/* Main 1440x1024 Desktop Container */}
      <div className="relative z-10 mx-auto min-h-screen max-w-[1440px] px-6 py-8 sm:px-12 xl:px-[122px] xl:pt-[35px] xl:pb-[60px]">
        {/* Top Header / Logo (exact Figma #47:501: x: 122, y: 35) */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center transition-opacity hover:opacity-90"
            title="ByteSpace Home"
            aria-label="ByteSpace Home"
          >
            <img
              src="/assets/auth/auth-logo.svg"
              alt="ByteSpace"
              className="h-[32px] w-[29px]"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[14px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 xl:hidden"
          >
            Back to Home
          </Link>
        </div>

        {/* Content Layout */}
        <div className="mt-8 flex flex-col gap-12 xl:mt-[53px] xl:flex-row xl:items-start xl:justify-between xl:gap-0">
          {/* Left Column (exact Figma: x: 122, y: 120, width: 475px) */}
          <div className="flex w-full flex-col xl:w-[475px]">
            {/* Text Block (exact Figma #47:498) */}
            <div className="flex flex-col gap-4 text-left">
              <h1 className="font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F5F5F6]">
                Sign up and come in
              </h1>
              <p className="font-body text-[18px] font-normal leading-[1.6] text-[#F5F5F6]">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
              </p>
            </div>

            {/* Visual Collage (exact Figma #15254:194: x: 84, y: 295, width: 552) */}
            <div className="relative mt-8 flex justify-center xl:-ml-[38px] xl:mt-[45px] xl:justify-start">
              <img
                src="/assets/auth/auth-visual-collage.png"
                alt="ByteSpace course showcases and active learners"
                className="w-full max-w-[552px] object-contain drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: White Card (exact Figma #47:362: x: 741, y: 120, width: 579, height: 784, radius: 24) */}
          <div className="flex w-full justify-center xl:w-[579px] xl:justify-end">
            <div className="flex w-full max-w-[579px] min-h-[680px] xl:min-h-[784px] flex-col justify-between rounded-[24px] bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] sm:p-12 xl:px-[63px] xl:py-[61px] text-[#242528]">
              <div>
                {/* Card Header (exact Figma #47:365) */}
                <div className="text-left">
                  <span className="font-body text-[18px] font-normal text-[#003BE2]">
                    Create an Account
                  </span>
                  <h2 className="mt-1 font-heading text-[36px] sm:text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528]">
                    Welcome to ByteSpace
                  </h2>
                </div>

                {/* Form (exact Figma #47:368) */}
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6 xl:mt-10">
                  {/* Full Name Field */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="name" className="font-body text-[14px] font-medium text-[#242528]">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jamie Davis"
                      className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] bg-white px-6 font-body text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none transition-all focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="email" className="font-body text-[14px] font-medium text-[#242528]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="designer@example.com"
                      className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] bg-white px-6 font-body text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none transition-all focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="password" className="font-body text-[14px] font-medium text-[#242528]">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      className="h-[52px] w-full rounded-[12px] border border-[#E5E6E8] bg-white px-6 font-body text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none transition-all focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/10"
                    />
                  </div>

                  {/* Submit Button (aligned right per Figma #47:381) */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-[24px] bg-[#D4FB20] px-6 py-3 font-body text-[18px] font-medium text-[#242528] transition-all hover:brightness-95 active:scale-95 shadow-sm"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>

              {/* Bottom Already Have Account Link (exact Figma #47:383) */}
              <div className="mt-12 text-center font-body text-[16px]">
                <span className="text-[#4B4C53]">Already have an account? </span>
                <Link
                  to="/login"
                  className="font-normal text-[#003BE2] hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop subtle Back to Home */}
        <div className="mt-12 text-center xl:mt-8">
          <Link
            to="/"
            className="text-[14px] text-white/60 transition-colors hover:text-white"
          >
            &larr; Back to ByteSpace Home
          </Link>
        </div>
      </div>
    </div>
  );
}
