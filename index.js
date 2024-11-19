const http = require("http");

const server = http.createServer((req, res) => {

    const { method, url } = req;
    res.setHeader("Content-Type", "application/json");

    switch (method){
        case "POST":
            if (url === "/"){
                let body = ""
                req.on("data", (chunk) => {
                    body += chunk.toString();
                })
                
                req.on("end", () => {
                    res.statusCode = 200;
                    res.end(
                        JSON.stringify({
                            message: JSON.parse(body),
                            date: Date.now().toString()
                        })
                    )
                })
            }
            break;
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
})