export function Card({
  title,
  description,
  href,
}: {
  href?: string;
  description: string;
  title: string;
}) {
  const content = (
    <div
      className={`${
        href ? "" : " p-5 "
      } flex items-center justify-center bg-gray-50 rounded-md`}
    >
      <div
        style={{ height: 20, width: 20 }}
        className="bg-indigo-300 rounded-full animate-pulse"
      />
      <div className="ml-5 flex flex-col flex-1">
        <p className="font-bold leading-none uppercase text-lg tracking-wider text-gray-600">
          {title}
        </p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        className="flex items-center justify-center p-5 bg-gray-50"
        href={href}
      >
        {content}
      </a>
    );
  }

  return content;
}
