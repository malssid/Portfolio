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
        <table className="mt-8">
          <tr>
            <td>
              <Project
                name="Brighterspace"
                desc="A clone of Brightspace (LMS)"
                livelink="http://brighterspace.vercel.app/"
                ghublink="https://github.com/malssid/brighterspace"
                tech={["NextJS,", "ChakraUI,", "MySQL"]}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
