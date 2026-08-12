import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactExperience from "../components/ContactExperience.tsx";

type ContactFormState = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<ContactFormState>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Show loading state

        try {
            if (!formRef.current) return;

            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // Reset form and stop loading
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error); // Optional: show toast
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full px-5 xl:px-40">
                <div className="flex flex-col items-center gap-5">
                    <div className="hero-badge">
                        <p>💬 Have questions or ideas? Let’s talk! 🚀</p>
                    </div>
                    <div>
                        <h1 className="font-semibold md:text-5xl text-3xl text-center">
                            Get in Touch – Let’s Connect
                        </h1>
                    </div>
                </div>

                <div className="mt-16 grid-12-cols">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-5 xl:p-10">
                            <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email Address"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={5}
                                        placeholder="Your Message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" disabled={loading} className="message-button">
                                    <p>{loading ? 'Sending...' : 'Send Message'}</p>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="xl:col-span-7 min-h-96">
                        <div className="w-full h-full hover:cursor-grab rounded-xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>

                <div className="grid-4-cols mt-20 pb-20">
                    <div className="light-button flex-center">
                        <button className="bt">
                            <div className="light-holder">
                                <div className="dot"></div>
                                <div className="light"></div>
                            </div>
                            <div className="button-holder">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    fill="currentColor"
                                >
                                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                                </svg>
                                <p>Instagram</p>
                            </div>
                        </button>
                    </div>
                    <div className="light-button flex-center">
                        <button className="bt">
                            <div className="light-holder">
                                <div className="dot"></div>
                                <div className="light"></div>
                            </div>
                            <div className="button-holder">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    fill="currentColor"
                                >
                                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                                </svg>
                                <p>GitHub</p>
                            </div>
                        </button>
                    </div>
                    <div className="light-button flex-center">
                        <button className="bt">
                            <div className="light-holder">
                                <div className="dot"></div>
                                <div className="light"></div>
                            </div>
                            <div className="button-holder">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-linkedin w-7 h-7"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v5" />
                                    <rect width="4" height="12" x="4" y="9" />
                                    <circle cx="6" cy="4" r="2" />
                                </svg>
                                <p>LinkedIn</p>
                            </div>
                        </button>
                    </div>
                    <div className="light-button flex-center">
                        <button className="bt">
                            <div className="light-holder">
                                <div className="dot"></div>
                                <div className="light"></div>
                            </div>
                            <div className="button-holder">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="img"
                                    fill="currentColor"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.683l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                                </svg>
                                <p>Twitter</p>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;