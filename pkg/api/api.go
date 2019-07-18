package api

import (
	"net/http"

	"github.com/cloneOPGG/pkg/api/auth"
	"github.com/cloneOPGG/pkg/middlewares"
	"github.com/gin-gonic/gin"
)

// ApplyRoutes applies router to gin Router
func ApplyRoutes(r *gin.Engine) {

	api := r.Group("/api")
	{
		auth.ApplyRoutes(api)
	}
}

// InitRouter return Router
func InitRouter() *gin.Engine {
	apiServer := gin.New()
	apiServer.LoadHTMLGlob("src/views/*")
	apiServer.Static("/assets", "assets")

	apiServer.GET("/", middlewares.Authorized, func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Home",
		})
	})

	apiServer.GET("/login", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Login",
		})
	})

	apiServer.GET("/search", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Search",
		})
	})

	apiServer.NoRoute(func(c *gin.Context) {
		c.HTML(http.StatusNotFound, "index.html", gin.H{
			"title": "Error website",
		})
	})

	return apiServer
}
