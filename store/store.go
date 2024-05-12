package store

import "root/model"

var JourneyList []model.Journey = []model.Journey{
	model.NewJourney(
		model.NewMap(13.7304781, 45.5479864, false),
		`Arrived in Koper in the afternoon.
			Checked into a cozy Airbnb apartment near the city center.
			Explored the old town area and enjoyed some local cuisine at a nearby restaurant.
			Took a leisurely stroll along the waterfront promenade, admiring the views of the Adriatic Sea.`,
		"Hotel Koper",
		"1234567891",
		"Koper",
		[]model.Activity{
			model.NewActivity("caffer bar", "Caffee Vanilla", "http://localhost:5000/images/vanila.jpg", 4, 4),
			model.NewActivity("restaurant", "Baščaršija (Koper Carpacciov trg)", "http://localhost:5000/images/bascarsija.jpeg", 5, 200),
		},
	), model.NewJourney(
		model.NewMap(135.777, 34.597, false),
		`    Arrived in Kyoto in the morning after a long flight.
		Checked into a traditional ryokan in the heart of the city.
		Explored the nearby streets and marveled at the beautiful temples and shrines.
		Enjoyed a delicious lunch of sushi and sashimi at a local restaurant.
		Took a leisurely walk through the Gion district, hoping to catch a glimpse of a geisha.`,
		"Hotel Tokyo",
		"6712830912",
		"Kyoto",
		[]model.Activity{
			model.NewActivity("shopping", "Prada", "http://localhost:5000/images/prada.jpg", 4, 4),
			model.NewActivity("restaurant", "Premium Pound Gion", "http://localhost:5000/images/tokiores.jpg", 5, 200),
		},
	),
	model.NewJourney(
		model.NewMap(2.54003389, 48.756748, false),
		`Arrived in Kyoto in the morning after a long flight.
		Checked into a traditional ryokan in the heart of the city.
		Explored the nearby streets and marveled at the beautiful temples and shrines.
		Enjoyed a delicious lunch of sushi and sashimi at a local restaurant.
		Took a leisurely walk through the Gion district, hoping to catch a glimpse of a geisha.`,
		"Hotel Paris",
		"6712830912",
		"Paris",
		[]model.Activity{
			model.NewActivity("shopping", "JR Kyoto Station", "http://localhost:5000/images/resta.jpg", 4, 250),
			model.NewActivity("restaurant", "Le Paris Paris", "http://localhost:5000/images/restoranparis.jpg", 5, 90),
		},
	),
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
	model.NewActivity("restaurant", "Baščaršija (Koper Carpacciov trg)", "http://localhost:5000/images/bascarsija.jpeg", 5, 20),
}
