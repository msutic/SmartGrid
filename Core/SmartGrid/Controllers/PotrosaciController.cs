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
    public class PotrosaciController : Controller
    {
        private readonly SmartGridContext _context;

        public PotrosaciController(SmartGridContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Potrosac>> GetPotrosac(int id)
        {
            var potrosac = await _context.Potrosaci.FindAsync(id);

            if (potrosac == null)
            {
                return NotFound();
            }

            return potrosac;
        }



        [Route("/api/potrosaci/updatePotrosac")]
        public async Task<IActionResult> UpdatePotrosac(Potrosac potrosac)
        {
            var oldpotrosac = _context.Potrosaci.Where(e => e.Id == potrosac.Id).FirstOrDefault();
            oldpotrosac.Ime = potrosac.Ime;
            oldpotrosac.Prezime = potrosac.Prezime;
            oldpotrosac.Ulica = potrosac.Ulica;
            oldpotrosac.Grad = potrosac.Grad;
            oldpotrosac.Broj_telefona = potrosac.Broj_telefona;
            oldpotrosac.Postanski_broj = potrosac.Postanski_broj;
            oldpotrosac.Tip = potrosac.Tip;

            Lokacija l = new Lokacija();
            l.Ulica = oldpotrosac.Ulica;
            l.Grad = oldpotrosac.Grad;
            oldpotrosac.Prioritet = getPriority(l);

            _context.Entry(oldpotrosac).State = EntityState.Modified;


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PotrosacExists(oldpotrosac.Id))
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

        private bool PotrosacExists(int id)
        {
            return _context.Devices.Any(e => e.Id == id);
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Potrosac>>> getPotrosaci()
        {
            List<Potrosac> potrosaci = await _context.Potrosaci.ToListAsync();
            return potrosaci;
        }

        [HttpDelete]
        [Route("/api/Potrosaci/deletePotrosac/{id}")]
        public async Task<ActionResult<Potrosac>> DeletePotrosac(int id)
        {
            var potrosac = await _context.Potrosaci.FindAsync(id);
            if (potrosac == null) return NotFound();

            _context.Potrosaci.Remove(potrosac);
            await _context.SaveChangesAsync();
            return potrosac;
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
