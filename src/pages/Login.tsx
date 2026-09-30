import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoMark from '/assets/hero/logo-mark.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen bg-[#FAF7EE] text-ink">
      {/* Left Column: Visual Showcase (Hidden on Mobile/Tablet, visible on Desktop lg+) */}
      <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between overflow-hidden bg-brand p-12 lg:p-16 text-white">
        {/* Background Grid */}
        <img
          src="/assets/hero/hero-grid.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />

        {/* 3D Decorative Ornament */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-[500px] w-[500px] opacity-40">
          <img
            src="/assets/cta/cta-ornament.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        {/* Top Logo */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <img src={logoMark} alt="" width={32} height={36} className="h-9 w-auto" />
            <span className="font-display text-[26px] font-bold tracking-tight text-white">
              ByteSpace
            </span>
          </Link>
        </div>

        {/* Centered Pitch & Social Proof */}
        <div className="relative z-10 max-w-[500px] py-12">
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-[13px] font-semibold text-accent backdrop-blur-md">
            Learn from the Best
          </span>
          <h2 className="mt-6 font-heading text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
            Unlock Your Creative &amp; Technical Potential
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-subtle">
            Join a thriving community of over 12,000 learners mastering design, engineering, business, and creative technology.
          </p>

          {/* Social Proof Card */}
          <div className="mt-8 flex items-center gap-4 rounded-[20px] bg-white/10 p-4 backdrop-blur-md border border-white/15">
            <div className="flex -space-x-2">
              {['/assets/testimonials/sarah.png', '/assets/testimonials/james.png', '/assets/testimonials/alex.png'].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="size-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="#D4FB20" className="size-4">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-0.5 text-[13px] font-medium text-white/90">
                4.8/5 rating from 2,400+ student reviews
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-[13px] text-white/60">
          &copy; {new Date().getFullYear()} ByteSpace Inc. All rights reserved.
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="flex w-full lg:w-1/2 flex-col justify-between px-6 py-10 sm:px-12 sm:py-16 lg:px-20 xl:px-28">
        {/* Mobile Header */}
        <div className="flex items-center justify-between lg:justify-end">
          <Link to="/" className="flex items-center gap-2 lg:hidden">
            <img src={logoMark} alt="" width={28} height={31} className="h-7 w-auto" />
            <span className="font-display text-[22px] font-bold text-ink">ByteSpace</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-ink"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Main Form Content */}
        <div className="mx-auto my-auto w-full max-w-[440px] pt-8 lg:pt-0">
          <div className="text-left">
            <h1 className="font-heading text-[32px] sm:text-[36px] font-bold tracking-tight text-[#040819]">
              Welcome Back
            </h1>
            <p className="mt-2 text-[15px] sm:text-[16px] text-muted">
              Enter your credentials to access your courses and workspace.
            </p>
          </div>

          {/* Social Logins */}
          <div className="mt-8 grid grid-cols-2 gap-3.5">
            <button
              type="button"
              className="flex h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#CED0D3] bg-white px-4 text-[14px] font-medium text-ink transition-all hover:bg-[#F5F5F6] hover:border-gray-400 active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" className="size-4 shrink-0">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="flex h-[48px] items-center justify-center gap-2.5 rounded-full border border-[#CED0D3] bg-white px-4 text-[14px] font-medium text-ink transition-all hover:bg-[#F5F5F6] hover:border-gray-400 active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.15.65-2.81 1.43-.58.67-.99 1.74-.95 2.78 1.07.08 2.14-.59 2.75-1.34z" />
              </svg>
              <span>Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-7 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#CED0D3]" />
            </div>
            <span className="relative bg-[#FAF7EE] px-4 text-[13px] uppercase tracking-wider text-muted font-medium">
              or continue with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="email" className="text-[13px] font-semibold text-ink">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="h-[50px] w-full rounded-[14px] border border-[#CED0D3] bg-white px-4 text-[15px] text-ink outline-none transition-all placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5 text-left">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-[13px] font-semibold text-ink">
                  Password
                </label>
                <a href="#" className="text-[12px] font-medium text-brand hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-[50px] w-full rounded-[14px] border border-[#CED0D3] bg-white px-4 pr-12 text-[15px] text-ink outline-none transition-all placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors p-1"
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2 pt-1 text-left">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="size-4 rounded border-[#CED0D3] accent-brand cursor-pointer"
              />
              <label htmlFor="remember" className="text-[13px] text-muted cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 flex h-[52px] w-full items-center justify-center rounded-pill bg-accent text-[16px] font-semibold text-ink shadow-sm transition-all hover:opacity-90 active:scale-[0.99]"
            >
              Sign In
            </button>
          </form>

          {/* Switch to Signup */}
          <p className="mt-8 text-center text-[14px] text-muted">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="font-semibold text-brand hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 text-center text-[12px] text-muted">
          By signing in, you agree to ByteSpace&apos;s{' '}
          <a href="#" className="underline hover:text-ink">Terms of Service</a> and{' '}
          <a href="#" className="underline hover:text-ink">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
