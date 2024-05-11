package store

import "root/model"

var JourneyList map[string][]model.Journey = map[string][]model.Journey{
	"Janko": {model.NewJourney(
		model.NewMap(13.49, 7, false),
		`Arrived in Koper in the afternoon.
			Checked into a cozy Airbnb apartment near the city center.
			Explored the old town area and enjoyed some local cuisine at a nearby restaurant.
			Took a leisurely stroll along the waterfront promenade, admiring the views of the Adriatic Sea.`,
		"Hotel Koper",
		"1234567891",
		"Koper",
		[]model.Activity{
			model.NewActivity("shoping", "Prada", "http://localhost:5000/images/prada.jpg", 4, 4),
			model.NewActivity("restourant", "Restaurant Gordon Ramsay", "http://localhost:5000/images/remsi.jpg", 5, 200),
		},
	)},
}

var User model.User = model.User{
	Name:           "Janko",
	Age:            21,
	Email:          "jankokondic84@gmail.com",
	Password:       "yes",
	Avatar:         "avatar.jpeg",
	StartingBudget: 700,
}

var ListOfActiviryInTown []model.Activity = []model.Activity{
	model.NewActivity("caffer bar", "Caffee Vanilla", "http://localhost:5000/images/vanila.jpg", 4, 5),
	model.NewActivity("caffer bar", "Kavarna Kapitanija", "http://localhost:5000/images/kapet.jpg", 3, 10),
	model.NewActivity("caffer bar", "Kavarna Cappuccino Kroštola", "http://localhost:5000/images/more.jpg", 5, 10),
	model.NewActivity("restourant", "Baščaršija (Koper Carpacciov trg)", "http://localhost:5000/images/bascarsija.jpeg", 5, 20),
}
