package model

type Map struct {
	Longitude float64
	Latitude  float64
	Marker    bool
}

func NewMap(Longitude, Latitude float64, Marker bool) Map {
	return Map{
		Longitude: Longitude,
		Latitude:  Latitude,
		Marker:    Marker,
	}
}
