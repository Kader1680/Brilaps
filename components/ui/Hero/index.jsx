import NavLink from "../NavLink"

const Hero = () => (
    <>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-gray-200">
            {/* Content */}
            <div className="relative custom-screen py-28">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold mx-auto sm:text-6xl">
                        Grow Your Business With a Custom Website
                    </h1>
                    <p className="max-w-xl mx-auto">
                        Brilaps making it simple for you to build and grow your SaaS applications, or any business idea.
                    </p>
                    <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                        <NavLink
                            href="/get-started"
                            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                        >
                            Get a Free Consultation
                        </NavLink>
                        <NavLink
                            href="#cta"
                            className="text-gray-800 bg-white/90 border hover:bg-white"
                            scroll={false}
                        >
                            See Examples
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>

        {/* Separate Video Section */}
        <section className="relative w-full">
            <video
                className="w-full h-auto object-cover"
                src="/vediohero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
        </section>
    </>
)

export default Hero
