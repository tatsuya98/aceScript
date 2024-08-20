import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <section className="welcome">
          <h2>Welcome to Code Ninjas</h2>
          <p className="description max-w-[45ch]">
            Code Ninjas is a platform for coding challenges and interview prep.
            It is a community of learners and coders who are passionate about
            coding. Join us and start your journey.
          </p>
        </section>
      </main>
    </>
  );
}
