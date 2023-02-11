const Sidebar = () => {
  return (
    <div>
      <div className="lg:sticky lg:top-[136px] lg:flex lg:min-w-[20rem] lg:flex-col lg:gap-6 lg:px-4">
        <div className="flex basis-12 bg-white p-4 shadow-lg">Text</div>
        <div className="flex flex-wrap bg-white text-center font-serif text-sm font-bold uppercase text-gray-700 shadow-lg md:flex-col">
          <div className="bg-amber-50 p-4">
            <a href={"/CrashCourse"}>Crash Course</a>
          </div>
          <div className="bg-blue-50 p-4">
            <a href={"/NodeJS"}>NodeJS</a>
          </div>
          <div className="bg-purple-100 p-4">NodeAAAAAJS</div>
          <div className="bg-emerald-50 p-4">Node4412123</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
