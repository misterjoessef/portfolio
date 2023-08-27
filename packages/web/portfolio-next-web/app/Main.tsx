import Image from "next/image";
import logo from "./images/logo.png";
function Main() {
  function renderIntroSection() {
    return (
      <div className="flex flex-col text-base-content p-2">
        <h1 className="text-4xl font-bold sm:text-5xl">Hi 👋 I am</h1>
        <h1 className="mt-1 text-4xl font-extrabold sm:text-5xl">
          <strong className="bg-gradient-to-r from-secondary to-warning bg-clip-text font-bold text-transparent  sm:block">
            Mister Joessef
          </strong>
        </h1>

        <p className=" mt-3 text-xl leading-relaxed  ">
          I am a software developer with an immense interest in <br></br>
          gaming, crypto, automation, AI, and frankly anything tech related.
        </p>
      </div>
    );
  }
  function renderSideLogo() {
    return (
      <div className="flex">
        <Image className="h-full w-full" src={logo} alt="profile picture" />
      </div>
    );
  }
  return (
    <section className="flex w-full my-auto flex-col lg:flex-row  place-content-center ">
      {renderIntroSection()}
      {renderSideLogo()}
    </section>
  );
}
export default Main;
