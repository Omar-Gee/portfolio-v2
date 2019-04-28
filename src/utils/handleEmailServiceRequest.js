export default (data, setFormResponse) => {
  // Construct an HTTP request
    const xhr = new XMLHttpRequest()
    xhr.open("Post", "https://v6vrlgsk32.execute-api.us-east-1.amazonaws.com/dev/mailService", true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8")
    // Send the collected data as JSON
    xhr.send(JSON.stringify(data))

    xhr.onloadend = response => {
      const status = response.target.status;
      if (status === 200) {
        setFormResponse('Thank you for contacting me. I will get back to you shortly.')
      } else {
        setFormResponse('Oops! Something went wrong.')
      }
    }
}