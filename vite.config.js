import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

function copyComponents() {
    return {
        name: "copy-components",

        closeBundle() {
            const source = resolve(__dirname, "src/components");
            const destination = resolve(__dirname, "dist/src/components");

            fs.cpSync(source, destination, {
                recursive: true,
            });
        },
    };
}

export default defineConfig({
    plugins: [
        tailwindcss(),
        copyComponents(),
    ],

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                blog: resolve(__dirname, "blog.html"),
                contact: resolve(__dirname, "contact.html"),
            },
        },
    },
});