// Section.tsx
import React from "react";
import blogImageA from "../../assets/BlogImageA.svg";
import blogImageB from "../../assets/BlogImageB.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import x from "../../assets/x.svg";

type MenuItem = {
  id: string;
  label: string;
  href: string;
};

type SectionProps = {
  className?: string;
  activeItem?: string;
};

const DEFAULT_MENU: MenuItem[] = [
  { id: "introduction", label: "Introduction", href: "#introduction" },
  {
    id: "workflow",
    label: "How Workflow Automation Improves Execution",
    href: "#workflow",
  },
  {
    id: "standardization",
    label: "Standardization and Scalability",
    href: "#standardization",
  },
  {
    id: "summary",
    label: "Summary: Working Smarter, Not Harder",
    href: "#summary",
  },
  { id: "request", label: "Request a Demo", href: "#request" },
];

const Sidebar: React.FC<{
  items: MenuItem[];
  active?: string;
  className?: string;
}> = ({ items, active, className = "" }) => {
  return (
    <aside
      className={`hidden md:block min-w-[250px] ${className}`}
      aria-label="Table of contents"
    >
      <div className="sticky ">
        <hr className="border-t border-[#C7C7CC] my-5" />
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Table of contents
        </h2>

        <ul className="space-y-3">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`block px-4 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-l-4 hover:border-gray-300"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <hr className="border-t border-[#C7C7CC] my-7" />
      </div>
      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="#" aria-label="X">
            <img src={x} alt="X" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="linkedin">
            <img src={linkedin} alt="linkedin" className="h-6 w-6" />
          </a>

          <a href="#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Github">
            <img src={github} alt="Github" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </aside>
  );
};

const Section: React.FC<SectionProps> = ({
  className = "",
  activeItem = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        {/* Sidebar */}
        <Sidebar items={DEFAULT_MENU} active={activeItem} />

        {/* Main content */}
        <main className="md:col-span-3 font-sans text-[#667085] leading-relaxed">
          {/* <div className="prose prose-lg max-w-none mb-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
              massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
              purus. Non massa enim vitae duis mattis. Vel in ultricies vel
              fringilla.
            </p>
          </div> */}

          {/* <hr className="border-t border-[#C7C7CC] my-8" /> */}

          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h1 className="text-3xl font-bold mb-6 text-[#2E2E2E]">
              Introduction
            </h1>

            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Modern teams are constantly juggling tasks, deadlines, and
                communication across multiple tools. As workloads increase,
                manual processes often slow teams down and create confusion.
                This is where workflow automation becomes a powerful solution
                for improving team productivity.
              </p>
            </div>

            {/* Image 1 */}
            <div className="w-full flex justify-center mb-8">
              <img
                src={blogImageA}
                alt="Illustration — design concept"
                className="w-full h-auto object-contain"
              />
            </div>

           

          </section>

          {/* How Workflow Automation Improves Execution */}
          <section id="workflow" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#2E2E2E]">
              How Workflow Automation Improves Execution
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#667085] mb-4">
                Workflow automation helps teams streamline repetitive tasks by
                defining clear steps, responsibilities, and triggers within a
                single system. Instead of manually assigning tasks or following
                up through emails and chats, automation ensures that work moves
                forward automatically. This reduces delays, minimizes errors,
                and allows team members to focus on higher-value work.{" "}
              </p>{" "}
              <p className="text-[#667085]">
                {" "}
                Another major benefit of workflow automation is improved
                visibility. When tasks, progress, and ownership are clearly
                mapped out, teams gain a better understanding of who is doing
                what and when. Managers can easily track progress, identify
                bottlenecks, and make informed decisions without micromanaging.
                This transparency builds accountability and helps teams
                collaborate more effectively.{" "}
              </p>
            </div>
          </section>

          {/* Standardization and Scalability */}
          <section id="standardization" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#2E2E2E]">
              Standardization and Scalability
            </h2>
            <div className="md:grid-cols-2 gap-8 mb-8">
              {" "}
              <p className="mb-4">
                {" "}
                Workflow automation also improves consistency. Automated
                workflows ensure that processes are followed the same way every
                time, which is especially important for growing teams. Whether
                onboarding new employees, launching projects, or handling
                recurring operations, automation helps maintain quality and
                efficiency as the organization scales.{" "}
              </p>{" "}
              {/* <ol className="list-decimal pl-5 ">
                {" "}
                <li className="text-[#667085]">
                  {" "}
                  Lecula id duis vitae porttitor enim gravida raptid.{" "}
                </li>{" "}
                <li className="text-[#667085]">
                  {" "}
                  Eu simple galerius carneur frazajat vulput ell, ultricies
                  suspendisse. Anctor vel in vitae paneus.{" "}
                </li>{" "}
                <li className="text-[#667085]">
                  {" "}
                  Suspendisse meccenas ex glores testicolosae diam sed est duis
                  penus.{" "}
                </li>{" "}
              </ol>{" "} */}
            </div>

            {/* Image 2 */}
            <div className="w-full flex justify-center mb-6">
              <img
                src={blogImageB}
                alt="Illustration — tools overview"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* <div className="prose prose-lg max-w-none py-4">
              {" "}
              <p className="mb-4">
                {" "}
                Lecula iso mattia ante pratique. Masculata mattia non completa
                aliquet. Libero sit ell imperdiet blocarium quisque circum
                vestibulum in non limitum intuitat tempor non est diam. Enim ut
                enim amet amet integer cursus. Sit fer commodo pretium sed diam
                turpis superioreles ad.{" "}
              </p>{" "}
              <p className="mb-4">
                {" "}
                Tortique vitae comodis tam pratique enime ben marus, cintoles.
                Etendr duit setelent vulputibus enotic fingidil curs placenta
                elit. Aliquam tellus brem sed ac. Meritas, sed mattis
                pridentiorque maigriti accusation. Cursus viverra aenean augura
                vitae elementum facultius malesis pulentesque. Aero utilibus sus
                mauris vestibulum.{" "}
              </p>{" "}
            </div> */}
          </section>

          {/* Summary: Working Smarter, Not Harder */}
          <section id="summary" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#2E2E2E]">
              Summary: Working Smarter, Not Harder
            </h2>

            <div className="prose prose-lg max-w-none">
              {" "}
              <p className="mb-4">
                {" "}
                In today’s fast-paced work environment, productivity is no
                longer about working harder—it’s about working smarter. By
                reducing manual effort, improving visibility, and standardizing
                processes, workflow automation empowers teams to do their best
                work with less friction.{" "}
              </p>{" "}
              {/* <p className="mb-4">
                {" "}
                Merc ised fabuleus placinatum fugidil sed laborellis. Notam
                egestas societiferisum nil mattia in. Rincidunt patentes
                consectetur sed duis facilita massa. Enim egestas in nec sed et.
                Quis blandit sit sit dictum eget tellus tenor commodo cursus.{" "}
              </p>{" "}
              <p className="mb-4">
                {" "}
                Quis felis sagittis, maulli feugiat cursus vitae feugiat cursus
                abastis. Nam elementum curus elit aliquet maulli feugiat cursus
                abastis. Ornaus et enim eget tellus. Aliquam serenetur maque ut
                si eget consectetur dictum. Donec posuere praetrar odio
                consequat societistique et, nunc truce.{" "}
              </p>{" "}
              <p className="mb-4">
                {" "}
                Mais adipiscing erot a cet. Condimentum letem posuere gravida
                enim posuere cursus aturo.{" "}
              </p>{" "} */}
            </div>
          </section>
 {/* Quote */}
 <blockquote className="border-l-4 border-[#3F51B5] pl-6 py-6 my-8 rounded-r-lg bg-white">
              <p className="text-xl italic text-[#2E2E2E] mb-4">
                “Workflow automation has made backend work feel cleaner and
                calmer. Less time chasing updates, fewer manual handoffs, and
                more time building reliable systems that actually scale!”
              </p>
              <cite className="block text-sm text-[#667085]">
                — Olivia Bihay, Backend Engineer
              </cite>
            </blockquote>

          {/* Request a Demo*/}
          <section id="request">
            <h2 className="text-2xl font-bold mb-4 text-[#2E2E2E]">
              Request a Demo
            </h2>

            <div className="prose prose-lg max-w-none">
              {" "}
              <p className="mb-1">
                {" "}
                Interested in seeing how workflow automation can transform your
                team?{" "}
              </p>{" "}
              <p className="mb-1">
                {" "}
                Request a demo of Olyndra and discover a smarter way to manage
                work.{" "}
              </p>{" "}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Section;
