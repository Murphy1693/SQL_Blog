import Link from "next/link";
import { useState } from "react";
import { Url } from "url";

export type DropdownURL = {
  subStr: string;
  path?: string | null | undefined;
};

export type DropdownProps = {
  text: string;
  list: DropdownURL[];
  duration?: number;
  callback?: () => void;
};

const Dropdown = ({ text, list, duration, callback }: DropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        open
          ? `relative h-[80px] overflow-hidden transition-[height] duration-500`
          : `relative h-[24px] overflow-hidden transition-[height] duration-500`
      }
    >
      <span
        className="cursor-pointer"
        onClick={() => {
          setOpen(!open);
          if (callback) {
            callback();
          }
        }}
      >
        {text}
      </span>
      <div className={open ? "pl-4" : "hidden"}>
        {list.map((item, i) => {
          return (
            <li className={item.path ? "underline" : "null"}>
              {" "}
              {item.path ? null : item.subStr}
              {item.path ? <Link href={item.path}>{item.subStr}</Link> : null}
            </li>
          );
        })}
        {/* {list.map((item, i) => {
          // return <LinkWrapper>{item.link}</LinkWrapper>;
        })} */}
      </div>
    </div>
  );
};

export default Dropdown;
