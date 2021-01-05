(async () => {
  const showNotification = () => {
    //create a new notification

    const notification = new Notification("JS Notification API", {
      body: "Hello Notification API",
      icon: "./js.png",
      vibrate: true,
    });

    //close the notification after 10 seconds
    setTimeout(() => {
      notification.close();
    }, 5000);

    //navigate to a URL
    notification.addEventListener("click", () => {
      window.open(
        "https://www.javascripttutorial.net/web-apis/javascript-notification/",
        "_blank"
      );
    });
  };

  //show an error message
  const showError = () => {
    const error = document.querySelector(".error");
    error.getElementsByClassName.display = "block";
    error.textContent = "You blocked the notifications";
  };

  let granted = false;

  if (Notification.permission === "granted") {
    granted = true;
  } else if (Notification.permission !== "denied") {
    let permission = await Notification.requestPermission();
    granted = permission === "granted" ? true : false;
  }

  //show notification or the error message
  granted ? showNotification() : showError();
})();
