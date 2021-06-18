using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SmartGrid.Data;
using SmartGrid.Models;

namespace SmartGrid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PotrosaciController : Controller
    {
        private readonly SmartGridContext _context;

        public PotrosaciController(SmartGridContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("/api/Potrosaci/addPotrosac")]
        public async Task<ActionResult<Potrosac>> addPotrosac(Potrosac potrosac)
        {
            Lokacija l = new Lokacija();
            l.Ulica = potrosac.Ulica;
            l.Grad = potrosac.Grad;
            potrosac.Prioritet = getPriority(l);
            _context.Potrosaci.Add(potrosac);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        public int getPriority(Lokacija lok)
        {
            var prioritet = _context.PrioritetiLokacija.Where(e => e.Ulica.Equals(lok.Ulica) && e.Grad.Equals(lok.Grad)).ToList();
            if (prioritet.Count == 0)
            {
                return 1;
            }
            else
            {
                return prioritet[0].Prioritet;
            }
        }



        public IActionResult Index()
        {
            return View();
        }
    }
}
