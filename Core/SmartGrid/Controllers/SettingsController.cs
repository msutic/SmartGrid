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
    public class SettingsController : Controller
    {
        private readonly SmartGridContext _context;

        public SettingsController(SmartGridContext context)
        {
            _context = context;
        }


        [HttpPut("updateSettings")]
        public async Task<IActionResult> UpdateSettings(Podesavanja podesavanja)
        {
            var oldsettings = _context.Settings.First();

            oldsettings.Obavezna = podesavanja.Obavezna;
            oldsettings.Errorvidljive = podesavanja.Errorvidljive;
            oldsettings.Infovidljive = podesavanja.Infovidljive;
            oldsettings.Successvidljive = podesavanja.Successvidljive;
            oldsettings.Warningvidljive = podesavanja.Warningvidljive;
            _context.Entry(oldsettings).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet]
        public async Task<ActionResult<Podesavanja>> getSettings()
        {
            Podesavanja p =  _context.Settings.First();
            return p;
        }




        public IActionResult Index()
        {
            return View();
        }
    }
}
