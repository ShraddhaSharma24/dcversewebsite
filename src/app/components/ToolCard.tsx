import  Image from 'next/image';
interface ToolCardProps {
  title: string;
}

export default function ToolCard({ title }: ToolCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
        <Image src="/image-placeholder.png" width={180} height={180} alt="Sample" />
      <p className="mt-2 text-md">{title}</p>
    </div>
  );
}
