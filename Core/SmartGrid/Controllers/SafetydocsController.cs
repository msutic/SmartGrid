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
    public class SafetydocsController : ControllerBase
    {
        private readonly SmartGridContext _context;

        public SafetydocsController(SmartGridContext context)
        {
            _context = context;
        }

        // GET: api/Safety-docs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Safetydoc>>> GetAllSafetydocs()
        {
            List<Safetydoc> safetydocs = await _context.Safetydocs.ToListAsync();

            return safetydocs;
        }

        [HttpPost("/api/Safetydocs/addSafetydoc")]
        public async Task<ActionResult<Incident>> AddSafetydoc(Safetydoc safetydoc)
        {
            _context.Safetydocs.Add(safetydoc);

            await _context.SaveChangesAsync();


            return CreatedAtAction("GetAllSafetydocs", _context.Safetydocs);
        }

        [HttpDelete]
        [Route("/api/Safetydocs/deleteSafetydoc/{id}")]
        public async Task<ActionResult<Safetydoc>> DeleteSafetydoc(int id)
        {
            var safetydoc = await _context.Safetydocs.FindAsync(id);
            if (safetydoc == null) return NotFound();

            _context.Safetydocs.Remove(safetydoc);
            await _context.SaveChangesAsync();
            return safetydoc;
        }
    }
}
