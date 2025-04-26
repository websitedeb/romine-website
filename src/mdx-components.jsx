import Link from "next/link";

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 className="text-[#f08721] font-bold text-5xl text-center border-b-2 border-gray-900 pb-3 arimo">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-white font-semibold text-4xl arimo pl-10">
        {children} <i className="bi bi-arrow-right text-[#f08721] ml-2" />
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[#f08721] font-semibold text-3xl arimo pl-16">
        {children} <i className="bi bi-arrow-right text-white ml-2" />
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-white font-semibold text-2xl arimo pl-20">
        {children} <i className="bi bi-arrow-right text-[#f08721] ml-2" />
      </h4>
    ),

    P: ({ children }) => (
      <p className="text-gray-400 font-medium montserrat pl-10">
        <i className="bi bi-paragraph text-[#f08721] mr-2" />
        {children}
      </p>
    ),
    P1: ({ children }) => (
      <p className="text-gray-400 font-medium montserrat pl-20">
        <i className="bi bi-paragraph text-[#f08721] mr-2" />
        {children}
      </p>
    ),
    P2: ({ children }) => (
      <p className="text-gray-400 font-medium montserrat pl-30">
        <i className="bi bi-paragraph text-[#f08721] mr-2" />
        {children}
      </p>
    ),
    P3: ({ children }) => (
      <p className="text-gray-400 font-medium montserrat pl-40">
        <i className="bi bi-paragraph text-[#f08721] mr-2" />
        {children}
      </p>
    ),
    P4: ({ children }) => (
      <p className="text-gray-400 font-medium montserrat pl-50">
        <i className="bi bi-paragraph text-[#f08721] mr-2" />
        {children}
      </p>
    ),
    code: ({ children }) => (
      <code className="block bg-[#1c1c1c] text-[#f08721] font-mono text-sm p-4 rounded-lg mt-2 mb-4 whitespace-pre-wrap border border-[#f08721] shadow-md max-w-96">
        <span className="text-[#7fff00]">$</span> {children}
      </code>
    ),
    Code: ({ children }) => (
      <code className="block bg-[#1c1c1c] text-[#f08721] font-mono text-sm p-4 rounded-lg mt-2 mb-4 whitespace-pre-wrap border border-[#f08721] shadow-md">
        {children}
      </code>
    ),
    a: ({children, href}) => (
      <Link href={href} className="text-white underline hover:text-[#f08721] transition">
        <i class="bi bi-link-45deg"></i>{children}
      </Link>
    ),
    ...components,
  };
}
