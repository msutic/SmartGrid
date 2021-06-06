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
            List<Device> allDevices = await _context.Devices.ToListAsync();

            //var deviceDb = await _context.Devices.SingleOrDefaultAsync(d => d.Id == i)
            
            //foreach(Device item in incident.Devices)
            //{
            //    foreach(Device device in allDevices)
            //    {
            //        if(item.Id == device.Id)
            //        {
            //            device.IncidentId = incident.Id;
            //            _context.Devices.Update(device);
            //        }
            //    }
            //}

            await _context.SaveChangesAsync();

            List<Incident> allIncidents = await _context.Incidents.ToListAsync();


            return CreatedAtAction("GetAllIncidents", _context.Incidents);
        }

        [HttpDelete]
        [Route("/api/Incidents/deleteIncident/{id}")]
        public async Task<ActionResult<Incident>> DeleteIncident(int id)
        {
            var incident = await _context.Incidents.FindAsync(id);
            if (incident == null) return NotFound();

            _context.Incidents.Remove(incident);
            await _context.SaveChangesAsync();
            return incident;
        }
    }
}
