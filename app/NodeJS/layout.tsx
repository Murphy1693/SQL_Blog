import { ReactNode } from "react";

const NJLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="text-grey-700 bg-blue-50 p-4 text-center font-serif text-sm font-bold uppercase">
        NodeJS
      </div>
      {children}
    </div>
  );
};

export default NJLayout;
