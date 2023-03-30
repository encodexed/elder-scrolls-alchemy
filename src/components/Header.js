export default function Header() {
	return (
		// <header className="h-16 shadow-lg shadow-black/4">
		//    <h1 className="text-xl">Header Goes Here...</h1>
		// </header>

		<nav class='relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600'>
			<div class='flex w-full flex-wrap items-center justify-between px-6'>
				<div>
					<a
						class='text-xl text-neutral-800 dark:text-neutral-200'
						href='/'
					>
						ES Alchemy Calculator
					</a>
				</div>
			</div>
		</nav>
	);
}
