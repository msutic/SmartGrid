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
    public class PrioritetiLokacijaController : Controller
    {
        private readonly SmartGridContext _context;

        public PrioritetiLokacijaController(SmartGridContext context)
        {
            _context = context;
        }




        [HttpPost]
        [Route("/api/PrioritetiLokacija/addPriority")]
        public async Task<ActionResult<PrioritetLok>> addPriority(PrioritetLok lokacijaprioritet)
        {
            //List<LokacijaPrioritet> postoji = _context.PrioritetiLokacija.Where(e => e.Ulica.ToLower().Trim() == lokacijaprioritet.Ulica.ToLower().Trim() && e.Grad.ToLower().Trim() == lokacijaprioritet.Grad.ToLower().Trim()).ToList();
            
            if(!CheckIfExists(lokacijaprioritet))
            {
                _context.PrioritetiLokacija.Add(lokacijaprioritet);
                await _context.SaveChangesAsync();
            }else
            {
                var value = _context.PrioritetiLokacija.Where(e => e.Ulica.ToLower().Trim().Equals(lokacijaprioritet.Ulica.ToLower().Trim()) && e.Grad.ToLower().Trim().Equals(lokacijaprioritet.Grad.ToLower().Trim())).FirstOrDefault();
                value.Prioritet = lokacijaprioritet.Prioritet;
                _context.Entry(value).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
            return NoContent();
        }
        public bool CheckIfExists(PrioritetLok lp)
        {
            bool ret = false;
            List<PrioritetLok> prioriteti = _context.PrioritetiLokacija.ToList();
            foreach(PrioritetLok lpp in prioriteti)
            {
                if (lpp.Ulica.ToLower().Trim().Equals(lp.Ulica.ToLower().Trim()) && lpp.Grad.ToLower().Trim().Equals(lp.Grad.ToLower().Trim()))
                {
                    ret = true;
                }
            }
            return ret;

        }

        [HttpGet]
        [Route("api/PrioritetiLokacija/getPriority")]
        


        public IActionResult Index()
        {
            return View();
        }
    }
}
