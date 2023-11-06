function setPostData(userInput: string, category: 'images' | 'videos') {
  let postData;

  if (!userInput) {
    postData = {
      gateway: '',
      mediaType: category,
    };
  } else {
    const isTransactionId = userInput.trim().length === 43;

    if (isTransactionId) {
      postData = {
        gateway: '',
        mediaType: category,
        transactionId: userInput.trim(),
      };
    } else {
      postData = {
        gateway: '',
        mediaType: category,
        searchString: userInput.trim(),
      };
    }
  }

  return postData;
}

export default setPostData;
