package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	gin "github.com/gin-gonic/gin"
)

var db = make(map[string]string)

func setupRouter() *gin.Engine {
	// Disable Console Color
	// gin.DisableConsoleColor()
	router := gin.New()

	router.LoadHTMLGlob("dist/*")
	router.Static("/dist", "../dist")
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	v1 := router.Group("/")
	{
		v1.GET("/", func(c *gin.Context) {
			c.HTML(http.StatusOK, "index.html", gin.H{
				"title": "Home",
			})
		})

		v1.GET("/login", func(c *gin.Context) {
			c.HTML(http.StatusOK, "index.html", gin.H{
				"title": "Login",
			})
		})
	}
	router.NoRoute(func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Error website",
		})
	})
	return router
}

func main() {
	r := setupRouter()
	log.Println("asdasd", filepath.Join(os.Getenv("dist"), ""))
	// Listen and Server in 0.0.0.0:8080
	r.Run(":3001")

	// http.Handle("/", new(testHandler))

	// http.ListenAndServe(":5000", nil)
}
