import Link from "next/link";
import ThemeButton from "../Theming/ThemeButton";
import LogoText from "@/app/components/Theming/LogoText";

export default function NavigationBar() {
  return (
    <div className="">
      <div className="navbar bg-base-300 flex flex-row justify-between p-2">
        <Link href="/">
          <LogoText textSize={2}></LogoText>
        </Link>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"></div>
        <div className="flex-none gap-2 ">
          <ThemeButton></ThemeButton>
        </div>
      </div>
    </div>
  );
}
