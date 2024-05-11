package store

import "root/model"

var JourneyList map[model.User]map[string]model.Journey = map[model.User]map[string]model.Journey{
	model.NewUser("Janko", "jankokondic84@gmail.com", "12345678", "avatar.jpg", 21): {
		"Koper": model.NewJourney(
			model.NewMap(13.49, 7, false),
			`Arrived in Koper in the afternoon.
			Checked into a cozy Airbnb apartment near the city center.
			Explored the old town area and enjoyed some local cuisine at a nearby restaurant.
			Took a leisurely stroll along the waterfront promenade, admiring the views of the Adriatic Sea.`,
			"Hotel Koper",
			"1234567891",
			[]model.Activity{
				model.NewActivity("shoping", "Prada", "http://localhost:5000/images/prada.jpg", 4, 4000),
				model.NewActivity("restourant", "Restaurant Gordon Ramsay", "http://localhost:5000/images/remsi.jpg", 5, 200),
			},
		),
		"Pariz": model.NewJourney(
			model.NewMap(13.49, 7, false),
			`Arrived in Koper in the afternoon.
			Checked into a cozy Airbnb apartment near the city center.
			Explored the old town area and enjoyed some local cuisine at a nearby restaurant.
			Took a leisurely stroll along the waterfront promenade, admiring the views of the Adriatic Sea.`,
			"Hotel Koper",
			"1234567891",
			[]model.Activity{},
		),
	}, model.NewUser("Anja", "@gmail.com", "124", "avatar.jpg", 23): {
		"Koper": model.NewJourney(
			model.NewMap(13.49, 7, false),
			`Arrived in Koper in the afternoon.
			Checked into a cozy Airbnb apartment near the city center.
			Explored the old town area and enjoyed some local cuisine at a nearby restaurant.
			Took a leisurely stroll along the waterfront promenade, admiring the views of the Adriatic Sea.`,
			"Hotel Koper",
			"1234567841",
			[]model.Activity{},
		),
	}, model.NewUser("Cool", "@hotmail.com", "as", "avatar3.jpg", 23): nil,
}
