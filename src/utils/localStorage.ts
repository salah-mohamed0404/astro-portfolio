export function setStoredItem(key: string, value: any) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function getStoredItem(key: string) {
	const item = localStorage.getItem(key);
	return item ? JSON.parse(item) : null;
}

export function removeStoredItem(key: string) {
	localStorage.removeItem(key);
}
