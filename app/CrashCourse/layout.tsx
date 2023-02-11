import { ReactNode } from "react";

const CCLayout = ({ children }: { children: ReactNode }) => {
  let value = Math.floor(Math.random() * 100);
  return (
    <div>
      <div className="text-grey-700 bg-amber-50 p-4 text-center font-serif text-sm font-bold uppercase">
        Crash Course
      </div>
      {children}
    </div>
  );
};

export default CCLayout;
