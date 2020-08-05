$(document).ready(function () {
    console.log("ready!");
    $("#errormsg").hide()
    $("#loginform").submit(function (event) {
        event.preventDefault();
        ajaxPost();
    })
});


function ajaxPost() {

    let formData = {
        username: $("#username").val(),
        pw: $("#pw").val()
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location + "user/api/login",
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (user) {
            if (user.ok == true) {
                console.log("login success")
                $("#loginform").removeClass("fail");
                $("#loginform").removeClass("success");
                $("#errormsg").hide()
            } else {
                console.log("login fail")
                $("#loginform").removeClass("success");
                $("#loginform").removeClass("fail");
                $("#errormsg").show()
            }
            $("#postResultDiv").html("<p>" + "Post Successful! </br>" + "Username: " + user.username + "</br>" +
                "Password: " + user.pw + "</br>" + "Valid User:" + user.ok + "</p>")
        },
        error: function (e) {
            alert("Error!")
            console.log("ERROR ", e);
        }
    });
    resetData();
}

function resetData() {
    $("#username").val('')
    $("#pw").val('')

}