export function TextBlockRoot({children}: {children: React.ReactNode}) {
  return <div className="aya space-y-[15px]">{children}</div>;
}

export function TextBlockIcon({
  icon,
}: {
  icon: React.FC<React.SVGProps<SVGElement>>;
}) {
  return icon;
}

export function TextBlockTitle({children}: {children: string}) {
  return <h3 className="text-[24px]">{children}</h3>;
}

export function TextBlockDescription({children}: {children: string}) {
  return <p className="text-[16px] text-[#95969A]">{children}</p>;
}

// image, video, carousel etc.
export function TextBlockMedia() {}

export const TextBlock = {
  Root: TextBlockRoot,
  Icon: TextBlockIcon,
  Title: TextBlockTitle,
  Description: TextBlockDescription,
  Media: TextBlockMedia,
};
