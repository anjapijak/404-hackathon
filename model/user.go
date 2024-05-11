package model

type User struct {
	Name     string `json:"name"`
	Age      uint   `json:"age"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Avatar   string `json:"avatar"`
}

func NewUser(Name, Email, Password, Avatar string, Age uint) User {
	return User{
		Name:     Name,
		Age:      Age,
		Email:    Email,
		Password: Password,
		Avatar:   Avatar,
	}
}

func EmptyUser() *User {
	return &User{}
}
