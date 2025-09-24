import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Grow Your Business With a Custom Website
                </h1>
                <p className="max-w-xl mx-auto">
                    Brilaps making it simple for you to build and grow your SaaS applications, or any business idea.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/get-started"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Get a Free Consultation
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        See Examples
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero