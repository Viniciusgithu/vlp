import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";


export default function About() {
    return (
        <main className="min-h-screen flex items-center justify-center">

          <section className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-x1 border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
            <Link href="/">
              <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full mb-5 cursor-pointer">
                <BsArrowLeft className="mr-2"/>
                <span>Back to Home</span>
              </Button>
            </Link>

            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-emerald-400">About me</h1>
              <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
                <p>Hello, my name is Vinicius Lima Pazos. I'm an enthusiast of the technology advancements that the world is experiencing. <br />
                  So, I'm looking for a way to understand why this happens and how to create it. <br />
                  I'm a person who likes to learn new things and I'm always looking for new challenges.
                </p>
              </div>
            </div>

           {/* Education */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-emerald-400">Education</h2>
              <div className="space-y-2">
                <p className="font-medium">Student of System Analysis and Development at Cesar School.</p>
                <p className="text-sm text-neutral-400">Recife, 2024-2026.</p>
              </div>
            </div>

           {/* Professional Experience */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-emerald-400">Professional Experience</h2>
              <section className="space-y-4">

                {/* Freelancer Developer */}
                <div className="space-y-2">
                  <p className="font-medium">Freelancer Developer</p>
                  <ul className="space-y-1">
                    <li className="text-sm text-neutral-400">Developed and maintained web applications using React and Node.js.</li>
                    <li className="text-sm text-neutral-400">Collaborated with a team of designers and developers to create innovative and user-friendly web applications.</li>
                    <li className="text-sm text-neutral-400">Tested and debugged web applications to ensure they were free of errors and met the highest standards of quality.</li>
                  </ul>
                  <p className="text-sm text-emerald-200">Anywhere, 2025</p>
                </div>

                {/* Full Stack Developer */}
                <div className="space-y-2">
                  <p className="font-medium">Full Stack Developer</p>
                  <ul className="space-y-1">
                    <li className="text-sm text-neutral-400">Developed and maintained web applications using Dart and Flutter.</li>
                    <li className="text-sm text-neutral-400">Collaborated with a team of designers and developers to create innovative and user-friendly web applications.</li>
                    <li className="text-sm text-neutral-400">Tested and debugged web applications to ensure they were free of errors and met the highest standards of quality.</li>
                  </ul>
                  <p className="text-sm text-emerald-200">Quiz10 Entretenimento LTDA, 2023-2024</p>
                </div>

                {/* Technological Residency - Digital Port */}
                <div className="space-y-2">
                  <p className="font-medium">Technological Residency</p>
                  <ul className="space-y-1">
                    <li className="text-sm text-neutral-400">Built features using Nextjs, Tailwind, ensuring responsive and intuitive interfaces.</li>
                    <li className="text-sm text-neutral-400">Partnered with resident companies (Pague Bem Brasil and Mesa Mobile Thinking) to solve core business challenges within the Tech Park ecosystem.</li>
                    <li className="text-sm text-neutral-400">Actively participated in high-performance teams using Scrum/Kanban to ensure continuous and efficient delivery.</li>
                  </ul>
                  <p className="text-sm text-emerald-200">Digital Port, 2024-2026</p>
                </div>
              </section>
            </div>








          </section>
        </main>
    );
}