
    //Radio ; select "Other" will show textbox.
    function show() { document.getElementById('area').style.display = 'block'; }
    function hide() { document.getElementById('area').style.display = 'none'; }
//function show() {
    //area.hidden = !area.hidden;
//}

//

//The functions checks if the passwords are the same for validation.

var check = function () { //אם הססמאות תואמות
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'passwords match';
        document.getElementById('button-3').disabled = false;
    } else { //אם הססמאות לא תואמות
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'passowrds dont match';
        document.getElementById('button-3').disabled = true;
    }
}
    //



    //function BtnFunction() {          כן אפשר להשתמש בפונקציה הזאת אך המשתמש יכול שלא למלא כלום בתיבות טקסט וללחוץ על שליחה
    //    alert("תודה שנרשמת!");
    //}



//מוריד קובץ טקסט 
//בתוך הקובץ - נתונים של השדות טקסט
let saveFile = () => {

    // Get the data from each element on the form.
    const Fname = document.getElementById('fname');
    const Lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const country = document.getElementById('confirm_password');
    const msg = document.getElementById('phonenumber');

    // This variable stores all the data.
    let data =
        '\r Name: ' + Fname.value + ' \r\n ' +
        'Last name: ' + Lname.value + ' \r\n ' +
        'Email: ' + email.value + ' \r\n ' +
        'confirm_password: ' + confirm_password.value + ' \r\n ' +
        'phonenumber: ' + phonenumber.value;

    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}

