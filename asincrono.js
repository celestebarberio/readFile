const fs= require ("fs")

console.log("ciao")
  fs.readFile("./testo.txt","utf8", (err, data) => {
      if (err)
          console.log(err);
      console.log(JSON.parse(data));
  });

console.log("mare")




