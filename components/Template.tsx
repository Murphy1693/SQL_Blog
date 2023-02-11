import { ReactNode } from "react";

export type section = {
  title: {
    text: string;
    size: number;
  };
  align?: "left" | "right" | "center" | undefined;
  text: string;
};

export type Page = {
  title: string;
  sections: section[];
};

const Template = ({ children }: { children: Page }) => {
  return (
    <div>
      <div className="text-center font-serif text-2xl italic">
        {children.title}
      </div>
    </div>
  );
};

export default Template;
