// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./Components/Herosection";


// Static data
export const products = [
  { 
    id: "1",
    name: "HTML",
  
    description: "HTML stands for HyperText Markup Language, and it is the primary language used to create web pages. It is a markup language that defines the structure of web pages. Without HTML, web pages would just be plain text, lacking any structure or style.",
    des2:"HTML is the first and most essential step if you want to become a web developer.It helps organize text, images, videos, and links on a web page. HTML is beginner-friendly and simple to understand.",
    des3:"HTML (HyperText Markup Language) works by providing the structure and content for web pages using a system of tags and elements. It defines the building blocks of a page, such as headings, paragraphs, images, links, and other elements, which are interpreted by web browsers to render the page visually. HTML uses a hierarchical structure, with elements nested within each other to create a logical layout. For example, a <div> can contain multiple child elements like <p> for text or <img> for images. Each HTML document starts with a <!DOCTYPE> declaration, followed by the <html> tag, which serves as the root of the document. The content is divided into two main sections: the <head> for metadata (e.g., title, styles, or scripts) and the <body> for visible content. Browsers read the HTML code, interpret its tags, and display the content accordingly, forming the foundation of every website.",
    des4:"HTML is a powerful and fundamental tool that forms the backbone of web development. By learning HTML, you can create structured, meaningful, and visually appealing web pages.Fun Fact: The first HTML document was created in 1991 by Tim Berners-Lee, the inventor of the internet!",
    image: "/html2.png", // Ensure this is inside the public folder
  },
  { 
    id: "2", 
    name: "CSS",
    description: "CSS, or Cascading Style Sheets, is a stylesheet language used to control the appearance and layout of web pages. It works alongside HTML to make web pages visually appealing by styling elements such as colors, fonts, spacing, and layout.",
    des2:"CSS helps make web pages more visually attractive and user-friendly.It separates the structure (HTML) from the styling, making it easier to manage and update.CSS enables web pages to adapt to different screen sizes and devices.",
    des3:"CSS (Cascading Style Sheets) works by applying styles to HTML elements to control their appearance and layout on a web page. It uses a set of rules written in a specific syntax, where selectors target HTML elements and properties define the styles to apply. For example, a rule like p { color: blue; } selects all <p> tags and changes their text color to blue. CSS can be written inline within an element, internally within a <style> tag, or externally in a separate file linked to the HTML document. When the browser renders the web page, it combines the CSS rules with the HTML structure to display styled content. CSS follows the cascading principle, meaning that rules are applied based on specificity, importance, and their source, allowing developers to create flexible and reusable designs.",
    des4:"CSS is a fundamental tool for modern web development. It gives developers the ability to create visually appealing, responsive, and user-friendly websites. Whether you are styling a small page or a complex web application, CSS is an essential skill to master.",
    image: "/css.png", // Ensure this image is also inside the public folder
  },
  { 
    id: "3", 
    name: "Typescript",
    description: "TypeScript is an open-source, strongly typed programming language developed and maintained by Microsoft. It is a superset of JavaScript, meaning all valid JavaScript code is also valid TypeScript code. The primary goal of TypeScript is to enhance JavaScript by adding static typing, improving developer productivity, and making code easier to understand and maintain.",
    des2:"TypeScript introduces a type system that helps catch errors at compile-time rather than runtime, reducing bugs.TypeScript provides better IntelliSense, autocompletion, and code navigation in IDEs. It helps manage and maintain large codebases by enforcing stricter coding standards.TypeScript compiles to plain JavaScript, making it compatible with all JavaScript libraries and frameworks.Type annotations act as self-documenting code, making it easier for developers to understand.",
    des3:"Development: Write TypeScript (.ts) files using type annotations and modern features.Compilation: TypeScript code is compiled into plain JavaScript (.js) using the TypeScript compiler (tsc).Execution: The compiled JavaScript can be executed in any environment, such as browsers or Node.js.",
    des4:"TypeScript enhances JavaScript by introducing static typing, modern programming features, and robust tooling. It is particularly beneficial for developers working on large or collaborative projects, helping to write safer and more maintainable code. As a result, TypeScript has become a popular choice among developers worldwide, offering the best of both worlds—JavaScript&aposs flexibility and the reliability of a strongly typed language.",
    image: "/ts.png", // Ensure this image is also inside the public folder
  },
  { 
    id: "4", 
    name: "NextJs",
    description: "Next.js is a powerful open-source React framework developed by Vercel that allows developers to build fast, user-friendly, and modern web applications. It extends the capabilities of React by providing built-in solutions for server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR), making it a versatile choice for various web development needs.",
    des2:"Next.js supports multiple rendering strategies (SSR, SSG, and CSR) to optimize performance and user experience.It has a file-based routing system, eliminating the need for complex configurations.With features like server-side rendering and static generation, Next.js improves the visibility of web pages in search engines.Built-in API routes allow you to develop backend endpoints directly within your application.Automatic image optimization, code splitting, and faster page loading improve performance.",
    des3:"Pages Directory:Each file in the pages folder corresponds to a route.For example, pages/contact.js creates a route /contact.Rendering Methods:Choose between SSR, SSG, or CSR based on your project requirements.Compilation and Deployment:Next.js compiles your project into optimized static files or server-rendered pages.Deploy easily on platforms like Vercel, AWS, or your own servers.",
    des4:"Next.js is a versatile React framework that simplifies modern web development by combining frontend and backend capabilities. Its flexibility, SEO optimization, and excellent developer experience make it an ideal choice for building high-performance web applications. Whether you&aposre creating a blog, e-commerce site, or enterprise application, Next.js provides the tools to deliver an exceptional user experience.",
    image: "/nextjs.png", // Ensure this image is also inside the public folder
  },
  { 
    id: "5", 
    name: "Tailwind CSS",
    description: "Tailwind CSS is a modern, utility-first CSS framework that provides a set of low-level utility classes to help developers build custom designs without writing custom CSS. Instead of focusing on predefined components or themes, Tailwind allows developers to create unique, responsive, and consistent designs directly in their HTML or JSX files.",
    des2:"Tailwind offers utility classes (e.g., p-4 for padding or text-center for centering text) to quickly style elements without writing CSS from scratch.Speeds up development by enabling developers to design directly in the markup.Tailwind&aposs configuration file (tailwind.config.js) allows full customization of colors, spacing, and breakpoints. Built-in responsive utilities (e.g., md:text-lg, lg:p-6) make it easy to create designs that adapt to different screen sizes.Tailwind automatically removes unused CSS in production using tools like PurgeCSS, ensuring optimized performance.",
    des3:"Setup:Install Tailwind CSS using npm or yarn.Configure the tailwind.config.js file for customization.Include Tailwind in your CSS file.css Copy code_Development:Use utility classes in your HTML or JSX to style elements.Combine multiple classes for complex designs._Production:Remove unused classes to reduce file size using PurgeCSS or JIT mode.",
    des4:"Tailwind CSS revolutionizes frontend development by eliminating the need for writing traditional CSS while providing unmatched flexibility and efficiency. It empowers developers to build custom, responsive designs directly in their markup, making it a preferred choice for modern web projects. Whether you&aposre working on a simple website or a complex application, Tailwind CSS offers the tools you need to design with ease and precision.",
    image: "/tw.png", // Ensure this image is also inside the public folder
  },
  { 
    id: "6", 
    name: "ShadCnUI",
    description: "Shadcn/ui is a modern, highly customizable, and accessible component library for React applications. Unlike traditional UI libraries, Shadcn/ui focuses on offering unstyled or lightly styled components, allowing developers to build unique, design-system-compliant user interfaces. Its approach is rooted in empowering developers with flexibility while maintaining accessibility and best practices.",
    des2:"Ideal for developers who need full control over their UI components to match their design systems or brand guidelines.You are not tied to a predefined style or theme, making it easy to evolve your application&aposs look over time.Ensures a better user experience for everyone, including those relying on assistive technologies.TypeScript support, modern API design, and flexibility make it a developer-friendly choice.",
    des3:"1. Install the Library:To start using Shadcn/ui, install it in your React project. Typically, this is done through a package manager like npm or yarn.2. Import Components: Shadcn/ui offers a variety of accessible, composable components. These components are unstyled by default, allowing you to apply your styling methods. Customize with Your Styling System:Since Shadcn/ui doesn&apost enforce any styling, you can style components using Tailwind CSS and custom CSS",
    des4:"Shadcn/ui is a game-changer for developers looking for a lightweight, accessible, and highly customizable component library. By prioritizing flexibility and accessibility, it empowers developers to create unique and inclusive user experiences without the constraints of predefined styles or locked-in themes. Whether you&aposre building a small application or a complex enterprise-grade system, Shadcn/ui provides the building blocks to bring your design vision to life.",
    image: "/shadcn.png", // Ensure this image is also inside the public folder
  },
  { 
    id: "7", 
    name: "Sanity.io",
    description: "Sanity.io is a powerful, headless Content Management System (CMS) designed to provide developers and content creators with a flexible, scalable, and highly customizable platform for managing structured content. Unlike traditional CMS platforms, Sanity.io focuses on providing a backend for content storage and management, allowing developers to build their frontend applications with the tools and frameworks of their choice.",
    des2:"Unlike traditional CMSs, Sanity.io doesn&apost enforce rigid structures or predefined templates. Developers can model content in ways that suit their projects.The real-time preview and updates ensure a seamless experience for developers and content editors.With features like the Sanity CLI, customizable schemas, and APIs, Sanity.io is highly developer-focused.Structured content allows it to be reused and presented across different platforms like web, mobile apps, or IoT devices.Its cloud-based architecture ensures fast performance and easy scalability.",
    des3:"Sanity Studio:A React-based, open-source content editor that can be customized to match your project needs.Define schemas to structure your content, and Studio automatically generates the editing interface.Content Lake:Sanity&aposs backend, a cloud-hosted content database, stores your structured content securely.APIs:Access your content using GraphQL or REST APIs for integration into your frontend.Real-Time Content Updates:Changes made in Sanity Studio are reflected instantly on connected platforms.Image Optimization:Sanity&aposs image pipeline allows dynamic image transformations (resizing, cropping, etc.) via URL parameters.",
    des4:"Sanity.io is a robust, modern CMS that empowers developers and content creators to manage structured content efficiently. Its flexibility, scalability, and real-time collaboration features make it an excellent choice for projects ranging from small blogs to large-scale applications. By focusing on developer-friendly tools and customizable workflows, Sanity.io offers unmatched versatility in the headless CMS ecosystem.",
    image: "/sanity.png", // Ensure this image is also inside the public folder
  },
];

const ProductListPage = () => {
  return (
    <div>
      <h1 className="text-center p-2 lg:p-5 text-2xl lg:text-4xl font-mono font-extrabold text-blue-900">
        Welcome to my Blog
      </h1>
      <HeroSection />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-10">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden my-2 lg:my-2 hover:shadow-lg transform transition-transform duration-200 hover:scale-105" 
          >
            <Link href={`/${product.id}`}>
              <div className="text-center p-2">
                {/* Display Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="mx-auto h-80 w-full"
                />
                <p className="text-lg mt-2 text-blue-900 font-extrabold">{product.name}</p>
                <button className="bg-blue-400 p-3 hover:bg-blue-900 rounded-md m-2 hover:text-white transform transition-transform duration-300 hover:scale-110">Read more</button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
  
    </div>
  );
};

export default ProductListPage;
