export async function handle(state, action) {
  const input = action.input;

  // basically receive the info for a new user and add them

  // check if email already registered
  if (input.function === 'createUser') {
    const users = state.users;
    const {fullName, email, walletAddress, password} = input;

    const emailAlreadyUsed = users.some(user => user.email === email);

    if (!emailAlreadyUsed) {
      state.users.push({fullName, email, walletAddress, password});
    }
  }
}
