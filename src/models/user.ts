// User model based on the structure of github api at
// https://api.github.com/users/{username}

// Interface is like back when in C# you had to send an AJAX object to webmethod
// and in webmethod you had to typecast all arguments either inline (which was messy)
// or by creating a NEW type that was all of the object's properties in one and assigning
// that type (interface) to the webmethod argument type

// Interface doubles as a model (of course!)
export interface User {
	login: string;
	avatar_url: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
}