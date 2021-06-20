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
    [ApiController]
    [Route("api/[controller]")]
    public class ZahteviController : Controller
    {
        private readonly SmartGridContext _context;

        public ZahteviController(SmartGridContext context)
        {
            _context = context;
        }




        [HttpGet]
        public async Task<ActionResult<IEnumerable<Promenauloge>>> GetAllZahtevs()
        {
            List<Promenauloge> zahtevi = await _context.Zahtevi.ToListAsync();

            return zahtevi;
        }


        [HttpPost("/api/Zahtevi/addZahtev")]
        public async Task<ActionResult<Promenauloge>> AddZahtev(Promenauloge zahtev)
        {
            _context.Zahtevi.Add(zahtev);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [HttpDelete("/api/Zahtevi/approveZahtev/{id}")]
        public async Task<IActionResult> ApproveZahtev(int id)
        {
            var zahteve = await _context.Zahtevi.FindAsync(id);



            var olduser = _context.Users.Where(e => e.Id == zahteve.Idkorisnika).FirstOrDefault();
            olduser.UserRole = zahteve.Novauloga;
            _context.Entry(olduser).State = EntityState.Modified;

            if (zahteve == null) return NotFound();
            _context.Zahtevi.Remove(zahteve);
           
            
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("/api/Zahtevi/denyZahtev/{id}")]

        public async Task<IActionResult> DenyZahtev(int id)
        {
                var zahtev = await _context.Zahtevi.FindAsync(id);
                if (zahtev == null) return NotFound();
                _context.Zahtevi.Remove(zahtev);
                await _context.SaveChangesAsync();
                return NoContent();
        }





        public IActionResult Index()
        {
            return View();
        }
    }
}
