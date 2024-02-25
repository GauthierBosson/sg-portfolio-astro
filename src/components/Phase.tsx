export function PhaseRoot({children}: {children: React.ReactNode}) {
  return <div className="w-[200px] my-[100px]">{children}</div>;
}

export function PhaseTitle({children}: {children: string}) {
  return <h3>{children}</h3>;
}

export function PhaseMainTask({
  children,
}: {
  children: React.ReactElement<typeof PhaseSubTask>;
}) {
  return (
    <div className="inline-block px-[24px] py-[8px] rounded-md bg-[#1975FF] text-white">
      {children}
    </div>
  );
}

export function PhaseSubTask({children}: {children: string}) {
  return (
    <div className="relative w-full h-[75px]">
      <svg
        className="absolute top-[-5px] left-[15px]"
        width="45"
        height="91"
        viewBox="0 0 45 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          className="blue-line"
          d="M1 0V72.3221C1 78.87 6.30815 84.1781 12.8561 84.1781H37.161"
          stroke="#1975FF"
          strokeWidth="1.7"
        />
        <circle
          className="blue-circle"
          cx="37.7536"
          cy="84.1781"
          r="6.52084"
          fill="#1975FF"
          fillOpacity="0.2"
        />
        <circle
          className="inner-blue-circle"
          cx="37.7537"
          cy="84.1784"
          r="2.66762"
          fill="#1975FF"
        />
      </svg>
      <div className="sub-task inline-block relative top-[58px] left-[52px] z-[-1] px-[18px] py-[8px] rounded-md border border-[#E8EFF9]">
        {children}
      </div>
    </div>
  );
}

export const Phase = {
  Root: PhaseRoot,
  Title: PhaseTitle,
  MainTask: PhaseMainTask,
  SubTask: PhaseSubTask,
};
