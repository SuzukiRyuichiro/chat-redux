// TODO: add and export your own actions
export function setMessages(messages) {
  return {
    type: 'SET_MESSAGES',
    payload: messages
  }
}

export function sendMessage(channel, author, content) {
  sendApiRequest(channel, author, content);
  setTimeout(function(){document.querySelector('.message-list').scrollIntoView({block: "end", behavior: "smooth"})}, 1500);
  return {
    type: 'SEND_MESSAGE',
    payload: { author: author, content: content, key: content }
  }
}

const sendApiRequest = (channel, author, content) => {
  const body = { author: author, content: content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
}

export function setChannels(channels){
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}
