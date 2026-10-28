import Image from 'next/image'
import { site } from 'app/site'

const researchHighlights = [
  {
    label: 'The goal',
    text: 'About 50 million Americans live with lifelong chronic pain. This research program at TACC works toward predicting the likelihood of chronic pain, so care and resources reach the people who need them.',
  },
  {
    label: 'What I build',
    text: 'A frictionless Python pipeline that cleans, analyzes and transforms data for the National Institute of Mental Health Data Archive (NDA), with more than 40 surveys programmed across multiple datasets in Python and SQL.',
  },
  {
    label: 'How I work',
    text: 'I collaborate with research scientists as an NSF supercomputing intern, sharing reusable code through GitHub and working with software containers and data imputation.',
  },
  {
    label: 'The impact',
    text: 'More than 40 data conversions, all accepted by the NIMH Data Archive, and recognition from my team. The work contributes to the HEAL (Helping End Addiction Long-term) initiative, and my reusable code is published in the National Common Data Elements Repository.',
  },
]

const numbers = [
  { value: '40+', caption: 'Data conversions accepted by the NIMH Data Archive' },
  { value: '~50M', caption: 'Americans living with chronic pain, the focus of my research' },
  { value: '3', caption: 'Internship extensions at TACC for exceptional work' },
  { value: '25%', caption: 'More successful placements from data insights at Texas HHS' },
]

const interests = [
  'Labor economics',
  'Monetary policy',
  'Behavioral economics',
  'Healthcare',
  'Public health',
]

const experience = [
  {
    role: 'Data Analyst',
    org: 'Texas Advanced Computing Center (TACC)',
    when: '2025 – now',
  },
  {
    role: 'Data Specialist',
    org: 'Texas Health and Human Services',
    when: '2023 – 2024',
  },
  {
    role: 'Behavioral health roles',
    org: 'Hillcrest Behavioral Health · Glenwood Autism Center',
    when: '2017 – 2020',
  },
  {
    role: 'Research Assistant',
    org: 'Childcare Aware America',
    when: '2016 – 2017',
  },
  {
    role: 'Satellite Operator & Evaluator',
    org: 'United States Air Force',
    when: '2009 – 2013',
  },
]

const education = [
  {
    degree: 'B.A. in Economics & Psychology',
    school: 'University of Miami',
    when: '2017',
  },
  {
    degree: 'Computer Science & Programming Certificate',
    school: 'Austin Community College',
    when: '2025',
  },
  {
    degree: 'Associate of Applied Science in Mathematics',
    school: 'Austin Community College',
    when: 'Expected May 2027',
  },
]

const skills = [
  'Python',
  'SQL',
  'PL/SQL',
  'Bash',
  'PowerShell',
  'SPSS',
  'Git',
  'Software containers',
  'Power BI',
  'Statistical analysis',
  'HIPAA-compliant data',
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-16 text-2xl font-bold tracking-tight text-green">
      {children}
    </h2>
  )
}

export default function Page() {
  return (
    <>
      {/* 2. Intro + photo */}
      <section id="about" className="grid gap-4 md:grid-cols-3">
        <div className="bento flex flex-col justify-between md:col-span-2">
          <div>
            <span className="bento-label">
              {site.title} · {site.location}
            </span>
            <h1 className="title mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {site.tagline}
            </h1>
            <p className="mb-6 max-w-xl text-lg leading-relaxed">
              I'm {site.name}. I like helping others through technology and
              scientific research, drawing on economics, psychology and
              mathematics to identify common routine behaviors and gain
              insight into human behavior.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#research" className="btn btn-primary">
              View my research
            </a>
            <a href={site.resume} download className="btn btn-outline">
              Download résumé
            </a>
          </div>
        </div>
        <div className="bento relative min-h-[320px] p-0">
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            fill
            sizes="(min-width: 768px) 300px, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* 3. Open to research roles + Why research */}
        <div className="bento flex flex-col">
          <span className="bento-label self-start">Open to research roles</span>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">
            Seeking a full-time position on a research team
          </h2>
          <p className="mb-5 leading-relaxed">
            For the next year, I want to put my data science and mathematics
            skills to work on a research team.
          </p>
          <ul className="mt-auto space-y-1.5 text-sm">
            <li>
              <strong className="font-semibold">Start:</strong> Immediately
            </li>
            <li>
              <strong className="font-semibold">Location:</strong> Austin, TX
              and surrounding areas
            </li>
            <li>
              <strong className="font-semibold">Work style:</strong> On-site,
              hybrid, remote or travel
            </li>
          </ul>
        </div>
        <div className="bento md:col-span-2">
          <span className="bento-label">Why research</span>
          <h2 className="mb-3 text-xl font-semibold tracking-tight">
            From working with people to research that helps them
          </h2>
          <p className="leading-relaxed">
            After earning my B.A. at the University of Miami, I worked with
            adults with disabilities. That experience showed me how much work
            there is still to do in research, and that I can use my skills as
            a scientist to help people through research that improves lives
            over the long term.
          </p>
        </div>
      </section>

      {/* 4. Research */}
      <section id="research">
        <SectionHeading>Research</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bento md:col-span-2">
            <span className="bento-label">Current research · TACC</span>
            <h3 className="title mb-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Transforming healthcare data to help Americans living with
              chronic pain
            </h3>
            <p className="max-w-2xl leading-relaxed">
              Data Analyst, NSF LCCF Internship at the Texas Advanced
              Computing Center, June 2025 to present. My internship has been
              extended three times for exceptional work.
            </p>
          </div>

          {researchHighlights.map(({ label, text }) => (
            <div key={label} className="bento">
              <span className="bento-label">{label}</span>
              <p className="leading-relaxed">{text}</p>
            </div>
          ))}

          <figure className="bento md:col-span-2">
            <span className="bento-label">Research poster</span>
            <a
              href="/research-poster.jpg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the research poster full size"
            >
              <Image
                src="/research-poster.jpg"
                alt="Research poster: Transforming Healthcare Data through the Frictionless Pipeline Process in Python"
                width={960}
                height={540}
                className="w-full rounded-xl bg-white"
              />
            </a>
            <figcaption className="mt-3 text-sm text-[var(--on-green-muted)]">
              Poster for my TACC healthcare data research. Click to open it
              full size.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. By the numbers */}
      <section aria-labelledby="numbers-heading">
        <SectionHeading>
          <span id="numbers-heading">By the numbers</span>
        </SectionHeading>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {numbers.map(({ value, caption }) => (
            <div key={value} className="bento">
              <p className="stat-value mb-2 text-4xl font-bold tracking-tight">
                {value}
              </p>
              <p className="text-sm leading-snug">{caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Research interests */}
      <section aria-labelledby="interests-heading">
        <SectionHeading>
          <span id="interests-heading">Research interests</span>
        </SectionHeading>
        <div className="bento flex flex-wrap gap-2">
          {interests.map((interest) => (
            <span key={interest} className="chip">
              {interest}
            </span>
          ))}
        </div>
      </section>

      {/* 7. Experience + Education */}
      <section id="experience">
        <SectionHeading>Experience &amp; education</SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="bento md:col-span-2">
            <span className="bento-label">Experience</span>
            <ul className="divide-y divide-white/15">
              {experience.map(({ role, org, when }) => (
                <li
                  key={role}
                  className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span>
                    <strong className="font-semibold">{role}</strong>
                    <span className="block text-sm">{org}</span>
                  </span>
                  <span className="shrink-0 text-sm tabular-nums">{when}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bento">
            <span className="bento-label">Education</span>
            <ul className="space-y-4">
              {education.map(({ degree, school, when }) => (
                <li key={degree}>
                  <strong className="block font-semibold">{degree}</strong>
                  <span className="text-sm">
                    {school} · {when}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-white/20 pt-4 text-sm">
              Next goal: a <strong>Master of Science in Economics</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Skills */}
      <section aria-labelledby="skills-heading">
        <SectionHeading>
          <span id="skills-heading">Skills</span>
        </SectionHeading>
        <div className="bento flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 9. Contact */}
      <section id="contact" className="mt-16">
        <div className="bento flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="bento-label">Get in touch</span>
            <h2 className="text-2xl font-semibold tracking-tight">
              Hiring for a research team? Let's talk.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:shrink-0 md:flex-nowrap">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              Email me
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
