import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="shadow-lg w-64 mb-4">
        <div className="flex items-center justify-center w-full h-full text-white">
          <span>Nothing found, so sorry ;/</span>
        </div>
      </div>
      <Link href="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
}
