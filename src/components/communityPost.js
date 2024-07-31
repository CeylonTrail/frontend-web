export default () => {
    const posts = [
        {
            title: "What is SaaS? Software as a Service Explained",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature...",
            imgs: [
                "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            ],
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "Sidi dev",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "What is SaaS? Software as a Service Explained",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature...",
            imgs: [
                "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            ],
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "Sidi dev",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "What is SaaS? Software as a Service Explained",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature...",
            imgs: [
                "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            ],
            authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            authorName: "Sidi dev",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        // Other posts...
    ];

    return (
        <section className="  mx-auto  max-w-screen-md md:px-8">
            <div className=" gap-2">
                {posts.map((item, key) => (
                    <article className="w-full mx-auto mt-4 shadow-lg rounded-md duration-300 hover:shadow-sm p-4 bg-white" key={key}>
                        <a href={item.href}>
                            <div className="flex items-center mt-2 ml-4 mr-2">
                                <div className="flex-none w-10 h-10 rounded-full">
                                    <img src={item.authorLogo} className="w-full h-full rounded-full" alt={item.authorName} />
                                </div>
                                <div className="ml-3">
                                    <span className="block text-gray-900">{item.authorName}</span>
                                    <span className="block text-gray-400 text-sm">{item.date}</span>
                                </div>
                            </div>
                            <div className="pt-3 ml-4 mr-2 mb-3">
                                {/* <h3 className="text-xl text-gray-900">
                                    {item.title}
                                </h3> */}
                                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 ml-4 mr-2">
                                {item.imgs.slice(0, 2).map((img, imgKey) => (
                                    <img key={imgKey} src={img} loading="lazy" alt={item.title} className="w-full h-48 rounded" />
                                ))}
                                {item.imgs.length > 2 && (
                                    <div className="relative w-full h-48 rounded bg-gray-200 flex items-center justify-center text-xl text-gray-700">
                                        +{item.imgs.length - 2}
                                    </div>
                                )}
                            </div>
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};
