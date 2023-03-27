const username = ['ronel', 'kikay', 'wilford'];
const password = ['ronel12345', 'kikay23456', 'wilford34234']



function logIn() {
    
for (let i = 0; i < username.length; i++ ) {
    const name = username[i];
    const pword = password[i];
    
    var userInput = document.getElementById('logusername').value;
    var pwordInput = document.getElementById('logpass').value;
   
    if ((name.toLowerCase() === userInput.toLowerCase() ) && (pword.toLowerCase() === pwordInput.toLowerCase()))  {
        console.log('User Validated');  
        window.location = 'agentPage.html';   
        break;
    } else {
        console.log('Invalid User');
    }    
}
} 

/*

function logIn() {
    
    for (let i = 0; i < username.length; i++ ) {
        const name = username[i];
        const pword = password[i];
        
        var userInput = document.getElementById('username').value;
        var pwordInput = document.getElementById('password').value;
        
        if (name.toLowerCase() === userInput.toLowerCase() )  {
            if (true) {
                console.log('Username Validated');
                continue;
            } else {
                console.log('Username invalid');
                break;
            }
                    
            
        } else if(pword.toLowerCase() === pwordInput.toLowerCase()){
            if (true) {
                console.log('Password Validated');
                continue;
            } else {
                console.log('Password invalid');
                break;
            }
        }    
    }
    } 

    */






    

