using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartGrid.Data;
using SmartGrid.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartGrid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentsController : ControllerBase
    {
        private readonly SmartGridContext _context;

        public IncidentsController(SmartGridContext context)
        {
            _context = context;
        }

        // GET: api/Incidents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Incident>>> GetAllIncidents()
        {
            List<Incident> incidents = await _context.Incidents.ToListAsync();

            return incidents;
        }

        [HttpPost("/api/Incidents/addIncident")]
        public async Task<ActionResult<Incident>> AddIncident(Incident incident)
        {
            _context.Incidents.Add(incident);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAllIncidents", _context.Incidents);
        }
    }
}
