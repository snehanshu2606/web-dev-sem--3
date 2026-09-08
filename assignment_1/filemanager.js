const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");

fs.writeFile(fileName, "Hello Node.js", function (err) {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File Created");

    console.log("Reading File...");

    fs.readFile(fileName, "utf8", function (err, data) {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File Content:", data);

        console.log("Updating File...");

        fs.appendFile(
            fileName,
            "\nLearning Node.js Module",
            function (err) {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("File Updated");

                fs.readFile(fileName, "utf8", function (err, updatedData) {

                    if (err) {
                        console.log("Error reading updated file:", err.message);
                        return;
                    }

                    console.log("Updated Content:");
                    console.log(updatedData);

                    console.log("Deleting File...");

                    fs.unlink(fileName, function (err) {

                        if (err) {
                            console.log("Error deleting file:", err.message);
                            return;
                        }

                        console.log("File Deleted");
                    });
                });
            }
        );
    });
});