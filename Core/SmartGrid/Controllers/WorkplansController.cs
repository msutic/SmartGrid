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

    public class WorkplansController : Controller
    {
        private readonly SmartGridContext _context;

        public WorkplansController(SmartGridContext context)
        {
            _context = context;
        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Workplan>>> GetAllWorkplans()
        {
            List<Workplan> workplans = await _context.Workplans.ToListAsync();

            return workplans;
        }

        [HttpPost("/api/Workplans/addWorkplan")]
        public async Task<ActionResult<Workplan>> AddWorkplan(Workplan workplan)
        {
            _context.Workplans.Add(workplan);
            await _context.SaveChangesAsync();
            return NoContent();

        }

        [HttpDelete]
        [Route("/api/Workplans/deleteWorkplan/{id}")]
        public async Task<ActionResult<Workplan>> DeleteWorkplan(int id)
        {
            var workplan = await _context.Workplans.FindAsync(id);
            if (workplan == null) return NotFound();

            _context.Workplans.Remove(workplan);
            await _context.SaveChangesAsync();
            return workplan;
        }















        public IActionResult Index()
        {
            return View();
        }
    }
}
