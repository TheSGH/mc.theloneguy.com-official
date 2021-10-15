function submit() {

    var fname = document.getElementById('name').value
    var fmessage = document.getElementById('message').value
    var famount = document.getElementById('amount').value

    fetch("https://mc-backend-sgh.herokuapp.com/generate/code", {

        method: 'post',
        body: JSON.stringify({
            code: famount,
            message: fmessage,
            username: fname
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "sghmanauthheaderss": "2nG+N[3hx#7}ysf4=AF-?Si5Z.!%,6KuDvkTW*8r|m]Qa{$@XUz8tHR}KA[f7Q{5dJ!PB)wE96mFT2~bnD%iXj*khUe-@&4$p3],"
        }

    })
        .then(function (response) {

            return response.json();

        }).then(function (data) {

            //console.log(data.status)

            if (data.status === 200) {
                //console.log(data);

                var answer = window.confirm("Click On OK To Copy The Code And Paste The Code In Superchat Message");
                if (answer) {
                    //some code
                    var copyText = data.code

                    copyToClipboard(copyText)

                } else {

                    alert("Copy Canceled !");

                }


                // alert(data.code);
            } else {
                //console.log(data);
                alert(data.result);
            }

        })

}



function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}





// function getdata(username, message, slno) {

//     var fname = document.getElementById('fname')
//     var fmessage = document.getElementById('message')
//     var famount = document.getElementById('amount')


//     fetch("https://jsonplaceholder.typicode.com/todos/1", {

//         method: 'post',
//         body: JSON.stringify({
//             code: famount,
//             message: fmessage,
//             username: fname
//         })
//       headers: {




//         }

//     }
// }