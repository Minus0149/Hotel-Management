"use client";

export default function Error({
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

				<button onClick={() => reset()} className="btn-primary">
					Try Again
				</button>
			</div>
		</div>
	);
}
