package model

import "time"

type Activity struct {
	Category    string    `json:"category"`
	Name        string    `json:"name"`
	ProfilImage string    `json:"profilImage"`
	Rating      uint8     `json:"rating"`
	MaxSpend    int       `json:"maxSpend"`
	Date        time.Time `json:"date"`
}

func NewActivity(Category, Name, ProfilImage string, Rating uint8, MaxSpend int) Activity {
	return Activity{
		Category:    Category,
		Name:        Name,
		ProfilImage: ProfilImage,
		Rating:      Rating,
		MaxSpend:    MaxSpend,
		Date:        time.Now(),
	}
}
