package model

type User struct {
	Name           string `json:"name"`
	Age            int    `json:"age"`
	Email          string `json:"email"`
	Password       string `json:"password"`
	Avatar         string `json:"avatar"`
	StartingBudget int    `json:"budget"`
}

func NewUser(Name, Email, Password, Avatar string, Age, StartingBudget int) User {
	return User{
		Name:           Name,
		Age:            Age,
		Email:          Email,
		Password:       Password,
		Avatar:         Avatar,
		StartingBudget: StartingBudget,
	}
}

func EmptyUser() *User {
	return &User{}
}
