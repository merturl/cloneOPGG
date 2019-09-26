package models

import (
	"github.com/cloneOPGG/pkg/lib/common"
	"github.com/jinzhu/gorm"
)

//JSON container

//User information
type User struct {
	gorm.Model
	Username     string
	PasswordHash string
}

//Serialize func is make serialize
func (u *User) Serialize() common.JSON {
	return common.JSON{
		"id":       u.ID,
		"username": u.Username,
	}
}

func (u *User) Read(m common.JSON) {
	u.ID = uint(m["id"].(float64))
	u.Username = m["username"].(string)
}
