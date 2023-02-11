import Template from "@/components/Template";
import Link from "next/link";

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

const CCPage = ({ page }: { page: Page }) => {
  return (
    <div>
      <Template children={{ title: "Introduction", sections: [] }}></Template>
    </div>
  );
};

export default CCPage;
