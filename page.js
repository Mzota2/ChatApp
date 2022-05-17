const menu = document.getElementById('menu');
const menuItem = document.querySelector('.menu');
const image = document.getElementById('image');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page1 = document.getElementById('page1');


const profile = document.querySelector('.profile_container');
//chat box
const chatBox = document.getElementById('chatBox');
//constants of the form object
const submit = document.getElementById('submit');
const Name = document.getElementById('name');
const password = document.getElementById('password');

//password toggle
const togglePassword = document.getElementById('togglePassword');

//message and send button
const message = document.getElementById('textInput');
const send  = document.getElementById('send');

//constants of name and password
const userName = 'Eliza';
const myPassword = 'password';

menuItem.classList.add('hide');
page2.classList.add('hide')
page3.classList.add('hide')

const myMessages = [];



menu.addEventListener('click' , function(){
    menuItem.classList.toggle('hide');
  
})
menuItem.addEventListener('mouseleave' , function(){
    menuItem.classList.add('hide');
})
image.addEventListener('click', function(){
    page2.classList.remove('hide');
    page3.classList.add('hide')
    page1.classList.add('hide');
    page2.style.backgroundColor = '#e8e2e1';

    
})
submit.addEventListener('click' , function(e){
    e.preventDefault();
    checkCredentials();
});

function checkCredentials(e){
    if(password.value === myPassword && Name.value === userName){
        page2.classList.add('hide')
        page1.classList.add('hide');
        page3.classList.remove('hide');
        page3.classList.remove('main');
        //DOM element
        const nameP = document.createElement('p');
        nameP.textContent = Name.value;
        nameP.style.color='rgb(18, 18, 24)';
        nameP.classList.add('namePa');
        profile.appendChild(nameP);

        
    }else if(password.value === '' || Name.value ===''){
        alert('You have empty fields')
    }else if(Name.value !==userName){
        alert('You have entered the wrong user name')
    }else if(password.value !== myPassword){
        alert('You have entered the wrong password');
    }
}
send.addEventListener('click', function(e){
    e.preventDefault();
    sendMessage();
    message.value ='';
})

function sendMessage(){
    //showing time and name of sender
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    //creating a small div for eah message
    if(message.value !==''){
        //creating DOM elements
        const dropDown = document.createElement('i');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('messageStyle');                            
        myMessages.push(message);//messages pushed into an array;
        messageDiv.textContent = message.value +" "+ hour+":"+minutes;
        chatBox.appendChild(messageDiv);

        messageDiv.addEventListener('click' , function(){
            messageDiv.style.backgroundColor = 'green';
           
        })
        
       
        
    }
}

togglePassword.addEventListener('click', showPassword);
function showPassword(){
    if(password.type === 'password'){
        password.type ='text';
    }else{
    password.type ='password';
    }
}