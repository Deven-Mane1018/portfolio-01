import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Sales & Customer Insights Analysis",
        category: "Data Analysis · Python · Excel",
        image: "/analytics_dashboard.png",
        year: "2024",
        description: "Analyzed a 12,000-row retail dataset using Python (Pandas, Seaborn) and Excel. Cleaned and transformed messy transactional data, performed trend analysis and KPI tracking, and delivered actionable insights worth an estimated 18% revenue uplift.",
    },
    {
        id: 2,
        title: "Business KPI Dashboard",
        category: "Data Visualization · Tableau",
        image: "/ecommerce_dashboard.png",
        year: "2024",
        description: "Designed a 6-page interactive Tableau dashboard for business KPI monitoring. Included dynamic filters, drill-downs, and trend visualizations — used as a team reference. Reduced ad-hoc reporting time by ~40%.",
    },
    {
        id: 3,
        title: "Customer Churn Prediction",
        category: "Predictive Analysis · Python · Excel",
        image: "/python_analysis.png",
        year: "2025",
        description: "Built an end-to-end churn analysis pipeline using Python and Excel. Applied EDA, feature engineering, and a logistic regression model achieving 82% prediction accuracy. Identified top 3 churn drivers enabling proactive retention strategies.",
    },
    {
        id: 4,
        title: "E-Commerce Performance Dashboard",
        category: "BI Dashboard · Power BI · Tableau",
        image: "/analytics_dashboard.png",
        year: "2025",
        description: "Created a cross-functional Power BI / Tableau dashboard tracking orders, inventory, customer segments, and profitability. Integrated data from multiple sources, visualized seasonal trends, and surfaced a 22% under-performing category.",
    }
];

export default function FeaturedProjects() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Animate Project Cards
            if (projectsRef.current) {
                const cards = projectsRef.current.children;
                gsap.fromTo(cards,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: projectsRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white w-full relative z-30">
            <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
                <div>
                    <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">Selected Projects</p>
                    <h2 className="text-5xl md:text-7xl font-bold italic font-serif tracking-tight">Featured<br />Projects</h2>
                </div>
                <button className="interactable mt-8 md:mt-0 group flex items-center gap-3 text-lg border-b border-white pb-1 hover:text-gray-300 transition-colors">
                    View All Work
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            <div ref={projectsRef} className="flex flex-col gap-16 md:gap-32">
                {projects.map((project, index) => (
                    <div key={project.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-col-reverse lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group interactable cursor-pointer`}>
                        <div className="w-full lg:w-3/5 overflow-hidden rounded-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                            />
                        </div>
                        <div className="w-full lg:w-2/5 flex flex-col justify-center">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-400 tracking-wider text-sm">{project.category}</span>
                                <span className="text-gray-500 font-serif italic">{project.year}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                            {(project as {description?: string}).description && (
                                <p className="text-gray-400 text-base mb-6 leading-relaxed max-w-sm">{(project as {description?: string}).description}</p>
                            )}
                            <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
