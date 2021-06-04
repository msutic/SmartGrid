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
    public class DevicesController : ControllerBase
    {
        private readonly SmartGridContext _context;

        public DevicesController(SmartGridContext context)
        {
            _context = context;
        }

        // GET: api/Devices
        [HttpGet] 
        public async Task<ActionResult<IEnumerable<Device>>> GetAllDevices()
        {
            List<Device> devices =  await _context.Devices.ToListAsync();

            return devices;
        }

        // GET: api/Devices/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Device>> GetDevice(int id)
        {
            var device = await _context.Devices.FindAsync(id);

            if(device == null)
            {
                return NotFound();
            }

            return device;
        }

        [HttpPost("/api/Devices/addDevice")]
        public async Task<ActionResult<Device>> AddDevice(Device device)
        {
            if (device.Type.StartsWith("Pow"))
            {
                device.Name = "POW";
            } 
            else if (device.Type.StartsWith("Fu"))
            {
                device.Name = "FUS";
            }
            else if (device.Type.StartsWith("Tra"))
            {
                device.Name = "TRA";
            }
            else if (device.Type.StartsWith("Dis"))
            {
                device.Name = "DIS";
            }

            _context.Devices.Add(device);
            await _context.SaveChangesAsync();
            
            return CreatedAtAction("GetAllDevices", _context.Devices);
        }

        [HttpDelete]
        [Route("/api/Devices/deleteDevice/{id}")]
        public async Task<ActionResult<Device>> DeleteDevice(int id)
        {
            var device = await _context.Devices.FindAsync(id);
            if (device == null) return NotFound();

            _context.Devices.Remove(device);
            await _context.SaveChangesAsync();
            return device;
        }

        [Route("/api/Devices/updateDevice/{id}")]
        public async Task<IActionResult> UpdateDevice(Device device)
        {
            if (device.Type.StartsWith("Pow")) device.Name = "POW";
            else if (device.Type.StartsWith("Fus")) device.Name = "FUS";
            else if (device.Type.StartsWith("Tra")) device.Name = "TRA";
            else device.Name = "DIS";

            _context.Entry(device).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeviceExists(device.Id))
                {
                    return NotFound();
                }else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool DeviceExists(int id)
        {
            return _context.Devices.Any(e => e.Id == id);
        }

    }
}
