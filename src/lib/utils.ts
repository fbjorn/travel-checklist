import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(isoString: string): string {
	const date = new Date(isoString);
	return date.toLocaleDateString(undefined, { 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric' 
	});
}
