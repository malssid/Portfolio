import Head from "next/head";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        ></link>
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="sm:text-5xl text-4xl mt-4 text-gray-800">My Projects</h1>
        <div className="mt-8 flex flex-col items-center">
          <Project
            name="RhodyRates"
            desc="Coursicle-like site for rating University of Rhode Island courses"
            livelink="https://rhodyrates.com/"
            ghublink="https://github.com/malssid/rhody-rates"
            tech={[
              "ReactJS,",
              "ChakraUI,",
              "Express,",
              "PostgreSQL,",
              "Docker",
            ]}
          />
          <Project
            name="Brighterspace"
            desc="A knock-off of Brightspace (Learning Management System)"
            livelink="http://brighterspace.vercel.app/"
            ghublink="https://github.com/malssid/brighterspace"
            tech={["NextJS,", "ChakraUI,", "MySQL"]}
          />
          <Project
            name="Portfolio"
            desc="My portfolio page"
            livelink="https://michaelalssid.dev/"
            ghublink="https://github.com/malssid/Portfolio"
            tech={["NextJS,", "TailwindCSS"]}
          />
          <Project
            name="RI CSC Badges"
            desc="Prototype of a badging program for K-12 Computer Science students in the state of Rhode Island"
            ghublink="https://github.com/malssid/RI-CSC-Badges-Public"
            tech={["Python,", "Pandas + Gspread,"]}
          />
        </div>
      </div>
    </div>
  );
}
