function setPostData(userInput: string, category: 'images' | 'videos') {
  let postData;

  if (!userInput) {
    postData = {
      mediaType: category,
    };
  } else {
    const isTransactionId = userInput.trim().length === 43;

    if (isTransactionId) {
      postData = {
        mediaType: category,
        transactionId: userInput.trim(),
      };
    } else {
      postData = {
        mediaType: category,
        searchString: userInput.trim(),
      };
    }
  }

  return postData;
}

export default setPostData;
