const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-zinc-900 text-xl text-white">
      <div className="m-auto flex max-w-4xl justify-between self-center p-6">
        <div className="font-serif text-2xl">
          <a href="/">S4S</a>
        </div>
        <div className="flex items-center justify-end gap-12 text-base md:text-xl">
          <div>Contact</div>
          <div>About</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
