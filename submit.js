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

            if (data.status === 200) {
                var answer = window.confirm("Click On OK To Copy The Code And Paste The Code In Superchat Message");
                if (answer) {
                    var copyText = data.code
                    copyToClipboard(copyText)
                } else {
                    alert("Copy Canceled !");
                }
            } else {
                alert(data.result);
            }

        })

}



function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
