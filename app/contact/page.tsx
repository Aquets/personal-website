import React from "react";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  return (
    <main className="container main-content min-h-[100vh] justify-center">
      <div className="flex flex-col gap-14">
        <div>
          <SectionHeader title="Mail" />
          <p className="text-large">alessandroquets@gmail.com</p>
        </div>
        <div>
          <SectionHeader title="Instagram" />
          <p className="text-large">
            <a
              className="no-underline"
              target="_blank"
              href="https://www.instagram.com/alessandroquets/"
            >
              @alessandroquets
            </a>
          </p>
        </div>
        <div>
          <SectionHeader title="GitHub" />
          <p className="text-large">
            <a
              className="no-underline"
              target="_blank"
              href="https://github.com/Aquets"
            >
              aquets
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
