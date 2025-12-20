import React from "react";

// ✅ Import avatars


import office from "../../assets/office.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";




type TeamMember = {
  name: string;
  role: string;
  address: string;
  image: string;
};


const Header: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Email",
      role: "Our friendly team is here to help.",
      address: "hi@navo.com",
      image: email,
   
    },
    {
      name: "Office",
      role: "Come say hello at our Office HQ",
      address: "110, Smith Street, Lagos, Nigeria.",
      image: office,
   
    },

    {
      name: "Phone",
      role: "Mon - Fri from 8am to 5pm.",
      address: "+1 (555) 000-0000",
      image: phone,
   
    },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-9 py-12">
      <div className="flex flex-col items-center text-center gap-3 w-full">
        <h2 className="text-sm font-semibold  tracking-wide text-[#3F51B5] mb-3">
          Contact us
        </h2>

        <h1 className="text-4xl font-bold">We'd love to hear from you</h1>

        <p className="text-lg max-w-2xl mx-auto text-[#667085]">
          Our friendly team is always here to chat{" "}
        </p>
      </div>

       {/* Right Section - Team Members */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
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
              <h3 className="text-[18px] font-medium text-[#101828] mb-1">
                {member.name}
              </h3>
              <p className="text-[#667085] mb-3 font-light">{member.role}</p>
              <p className="text-[#3F51B5] text-sm leading-relaxed mb-5">
                {member.address}
              </p>

         
            </div>
          ))}
        </div>

     
    </div>
  );
};

export default Header;
