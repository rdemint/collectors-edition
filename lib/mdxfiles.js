import fs from 'fs'
import path from 'path'
//const fs = require("fs")
//const path = require("path")
import matter from "gray-matter"

const root = process.cwd()

export function getFiles(dataFolder) {
    let fileData = [];
    const files = fs.readdirSync(path.join(root, 'data', dataFolder));

    if (files) {
        files.forEach(
            (file) => {
                if (path.extname(file) == '.mdx') {
                    const source = fs.readFileSync(path.join(root, 'data', dataFolder, `${file}`),
                        { encoding: "utf-8" }
                    )
                    const { content, data } = matter(source)
                    fileData.push({ ...data })
                }
            }
        )
        return fileData
    } else {
        return null
    }

}

export function getPaths(dataFolder) {
    let slugs = [];

    const files = fs.readdirSync(path.join(root, 'data', dataFolder));
    if (files) {
        files.forEach((file) => {
            if (path.extname(file) == ".mdx") {
                slugs.push({ params: { slug: file.replace(".mdx", "") } });
            }
        });
        return slugs;
    } else {
        return null;
    }
};

export function getFileData(dataFolder, fileName) {
    const data = fs.readFileSync(path.join(root, 'data', dataFolder, `${fileName}.mdx`), {
        encoding: "utf-8",
    });
    if (data) {
        return data;
    } else {
        return null;
    }
}
