const fs= require("fs")
const path=require("path")

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};


function organizeFn(dirpath) {
    let destpath
    if (dirpath == undefined) {
        console.log('please enter a valid direcctory path')
        return;
    }
    else {
        let doesExist = fs.existsSync(dirpath)
        if (doesExist == true) {
            destpath = path.join(dirpath, "organisedFiles")
        }
        if (fs.existsSync(destpath) == false) {
            fs.mkdirSync(destpath)
        }
        else {
            console.log('folder already exist')
        }
    }
    organiserHelper(dirpath, destpath);

}

function organiserHelper(src, dest) {
    let childNames = fs.readdirSync(src)
    console.log(childNames)
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]) //path is identified for all children
        let checkforfile = fs.lstatSync(childAddress).isFile()
        //  console.log(childAddress+" "+ checkforfile)

        if (checkforfile == true) {
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i] + " belongs to " + fileCategory)

            sendfiles(childAddress, dest, fileCategory)
        }
    }
}

function getCategory(filename) {
    let ext = path.extname(filename)
    ext = ext.slice(1)
    //  console.log(ext)


    for (let type in types) {
        let cTypeArr = types[type]

        for (let i = 0; i < cTypeArr.length; i++) {
            if (ext == cTypeArr[i]) {
                return type;
            }
        }
    }
    return 'others';
}

function sendfiles(srcFilePath, dest, fileCategory) {
    let catpath = path.join(dest, fileCategory)  // here we are making category path to create folders

    if (fs.existsSync(catpath) == false) {
        //check for if the category folder already exists   
        fs.mkdirSync(catpath)
    }

    let fileName = path.basename(srcFilePath)//we took out the name of the file
    let destpath = path.join(catpath, fileName)//here we created a path for the files with their specific category

    fs.copyFileSync(srcFilePath, destpath)

    fs.unlinkSync(srcFilePath)
    console.log(fileName + ' Copied to ' + fileCategory)
}
module.exports={
    organizeFnkey: organizeFn
}