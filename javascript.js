document.addEventListener("DOMContentLoaded", function() {
    var typedElement = document.querySelector(".text");
    var typed = new Typed(typedElement, {
      strings: ["web front-end developer", "web back-end developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  });
  // let btn=document.getElementById("sendmail");
  // btn.addEventListener("click",function(e){
  //   e.preventDefault();
  //   let name=document.getElementById("name").value;
  //   let subject=document.getElementById("subject").value;
  //   let email=document.getElementById("email").value;
  //   let message=document.getElementById("msg").value;
  //   let body=name+"\n"+subject+"\n"+email+"\n"+message;

  //   if(name=="")
  //   {
  //     Swal.fire({
  //       title: "Enter your name",
  //       icon: "info"
  //     });
  //     return;
  //   }
  //   else if(subject=="")
  //   {
  //     Swal.fire({
  //       title: "Enter subject",
  //       icon: "info"
  //     });
  //     return;
  //   }
  //   else if(email=="")
  //   {
  //     Swal.fire({
  //       title: "Enter your email",
  //       icon: "info"
  //     });
  //     return;
  //   }
  //   else if(message=="")
  //   {
  //     Swal.fire({
  //       title: "Write the purpose of message",
  //       icon: "info"
  //     });
  //     return;
  //   }
  //   else{
  //     Email.send({
  //       // Host : "smtp.elasticemail.com",
  //       // Username : "code.faiq786@gmail.com",
  //       // Password : "pyjwvkgizhisixsh",
  //       SecureToken : "13bf59-cea1-46d0-a692-33587212c241",
  //       To : 'code.faiq786@gmail.com',
  //       From : email,
  //       Subject : subject,
  //       Body : body
  //     }).then(
  //       message => {
  //         Swal.fire({
  //           title: "successful",
  //           text: "Your message is sended!",
  //           icon: "success"
  //         });
  //       }
  //     );
      
  //     // Swal.fire({
  //     //   title: name+"\n"+subject+"\n"+email+"\n"+message,
  //     //   icon: "info"
  //     // });
  //   }
  // });
