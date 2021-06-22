using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartGrid.Data;
using SmartGrid.Models;

namespace SmartGrid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly SmartGridContext _context;

        public UsersController(SmartGridContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            List<User> users = await _context.Users.ToListAsync();

            return users;
        }

        [HttpPost]
        [Route("authenticate")]
        public async Task<ActionResult<User>> Authenticate(string username,string password)
        {
            var user = _context.Users.Where(e => e.Username.Equals(username) && e.Password.Equals(password)).FirstOrDefault();
            return user;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [HttpPut]
        [Route("/api/Users/updateUser")]
        public async Task<IActionResult> UpdateUser(User user)
        {
            var userforchange = _context.Users.Where(e => e.Id == user.Id).FirstOrDefault();
            userforchange.Username = user.Username;
            userforchange.Name = user.Name;
            userforchange.LastName = user.LastName;
            userforchange.Email = user.Email;
            userforchange.Password = user.Password;
            userforchange.UserRole = user.UserRole;
            if(user.Address!=null)
            {
                userforchange.Address = user.Address;
            }
            if(user.BirthDate!=null)
            {
                userforchange.BirthDate = user.BirthDate;
            }

           

            _context.Entry(userforchange).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(user.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }


        public IActionResult Index()
        {
            return View();
        }
    }
}
