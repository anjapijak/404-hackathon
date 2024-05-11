package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"root/helper"
	"root/model"
	"root/store"
)

func CorsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /images/{path}", Get)
	mux.HandleFunc("POST /journey/create", PostNewJourney)
	mux.HandleFunc("PUT /journey/update/activity", PutUpdateActivity)
	mux.HandleFunc("PUT /journey/update/image", PutUpdateImage)

	mux.HandleFunc("GET /user", GetUserData)
	mux.HandleFunc("POST /user/new", CreateNewAccount)
	mux.HandleFunc("POST /user/chek", PrintUser)
	mux.HandleFunc("GET /user/info", GetUserInfo)

	handler := CorsMiddleware(mux)
	http.ListenAndServe(":5000", handler)
}

func Get(w http.ResponseWriter, r *http.Request) {
	path := r.PathValue("path")

	file, err := os.Open(fmt.Sprintf("./images/%s", path))
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	defer file.Close()

	io.Copy(w, file)
}

func PutUpdateActivity(w http.ResponseWriter, r *http.Request) {
	resive := struct {
		model.Activity `json:"activity"`
		ID             string `json:"journeyID"`
		model.User     `json:"user"`
	}{}

	if err := json.NewDecoder(r.Body).Decode(&resive); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	currentJourney := store.JourneyList[resive.User][resive.ID]

	currentJourney.Activity = append(currentJourney.Activity, resive.Activity)
}

func PutUpdateImage(w http.ResponseWriter, r *http.Request) {
	currentJourney := model.EmptyJourney()

	//load image
	pathImage := ""

	if err := json.NewDecoder(r.Body).Decode(&currentJourney); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	currentJourney.AppendImage(pathImage)
}

func PostNewJourney(w http.ResponseWriter, r *http.Request) {
	resive := struct {
		model.User    `json:"user"`
		model.Journey `json:"journey"`
	}{}

	if err := json.NewDecoder(r.Body).Decode(&resive); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	//create new ID
	resive.Journey.ID = helper.GenerateID()

	currentJourney, ok := store.JourneyList[resive.User]
	if !ok {
		http.Error(w, errors.New("user not exst jet").Error(), http.StatusBadRequest)
		return
	}

	currentJourney[resive.ID] = resive.Journey

	//save in the file
}

func CreateNewAccount(w http.ResponseWriter, r *http.Request) {
	newUser := model.EmptyUser()

	if err := json.NewDecoder(r.Body).Decode(newUser); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	store.JourneyList[*newUser] = make(map[string]model.Journey)

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("User Created:D"))
}

func PrintUser(w http.ResponseWriter, r *http.Request) {
	newUser := model.EmptyUser()
	if err := json.NewDecoder(r.Body).Decode(&newUser); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// fmt.Println(newUser)

	// if _, ok := store.JourneyList[*newUser]; ok {
	// 	fmt.Println(ok)
	// }
}

func GetUserData(w http.ResponseWriter, r *http.Request) {
	data, err := json.Marshal(store.JourneyList[model.NewUser("Janko", "jankokondic84@gmail.com", "12345678", "avatar.jpg", 21)])
	if err != nil {
		log.Println(err)
	}

	w.Write(data)
}

func GetUserInfo(w http.ResponseWriter, r *http.Request) {
	data, err := json.Marshal(model.NewUser("Janko", "jankokondic84@gmail.com", "12345678", "avatar.jpeg", 21))
	if err != nil {
		log.Println(err)
	}

	w.Write(data)
}
