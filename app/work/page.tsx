'use client'

import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BiWorld, BiLogoGithub } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import projectsData from "../data/projects.json";
import { useLanguage } from "../context/LanguageContext";
import BackToHome from "../components/BackToHome";


export default function About() {
    const { t, language } = useLanguage();
    const { projects } = projectsData;

    return (
        <main className="min-h-screen flex items-center justify-center">
            <section className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-green-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">

                <BackToHome />

                <div className="space-y-6">
                    <h1 className="text-2xl font-bold text-center text-emerald-400">{t('projects')}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="group overflow-hidden rounded-lg border hover:scale-105 border-gray-700/50 bg-black/50 transition-all duration-300 mb-5 p-5">

                                <section><Image src={project.image} alt={project.title[language as keyof typeof project.title] || project.title.en} width={500} height={500} /></section>

                                <section className="mb-5 mt-5">
                                    <p className="font-medium text-center">{project.title[language as keyof typeof project.title] || project.title.en}</p>
                                    <p className="text-sm text-neutral-400 mt-2">{project.description[language as keyof typeof project.description] || project.description.en}</p>
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
                                                    <span>{t('viewGithub')}</span>
                                                </a>
                                            </Button>
                                        </>
                                    ) : project.isPrivate && (
                                        <span className="text-neutral-500 italic hover:text-white duration-300 cursor-not-allowed">{t('privateCode')}</span>
                                    )}
                                </section>
                                <section className="flex justify-center items-center">
                                    {project.website ? (
                                        <>
                                            <BiWorld />
                                            <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full cursor-pointer">
                                                <a href={project.website} target="_blank" rel="noopener noreferrer">
                                                    <span>{t('website')}</span>
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