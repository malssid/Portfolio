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
            My name is Michael. I am currently looking for a Software Engineering position, in-person or hybrid in the Providence/Boston area.
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
