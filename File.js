const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
const path = require("path");
const FileMenu = () =>{
    console.log(" ****************** File Menu ******************")
    console.log("\n Press 1 :-  Create Directory")
    console.log("\n Press 2 :-  Remove Directory")
    console.log("\n Press 3 :-  Write File ")
    console.log("\n Press 4 :-  Read File ")
    console.log("\n Press 5 :-  Delete File")
    console.log("\n Press 6 :-  Append data to file")
    console.log("\n Press 7 :-  Update / Replace file with new data")
    console.log("\n Press 8 :-  Rename File")
    console.log("\n Press 9 :-  Exit")
    console.log("\n **********************************************")
    UserChoice();
}
const UserChoice = () =>{
    rl.question(`Enter The User Choice 1 To 9  :- `, function (answer) {
        var ch  = answer;
        FileOpreation(ch);
    });
}
const FileOpreation = (ch) => {
       if(ch == 1){
           CreateDirectory();
       }else if(ch == 2){
          RemoveDirectory()
       }else if(ch == 3){
          WriteFile();
       }else if(ch == 4){
           ReadFile();
       }else if(ch == 5){
           DeleteFile();
       }else if(ch == 6){
           AppendFile();
       }else if(ch == 7){
           ReplaceFileData()
       }else if(ch == 8){
           RenameFile();
       }else if(ch == 9){
           console.log("Exit");
           rl.close();
       }else{
           console.log("Wrong Choice ......");
           FileMenu();
       }
}
const CreateDirectory = () =>{
    console.log("Create Directory");
    rl.question(`Enter The Create Directroy Name :-  `, function (answer) {
        var ch  = answer;
        fs.mkdir(path.join(__dirname,ch) , (e) => {
            if(e){
                console.log("Error while creating Directroy..." ,e);
                rl.close();
            }else{
                console.log("Directory Created Successfully...");
                FileMenu();
            }
        });
    });
}
const RemoveDirectory = () =>{
    console.log("Remove Directory");
    rl.question(`Enter The Remove Directroy Name :-  `, function (answer) {
        var ch  = answer;
        fs.rmdir(ch , (e) => {
            if(e){
                console.log("Error while Remove Directroy..." ,e);
                rl.close();
            }else{
                console.log("Directory Remove Successfully...");
                FileMenu();
            }
        });
    });
}
const WriteFile = () =>{
    console.log("Write File");
    rl.question(`Enter The Create File Name :-  `, function (answer) {
        var fname  = answer+".txt";
        rl.question(`Enter The File Data  :-  `, function (answer1) {
            var fdata  = answer1;
            fs.writeFile(fname , fdata , (e) => {
                if(e){
                    console.log("Error while Create File..." ,e);
                    rl.close();
                }else{
                    console.log("File Create Successfully...");
                    FileMenu();
                }
            });
        });
    });
}
const ReadFile = () => {
    console.log("Read File");
    rl.question(`Enter The Read File Name :-  `, function (answer) {
        var fname  = answer+".txt";

        fs.readFile(fname , "utf8" , (e , data)=>  {
                if(e){
                    console.log("Error while  File Not Found..." ,e);
                    rl.close();
                }else{
                    console.log(`\n ${data}`);
                    FileMenu();
                }
            });

    });
}
const DeleteFile = () =>{
    console.log("Delete File");
    rl.question(`Enter The Delete File Name :-  `, function (answer) {
        var fname  = answer+".txt";

        fs.unlink(fname,(e)=>  {
            if(e){
                console.log("Error  File Not Found..." ,e);
                rl.close();
            }else{
                console.log("File Remove Successfully...");
                FileMenu();
            }
        });

    });
}
const AppendFile = () =>{
    console.log("Append data to file");
    rl.question(`Enter The Append File Name :-  `, function (answer) {
        var fname  = answer+".txt";
        rl.question(`Enter The Append  File Data  :-  `, function (answer1) {
            var fdata  = answer1;
            fs.appendFile(fname , fdata , (e) => {
                if(e){
                    console.log("Error File Not Found ..." ,e);
                    rl.close();
                }else{
                    console.log("File Data Append  Successfully...");
                    FileMenu();
                }
            });
        });
    });
}
const ReplaceFileData = () =>{
    console.log("Update / Replace file with new data");
    rl.question(`Enter The  File Name :-  `, function (answer) {
        var fname  = answer+".txt";
        rl.question(`Enter The File Data  :-  `, function (answer1) {
            var fdata  = answer1;
            fs.writeFile(fname , fdata , (e) => {
                if(e){
                    console.log("Error File Not Found ..." ,e);
                    rl.close();
                }else{
                    console.log("Update / Replace file with new data Successfully...");
                    FileMenu();
                }
            });
        });
    });
}
const RenameFile = () =>{
    console.log("Rename File");
    rl.question(`Enter The Old  File Name :-  `, function (answer) {
        var fname  = answer+".txt";
        rl.question(`Enter The New File Name  :-  `, function (answer1) {
            var fname2  = answer1+".txt";
            fs.rename(fname , fname2 , (e) => {
                if(e){
                    console.log("Error File Not Found ..." ,e);
                    rl.close();
                }else{
                    console.log("Rename File Successfully...");
                    FileMenu();
                }
            });
        });
    });
}

FileMenu();
