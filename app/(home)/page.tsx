import Link from "next/link";

export default function Home() {
  return (
    <Link href="/charge" className="text-xl hover:text-blue-500">
      جهت خرید شارژ لطفا کلید کنید.
    </Link>
  );
}
