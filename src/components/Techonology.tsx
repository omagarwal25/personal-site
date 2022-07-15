import type { FC } from "react";
import { Icon } from "@iconify/react";
interface Props {
  iconName: string;
  title: string;
  link: string;
  description: string;
}
export const Technology: FC<Props> = ({
  iconName,
  title,
  link,
  description,
}) => {
  return (
    <div className="card carousel-item card-side flex rounded-md border border-dashed border-gray-800 pl-5">
      <figure>
        <Icon icon={iconName} className="h-8 w-8" />
      </figure>
      <div className="card-body text-secondary-content">
        <a
          className="link card-title"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};
