// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { BiMapPin, BiPhone } from "react-icons/bi";
// import { BsArrowLeft } from "react-icons/bs";
// import { MdMail } from "react-icons/md";


// export default function About() {
//     return (
//         <main className="min-h-screen flex items-center justify-center">
//             <section className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
//                 <Link href="/">
//                     <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full cursor-pointer">
//                         <BsArrowLeft className="mr-2" />
//                         <span>Back to Home</span>
//                     </Button>
//                 </Link>

//                 {/* all contact info */}
//                 <div className="space-y-6">
//                     <h1 className="text-2xl font-bold text-center text-emerald-400">Contact with me</h1>
//                     <div className="space-y-6">
//                         <p className="text-pretty text-neutral-200 tracking-tight">I'm always open to new opportunities and challenges. Please feel free to reach out to me if you have any questions or if you'd like to work together.
//                         </p>
//                         <div className="space-y-4">
//                             {/* <section className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
//                                 <MdMail className="w-5 h-5 text-emerald-400" />
//                                 <a href="mailto:vladislavperepelkin@gmail.com">mailto:vladislavperepelkin@gmail.com</a>
//                             </section>
//                             <section className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
//                                 <BiPhone className="w-5 h-5 text-emerald-400" />
//                                 <a href="tel:+380956666666">+380956666666</a>
//                             </section>
//                             <section className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
//                                 <BiMapPin className="w-5 h-5 text-emerald-400" />
//                                 <a href="https://www.google.com/maps/place/1600+Amphitheatre+Parkway,+Mountain+View,+CA+94043,+USA">1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</a>
//                             </section> */}

//                             {/* Contact form */}
//                             <section className="space-y-4">
//                                 <h2 className="text-2xl font-bold text-emerald-400">Contact me</h2>
//                                 <div className="space-y-2">
//                                     <section>
//                                     <label>What's your name?</label>
//                                     </section>
//                                     <input type="text" id="name" placeholder="Your Name" className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 flex items-center gap-3 bg-black/40 focus:outline-none focus:border-emerald-400 transition-all duration-300" />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <section>
//                                         <label>What's your email address?</label>
//                                     </section>
//                                     <input type="email" id="email" placeholder="Your Email" className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 flex items-center gap-3 bg-black/40 focus:outline-none focus:border-emerald-400 transition-all duration-300" />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <section>
//                                         <label>What's your message you want to send?</label>
//                                     </section>
//                                     <textarea id="message" placeholder="Your Message" className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 flex items-center gap-3 bg-black/40 focus:outline-none focus:border-emerald-400 transition-all duration-300" />
//                                 </div>
//                                 <Button variant="default" className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 flex items-center gap-3 bg-black/40 focus:outline-none focus:border-emerald-400 transition-all duration-300">
//                                     Send a message
//                                 </Button>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </main>
//     );
// }



"use client";

import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function About() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                setStatus("Message sent successfully! I'll get back to you as soon as possible.");
                (event.target as HTMLFormElement).reset();
            } else if (response.status === 429) {
                // Rate limit exceeded
                const errorData = await response.json();
                const minutes = Math.ceil(errorData.retryAfterSeconds / 60);
                setStatus(`Too many requests. Please wait ${minutes} minute(s) before trying again.`);
            } else {
                setStatus("Error sending message. Please try again.");
            }
        } catch (error) {
            setStatus("Connection error.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <section className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
                <Link href="/">
                    <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full cursor-pointer">
                        <BsArrowLeft className="mr-2" />
                        <span>Back to Home</span>
                    </Button>
                </Link>

                <div className="space-y-6">
                    <h1 className="text-2xl font-bold text-center text-emerald-400">Contact with me</h1>
                    <div className="space-y-6">
                        <p className="text-pretty text-neutral-200 tracking-tight">
                            I'm always open to new opportunities and challenges.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h2 className="text-2xl font-bold text-emerald-400">Contact me</h2>

                            <div className="space-y-2">
                                <label className="text-neutral-300">What's your name?</label>
                                <input name="name" type="text" required placeholder="Your Name" className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 focus:outline-none focus:border-emerald-400 transition-all text-white" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-neutral-300">What's your email address?</label>
                                <input name="email" type="email" required placeholder="Your Email" className="w-full p-2 rounded-lg border border-gray-700/50 bg-black/40 focus:outline-none focus:border-emerald-400 transition-all text-white" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-neutral-300">What's your message?</label>
                                <textarea name="message" required placeholder="Your Message" className="w-full p-2 h-32 rounded-lg border border-gray-700/50 bg-black/40 focus:outline-none focus:border-emerald-400 transition-all text-white" />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold"
                            >
                                {loading ? "Sending..." : "Send a message"}
                            </Button>

                            {status && <p className="text-center text-sm text-emerald-400 mt-2">{status}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}