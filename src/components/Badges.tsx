import Link from "next/link";
import { FC } from "react";

export const Badges: FC<{ badges: string[] }> = ({ badges }) => {
  return (
    <div className="flex items-center gap-2">
      {badges.map((b) => (
        <Link href={`/posts/tags/${b}`} key={b} passHref>
          <a className="badge link">{b}</a>
        </Link>
      ))}
    </div>
  );
};
