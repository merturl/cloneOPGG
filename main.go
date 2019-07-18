package main

import (
	api "github.com/cloneOPGG/pkg/api"
	"github.com/cloneOPGG/pkg/database"
	"github.com/cloneOPGG/pkg/middlewares"
	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	r := api.InitRouter()
	db, _ := database.Initialize()

	r.Use(gin.Logger())
	r.Use(gin.Recovery())
	r.Use(database.Inject(db))
	r.Use(middlewares.JWTMiddleware())
	api.ApplyRoutes(r)
	// Listen and Server in 0.0.0.0:8080
	r.Run(":3001")

	// http.Handle("/", new(testHandler))

	// http.ListenAndServe(":5000", nil)
}
