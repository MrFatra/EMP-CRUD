'use client'
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon, InstagramIcon } from "@/components/Icons";
import { FaArrowRight } from 'react-icons/fa6'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="max-w-lg justify-center px-5">
				<h1 className={title({ color: "cyan" })}>Heloo!</h1>
				<h1 className={title()}>Welcome to my project!</h1>
				<p className="my-5 text-xl text-center font-medium">This project is built with a Next.js starter with TypeScript and Tailwind CSS + NextUI Template.</p>
				<p className="mb-10 text-medium font-medium">I'd love it if you'd join me in completing or collaborating on this project.</p>
				<p className="text-center">Please grab this button & checkout my Github or Instagram profile!😉</p>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.instagram}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					<InstagramIcon size={26} />
					Instagram
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
				<Link
					className={buttonStyles({ variant: "bordered", radius: "full", color: 'primary' })}
					href={'/employees'}
				>
					Employees
					<FaArrowRight/>
				</Link>
			</div>

			<div className="text-center mt-10 text-foreground-500">
				<p>Email me at: </p>
				<p>{siteConfig.links.email}</p>
			</div>
		</section>
	);
}
