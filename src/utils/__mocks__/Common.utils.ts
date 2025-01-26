import { vitest } from "vitest";

export const loadImage = vitest.fn(() => Promise.resolve("Image Loaded"));
export const wait = vitest.fn(() => Promise.resolve("wait Loaded"));

export default { loadImage, wait };
