import Link from "next/link";

export const Nav = ({ notSticky }: { notSticky?: boolean }) => {
  return (
    <div
      className={`bg-primary ${
        !notSticky && "sticky"
      } absolute top-0 z-10 flex h-16 w-full justify-center
text-primary-content shadow-sm transition-all duration-100`}
    >
      <nav className="navbar sticky">
        <div className="flex-1">
          <Link href="/">
            <a href="" className="btn btn-primary text-xl normal-case">
              Om Agarwal
            </a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/contact">
                <a className="btn btn-primary">Contact &amp; Links</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a className="btn btn-primary">Posts</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
