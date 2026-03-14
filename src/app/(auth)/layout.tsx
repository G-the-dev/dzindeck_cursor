import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div 
      className={figtree.variable}
      style={{ fontFamily: 'var(--font-figtree), Figtree, sans-serif' }}
    >
      {children}
    </div>
  );
}
