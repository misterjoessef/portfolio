import Image from "next/image";
import notfound from "./images/notFound.png";

import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex justify-center pb-10 w-full h-full">
      <div className="emoji-404 flex-row justify-center">
        <Image src={notfound} alt="Not found picture" />
        <div>
          <span className="text-6xl flex justify-center">
            <span>4 0 4</span>
          </span>
          <span className="text-x flex justify-center">Got lost?</span>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href={"/"}
            className="btn btn-secondary text-xl p-2 rounded-md hover:shadow-md"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
