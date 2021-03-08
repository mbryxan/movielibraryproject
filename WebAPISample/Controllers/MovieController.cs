﻿using System;
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

            var movies = _context.Movies.ToList();
            // Retrieve all movies from db logic
            return Ok(movies);
            //return Ok(new string[] { "movie1 stringfffff", "movie2 string" });
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();

            // Retrieve movie by id from db logic
            // return Ok(movie);

            return Ok(movie);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            var createMovie = _context.Movies;
            _context.Movies.Add(value);
            _context.SaveChanges();
            return Ok();
        }

        // PUT api/movie/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Movie movie) //added parameter int id
        {
            var movieInDb = _context.Movies.Where(m => m.MovieId == id).SingleOrDefault();
            movieInDb.Title = movie.Title;
            movieInDb.Director = movie.Director;
            movieInDb.Genre = movie.Genre;
            // Update movie in db logic
            //Hint:go back to superhero and mimic update
            _context.Movies.Update(movieInDb);
            _context.SaveChanges();
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