import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BiWorld, BiLogoGithub } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import projectsData from "../data/projects.json";


export default function About() {

    const { projects } = projectsData;

    return (
        <main className="min-h-screen flex items-center justify-center">
            <section className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
                <Link href="/">
                    <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full cursor-pointer">
                        <BsArrowLeft className="mr-2" />
                        <span>Back to Home</span>
                    </Button>
                </Link>
                {/* 
                <div className="relative flex justify-center">
                    <Link href="/">
                        <Button variant="ghost" className="hover:bg-black/50 absolute duration-300 hover:text-white rounded-full cursor-pointer">
                            <BsArrowLeft className="mr-2" />
                            <span>Back to Home</span>
                        </Button>
                    </Link>
                </div> */}

                <div className="space-y-6">
                    <h1 className="text-2xl font-bold text-center text-emerald-400">Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="group overflow-hidden rounded-lg border hover:scale-105 border-neutral-800/70 bg-black/50 transition-all duration-300 mb-5 p-5">

                                <section><Image src={project.image} alt={project.title} width={500} height={500} /></section>

                                <section className="mb-5 mt-5">
                                    <p className="font-medium text-center">{project.title}</p>
                                    <p className="text-sm text-neutral-400 mt-2">{project.description}</p>
                                </section>

                                <section className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <Button key={tag} variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full cursor-pointer">
                                            {tag}
                                        </Button>
                                    ))}
                                </section>


                                <section className="flex justify-center items-center">
                                    {project.github ? (
                                        <>
                                            <BiLogoGithub />
                                            <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full cursor-pointer">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <span>View on GitHub</span>
                                                </a>
                                            </Button>
                                        </>
                                    ) : project.isPrivate && (
                                        <span className="text-neutral-500 italic hover:text-white duration-300 cursor-not-allowed">🔒 Private Code</span>
                                    )}
                                </section>
                                <section className="flex justify-center items-center">
                                    {project.website ? (
                                        <>
                                            <BiWorld />
                                            <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full cursor-pointer">
                                                <a href={project.website} target="_blank" rel="noopener noreferrer">
                                                    <span>Website</span>
                                                </a>
                                            </Button>
                                        </>
                                    ) : null
                                    }
                                </section>



                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}