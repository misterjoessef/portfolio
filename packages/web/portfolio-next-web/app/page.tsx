import Main from "./Main";
import Skills from "./Skills";
import Experience from "./Experience";
export default function Home() {
  return (
    <div className="flex flex-col w-full h-full snap-y">
      <div className="snap-center">
        <Main />
      </div>
      <div className="snap-center">
        <Skills />
      </div>
      <div className="snap-center">
        <Experience />
      </div>
    </div>
  );
}
