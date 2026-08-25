import type { Metadata } from "next";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const prototiposDir = path.join(process.cwd(), "public", "prototipos");
  if (!fs.existsSync(prototiposDir)) {
    return [];
  }

  const files = fs.readdirSync(prototiposDir);
  return files
    .filter((file) => file.endsWith(".html"))
    .map((file) => ({
      slug: file.replace(/\.html$/, ""),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formattedName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Protótipo Exclusivo: ${formattedName} | EMS Dev`,
    description: `Apresentação comercial de protótipo de site desenvolvido exclusivamente para ${formattedName}.`,
    openGraph: {
      title: `Protótipo Exclusivo: ${formattedName}`,
      description: `Confira a proposta de novo site desenvolvida pela EMS Dev para ${formattedName}.`,
    },
  };
}

export default async function PrototipoSlugPage({ params }: Props) {
  const { slug } = await params;
  const htmlPath = `/prototipos/${slug}.html`;

  return (
    <div className="w-full flex-1 min-h-[calc(100vh-60px)] bg-slate-950 flex flex-col">
      <iframe
        src={htmlPath}
        title={`Protótipo - ${slug}`}
        className="w-full flex-1 border-0"
        style={{ width: "100%", height: "calc(100vh - 60px)", border: "none" }}
      />
    </div>
  );
}
