import React from "react";

// ✅ Import avatars
import or from "../../assets/or.svg";
import dc from "../../assets/dc.svg";
import nc from "../../assets/nc.svg";
import ls from "../../assets/ls.svg";
import cw from "../../assets/cw.svg";
import pb from "../../assets/pb.svg";

// ✅ Import social icons
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import x from "../../assets/x.svg";

type SocialLink = {
  icon: string;
  href?: string;
  alt: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: SocialLink[];
};

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Olivia Rhye",
      role: "Founder & CEO",
      bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: or,
      socials: [
        { icon: linkedin, href: "#", alt: "LinkedIn" },
        { icon: github, href: "#", alt: "GitHub" },
        { icon: x, href: "#", alt: "X" },
      ],
    },
    {
      name: "Drew Cano",
      role: "UX Researcher",
      bio: "Lead user research for Slack. Contractor for Netflix and Udacity.",
      image: dc,
      socials: [
        { icon: linkedin, href: "#", alt: "LinkedIn" },
        { icon: github, href: "#", alt: "GitHub" },
        { icon: x, href: "#", alt: "X" },
      ],
    },
    {
      name: "Natali Craig",
      role: "Product Designer",
      bio: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
      image: nc,
      socials: [
        { icon: linkedin, href: "#", alt: "LinkedIn" },
        { icon: github, href: "#", alt: "GitHub" },
        { icon: x, href: "#", alt: "X" },
      ],
    },
    {
      name: "Lana Steiner",
      role: "Product Manager",
      bio: "Former PM for Linear, Lambda School, and On Deck.",
      image: ls,
      socials: [
        { icon: linkedin, href: "#", alt: "LinkedIn" },
        { icon: github, href: "#", alt: "GitHub" },
        { icon: x, href: "#", alt: "X" },
      ],
    },
    {
      name: "Candice Wu",
      role: "Backend Developer",
      bio: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
      image: cw,
      socials: [
        { icon: linkedin, href: "#", alt: "LinkedIn" },
        { icon: github, href: "#", alt: "GitHub" },
        { icon: x, href: "#", alt: "X" },
      ],
    },
    {
      name: "Phoenix Baker",
      role: "Engineering Manager",
      bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      image: pb,
      socials: [
        { icon: linkedin, href: "#", alt: "LinkedIn" },
        { icon: github, href: "#", alt: "GitHub" },
        { icon: x, href: "#", alt: "X" },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-20">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section - Text */}
        <div className="text-left">
          <h1 className="text-[20px] md:text-[22px] font-semibold text-[#3F51B5] mb-2">
            Tested and Trusted
          </h1>
          <h2 className="text-[42px] md:text-[48px] font-semibold text-[#101828] mb-4 leading-snug">
            People who use Navo
          </h2>
          <p className="text-[18px] text-[#475467] max-w-md leading-relaxed">
            We reduce the workload and make work as easy and stress-free as you
            never knew existed.
          </p>
        </div>

        {/* Right Section - Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-xl p-6 w-[230px] flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-[80px] h-[80px] rounded-full mb-5 object-cover"
              />
              <h3 className="text-[18px] font-bold text-[#101828] mb-1">
                {member.name}
              </h3>
              <p className="text-[#3F51B5] mb-3 font-medium">{member.role}</p>
              <p className="text-[#475467] text-sm leading-relaxed mb-5">
                {member.bio}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center">
                {member.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform transform hover:scale-110"
                  >
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className="w-5 h-5 opacity-80 hover:opacity-100 hover:brightness-125"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
