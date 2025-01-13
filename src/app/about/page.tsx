import Link from "next/link";
export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen py-10">
      {/* Header Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-md mx-6 mb-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-800 mb-4 text-center">
          Governor Initiative for AI, Web3, and Metaverse
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          The <span className="font-semibold">Governor Initiative Program</span>{" "}
          is a groundbreaking endeavor aimed at advancing the frontiers of{" "}
          <span className="font-semibold">Artificial Intelligence (AI)</span>,{" "}
          <span className="font-semibold">Web3</span>, and the{" "}
          <span className="font-semibold">Metaverse</span>. This visionary
          program reflects the Governor's commitment to positioning our region
          as a global leader in cutting-edge technology and innovation.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-6 mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center">
          Program Overview
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          The program is structured around quarterly phases, ensuring a
          systematic and dynamic approach to achieving its objectives. Each
          quarter focuses on specific goals, milestones, and deliverables,
          paving the way for transformative progress in these emerging fields.
        </p>
      </div>

      {/* Learning Journey Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mx-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
          Learning Journey by Quarters
        </h2>

        {/* Quarter Details */}
        <div className="space-y-8 mb-10">
          {/* 1st Quarter */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              1st Quarter
            </h3>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Focus on TypeScript
            </h4>
            <ul className="list-disc list-inside text-gray-700 pl-5">
              <li>
                Building a strong foundation in TypeScript to ensure
                participants understand typed JavaScript, enabling better code
                reliability and scalability.
              </li>
            </ul>
          </div>

          {/* 2nd Quarter */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              2nd Quarter
            </h3>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Introduction to HTML and CSS
            </h4>
            <ul className="list-disc list-inside text-gray-700 pl-5 mb-4">
              <li>
                Learning the basics of web development with a focus on structure
                (HTML) and design (CSS).
              </li>
            </ul>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Main Focus on Next.js:
            </h4>
            <ul className="list-disc list-inside text-gray-700 pl-5">
              <li>
                Learning the fundamentals of server-side rendering (SSR) and
                static site generation (SSG).
              </li>
              <li>
                Exploring React concepts like components, hooks, and state
                management.
              </li>
            </ul>
            <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">
              Tools and Frameworks:
            </h4>
            <ul className="list-disc list-inside text-gray-700 pl-5">
              <li>
                Mastering Tailwind CSS for efficient, utility-first styling.
              </li>
              <li>
                Using ShadCN UI for modern, accessible, and customizable
                components.
              </li>
              <li>
                Implementing Sanity.io as a headless CMS for dynamic content
                management.
              </li>
            </ul>
          </div>

          {/* Upcoming Quarters */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Upcoming Quarters
            </h3>
            <ul className="list-disc list-inside text-gray-700 pl-5">
              <li>Python</li>
              <li>Agentic AI</li>
              <li>...and many more</li>
            </ul>
          </div>
        </div>
        {/* Linktree Section */}
        <div className=" bg-blue-100 rounded-lg p-4 my-4 lg:mb-10">
          {/* Link Example */}
          <h2 className="text-2xl font-bold text-blue-800 mb-2">
            Visit Linktree
          </h2>
          <p className="text-gray-700">
            Access all resources, updates, and social links related to the
            Governor Initiative.
          </p>
          <Link href="https://linktr.ee/giaic" target="_blank">
            <button className="p-6 rounded-lg bg-blue-500 shadow-md hover:shadow-lg hover:bg-blue-900 hover:text-white transition duration-300">
              Click here to visit Link Tree
            </button>
          </Link>
        </div>

        
      </div>
    </main>
  );
}
