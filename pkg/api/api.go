package api

import (
	"net/http"

	"github.com/cloneOPGG/pkg/api/auth"
	"github.com/cloneOPGG/pkg/middlewares"
	"github.com/gin-gonic/gin"
)

// ApplyRoutes applies router to gin Router
func ApplyRoutes(r *gin.Engine) {
	r.GET("/", middlewares.Authorized, func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Home",
		})
	})

	r.GET("/login", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Login",
		})
	})

	r.GET("/search", middlewares.Authorized, func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Search",
		})
	})

	r.NoRoute(func(c *gin.Context) {
		c.HTML(http.StatusNotFound, "index.html", gin.H{
			"title": "Error website",
		})
	})
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

	return apiServer
}
