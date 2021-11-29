import Head from "next/head";
import Skill from "../components/Skill";

export default function Skills() {
  return (
    <div>
      <Head>
        <title>Skills</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"
        ></link>
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-4 text-gray-800">My Skills</h1>
        <div className="mt-8 flex flex-col sm:flex-row space-x-5 justify-center">
          <div className="sm:w-5/6 sm:wflex flex-col">
            <h2 className="text-3xl text-center mb-4 text-gray-800">
              Languages
            </h2>
            <div className="flex flex-wrap justify-center">
              <Skill
                name="HTML"
                logo="devicon-html5-plain"
                link="https://developer.mozilla.org/en-US/docs/Web/HTML"
              />
              <Skill
                name="CSS"
                logo="devicon-css3-plain"
                link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              />
              <Skill
                name="Javascript"
                logo="devicon-javascript-plain"
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              />
              <Skill
                name="Python"
                logo="devicon-python-plain"
                link="https://www.python.org/"
              />
              <Skill
                name="C++"
                logo="devicon-cplusplus-plain"
                link="https://www.cplusplus.com/"
              />
            </div>
          </div>

          <div className="sm:w-5/6 flex flex-col mt-6 sm:mt-0">
            <h2 className="text-3xl text-center mb-4 text-gray-800">
              Technologies
            </h2>
            <div className="flex flex-wrap justify-center">
              <Skill
                name="Node"
                logo="devicon-nodejs-plain"
                link="https://nodejs.org/en/"
              />
              <Skill
                name="Express"
                logo="devicon-express-original"
                link="https://expressjs.com/"
              />
              <Skill
                name="MySQL"
                logo="devicon-mysql-plain"
                link="https://www.mysql.com/"
              />
              <Skill
                name="MongoDB"
                logo="devicon-mongodb-plain"
                link="https://www.mongodb.com/"
              />
              <Skill
                name="TailwindCSS"
                logo="devicon-tailwindcss-plain"
                link="https://tailwindcss.com/"
              />
              <Skill
                name="React"
                logo="devicon-react-plain"
                link="https://reactjs.org/"
              />
              <Skill
                name="NextJS"
                logo="devicon-nextjs-plain"
                link="https://nextjs.org/"
              />
              <Skill
                name="Git/Github"
                logo="devicon-git-plain"
                link="https://git-scm.com/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
