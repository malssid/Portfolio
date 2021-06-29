import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col items-center">
        <div className="flex text-center sm:text-left flex-col px-10 sm:px-14 my-4 sm:flex-row justify-center items-center">
          <img src="/avataaars.svg" className="sm:w-60 w-48 sm:mb-0 mb-4" />
          <p className="sm:w-3/4 lg:w-2/4 sm:text-lg">
            <span className="sm:text-4xl text-3xl">
              Hey! <span className="wave">👋</span>
            </span>{" "}
            My name is Michael. I am currently a senior at the University
            of Rhode Island studying Computer Science with a minor in
            Cyber Security. I have always been fascinated with how complex web
            applications could be but I never really looked into how they were
            made. In the summer of 2020, stuck in my home because of the
            pandemic, I was encouraged to learn HTML, CSS and
            Javascript and since then my goal has been to land a job as a{" "}
            <span className="sm:text-xl text-lg font-bold text-gray-800">
              Full Stack Developer
            </span>{" "}
            .
          </p>
        </div>
        <div className="mb-4 flex sm:flex-row flex-col items-center space-x-2">
          <h1 className="text-2xl text-center">Check out my resume </h1>
          <a
            className="transition duration-500 ease-in-out hover:bg-blue-300 transform hover:scale-95 text-2xl font-semibold cursor-pointer bg-blue-400 p-2 rounded-xl text-center mt-2 sm:mt-0"
            href="resume.pdf"
            target="_blank"
          >
            here!
          </a>
        </div>
      </div>
    </div>
  );
}
