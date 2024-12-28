import {ReactNode} from 'react';
import Link from 'next/link';
import {LinkProps} from 'next/link';
import {cn} from '@/libs/utils';

interface PageLinkProps extends LinkProps {
  // underline color
  mode?: "light" | "dark";
  // animate padding left on hover
  shift?: boolean;
  children?: ReactNode;
  target?: string;
}

export const PageLink = ({ children, target = "_self", mode = "dark", shift, ...props }: PageLinkProps) => {
  return (
      <Link {...props} target={target}>
          <div className="group z-10 w-min">
              <p className={cn(shift && "transition-[padding-left] group-hover:pl-1")}>{children}</p>
              <div
                  className={cn(
                      "pointer-events-none h-0.5 w-0 rounded transition-[width,padding] group-hover:w-1/2",
                      mode === "light" ? "bg-blue-100" : "bg-blue-950"
                  )}
              />
          </div>
      </Link>
  );
};