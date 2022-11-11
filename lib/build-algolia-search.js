const algoliasearch = require('algoliasearch/lite')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const root = process.cwd()

function getFiles(dataFolder) {
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
                    const objectID = data.slug
                    fileData.push({ ...data, objectID })
                }
            }
        )
        return fileData
    } else {
        return null
    }

}


(async function () {
    dotenv.config()
    try {
        const dataFolders = ['docs', 'blog']
        let frontmatter = []
        dataFolders.map(
            (folder) => frontmatter.push(...getFiles(folder))
        )
        console.log(process.env.ALGOLIA_SEARCH_ADMIN_KEY)
//get data and send to algolia
        const client = algoliasearch(
            process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
            process.env.ALGOLIA_SEARCH_ADMIN_KEY
        )
        const index = client.initIndex('qms_data_index')
        const algoliaResponse = await index.saveObjects(frontmatter)
        console.log(`Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search.`)
    }
    catch (error) {
        console.log(error)
    }
})()