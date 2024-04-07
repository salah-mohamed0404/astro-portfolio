import { atom } from "nanostores";

const isOpen = atom(window.innerWidth > 640);

export const navBarIsOpen = isOpen.get();
export const openNavBar = () => isOpen.set(true);
export const closeNavBar = () => isOpen.set(false);
