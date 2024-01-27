"use client";

import Link from "next/link";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="container mx-auto ">
			<div className="flex flex-col gap-3 justify-center items-center h-72">
				<h2 className="font-heading text-red-800 mb-10">{`Error : ${error.message}`}</h2>

				<div className="flex gap-8 ">
					<button onClick={() => reset()} className="btn-primary">
						Try Again
					</button>
					<Link href="/">
						<button className="btn-tertiary">Go Home</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
