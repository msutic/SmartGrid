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




        public IActionResult Index()
        {
            return View();
        }
    }
}
