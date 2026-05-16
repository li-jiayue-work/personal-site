import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4" {...props}>
        {children}
      </h2>
    ),
    p: ({ children, ...props }) => (
      <p className="leading-7 text-muted-foreground mb-4" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4" {...props}>
        {children}
      </ul>
    ),
    ...components,
  };
}
