$(document).ready(function() {

    $('#sendmail').click(function () {

      let name=$('#name').val();
      let subject=$('#subject').val();
      let email=$('#email').val();
      let message=$('#msg').val();

      $.ajax({
        url:"../SendEmail.php",
        type:"POST",
        data:{
            Name:name,
            Subject:subject,
            Email:email,
            Message:message
        },    
        success: function (response) {
          if (response === "Done") {
           new swal("Congrats!", "Your request has been sent successfully!", "success");
           $('#name').val("");
           $('#subject').val("");
           $('#email').val("");
           $('#msg').val("");
          } else {
            alert(response);
          }
        }
      });
    });
  });