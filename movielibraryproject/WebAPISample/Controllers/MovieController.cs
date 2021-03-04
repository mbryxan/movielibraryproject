using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get(string movie)
        {
            // Retrieve all movies from db logic
            var movies = _context.Movies.ToList(); //added
            return Ok(movies); //added
            ;
            //return Ok(new string[] { "movie1 string", "movie2 string" }); --commented out, oc
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            return Ok(movie);
        }
            // Retrieve movie by id from db logic
            // return Ok(movie);
            //return Ok(); -- commented out, oc
        

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie movie) //changed from Movie value
        {
            _context.Movies.Add(movie);
            _context.SaveChanges();
            // Create movie in db logic
            return Ok();
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put(int id, [FromBody] Movie movie) //added parameter int id
        {
            var movieInDb = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            movieInDb.MovieId = movie.MovieId;
            movieInDb.Title = movie.Title;
            movieInDb.Director = movie.Director;
            movieInDb.Genre = movie.Genre;
            // Update movie in db logic
            return Ok();
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            var deleteMovies = _context.Movies.Where(m => m.MovieId == id).Single();
            return Ok();
        }
    }
}