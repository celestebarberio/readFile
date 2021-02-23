const fs= require ("fs")
console.log("ciao")
for (let i=0; i<15; i++){
    const testo= fs.readFileSync("./testo.txt", "utf8")
    console.log(JSON.parse(testo));

}
console.log("mare")