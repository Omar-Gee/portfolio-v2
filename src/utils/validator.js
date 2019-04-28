const emailIsValid = (email) => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {key: "reply_to", valid: false, errorMessage: 'Please fill in a valid email address.'}
  }
  return {key: "reply_to", valid: true, errorMessage: ''};
}
const nameIsValid = (name) => {
  if (name === "") {
    return {key: "name", valid: false, errorMessage: 'Name cannot be blank.'};
  } else if (name.length < 2) {
    return {key: "name", valid: false, errorMessage: 'I have a hard time believing your name is one character long.'};
  } else if (/\d+/g.test(name)) {
    return {key: "name", valid: false, errorMessage: 'I can\'t remember the last time I saw a number in a name.'}
  }
  return {key: "name", valid: true, errorMessage: ''};
}
const messageIsValid = (message) => {
  if (message === "") {
    return {key: "message", valid: false, errorMessage: 'Message cannot be blank.'};
  } else if (message.length < 20) {
    return {key: "message", valid: false, errorMessage: 'Message has to be more than five complete words long.'};
  }
  return {key: "message", valid: true, errorMessage: ''};
}

export const validator = (name, reply_to, message) => {
  const errors = []
  errors.push(nameIsValid(name))
  errors.push(emailIsValid(reply_to))
  errors.push(messageIsValid(message))
  return errors;
}