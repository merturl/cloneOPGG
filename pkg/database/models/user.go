package models

import (
	"github.com/jinzhu/gorm"
)

//JSON container
type JSON = map[string]interface{}

//User information
type User struct {
	gorm.Model
	Username     string
	PasswordHash string
}

//Serialize func is make serialize
func (u *User) Serialize() JSON {
	return JSON{
		"id":       u.ID,
		"username": u.Username,
	}
}

func (u *User) Read(m JSON) {
	u.ID = uint(m["id"].(float64))
	u.Username = m["username"].(string)
}
