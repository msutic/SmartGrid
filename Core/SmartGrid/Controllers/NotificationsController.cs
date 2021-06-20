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
    public class NotificationsController : Controller
    {
        private readonly SmartGridContext _context;

        public NotificationsController(SmartGridContext context)
        {
            _context = context;
        }
       
        [Route("/api/Notifications/readNotification/{id}")]
        public async Task<IActionResult> ReadNotification(Notifikacija notifikacija)
        {
            var not = _context.Notifications.Where(e => e.Id == notifikacija.Id).FirstOrDefault();
            not.Procitana = true;
            Console.WriteLine("Citanje {0} notifikacije", notifikacija.Id);
            _context.Entry(not).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotifikacijaExists(notifikacija.Id))
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
        [HttpDelete]
        [Route("/api/Notifications/deleteNotification/{id}")]
        public async Task<ActionResult<Device>> DeleteNotification(int id)
        {
            var notification = await _context.Notifications.FindAsync(id);
            if (notification == null) return NotFound();

            _context.Notifications.Remove(notification);
            await _context.SaveChangesAsync();
            return NoContent();
        }




        private bool NotifikacijaExists(int id)
        {
            return _context.Notifications.Any(e => e.Id == id);
        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notifikacija>>> GetAllNotifications()
        {
            List<Notifikacija> notifications = await _context.Notifications.ToListAsync();

            return notifications;
        }

        [HttpGet("unreadNotifications")]
        public async Task<ActionResult<IEnumerable<Notifikacija>>> GetUnreadNotifications()
        {
            List<Notifikacija> allnotifications = await _context.Notifications.ToListAsync();
            List<Notifikacija> unread =new List<Notifikacija>();
            for(int i=0;i<allnotifications.Count;i++)
            {
                if(allnotifications[i].Procitana==false)
                {
                    unread.Add(allnotifications[i]);
                }
            }
            return unread;
        }

        [HttpGet("errorNotifications")]
        public async Task<ActionResult<IEnumerable<Notifikacija>>> GetErrorNotifications()
        {
            List<Notifikacija> allnotifications = await _context.Notifications.ToListAsync();
            List<Notifikacija> errors = new List<Notifikacija>();
            for (int i = 0; i < allnotifications.Count; i++)
            {
                if (allnotifications[i].Tip == "error")
                {
                    errors.Add(allnotifications[i]);
                }
            }
            return errors;
        }


        [HttpGet("infoNotifications")]
        public async Task<ActionResult<IEnumerable<Notifikacija>>> GetInfoNotifications()
        {
            List<Notifikacija> allnotifications = await _context.Notifications.ToListAsync();
            List<Notifikacija> infos = new List<Notifikacija>();
            for (int i = 0; i < allnotifications.Count; i++)
            {
                if (allnotifications[i].Tip == "info")
                {
                    infos.Add(allnotifications[i]);
                }
            }
            return infos;
        }

        [HttpGet("warningNotifications")]
        public async Task<ActionResult<IEnumerable<Notifikacija>>> GetWarningNotifications()
        {
            List<Notifikacija> allnotifications = await _context.Notifications.ToListAsync();
            List<Notifikacija> warnings = new List<Notifikacija>();
            for (int i = 0; i < allnotifications.Count; i++)
            {
                if (allnotifications[i].Tip == "warning")
                {
                    warnings.Add(allnotifications[i]);
                }
            }
            return warnings;
        }

        [HttpGet("successNotifications")]
        public async Task<ActionResult<IEnumerable<Notifikacija>>> GetSuccessNotifications()
        {
            List<Notifikacija> allnotifications = await _context.Notifications.ToListAsync();
            List<Notifikacija> successes = new List<Notifikacija>();
            for (int i = 0; i < allnotifications.Count; i++)
            {
                if (allnotifications[i].Tip == "success")
                {
                    successes.Add(allnotifications[i]);
                }
            }
            return successes;
        }




        [HttpPost("/api/notifications/addNotification")]
        public async Task<ActionResult<Notifikacija>> addNotification(Notifikacija notifikacija)
        {

            _context.Notifications.Add(notifikacija);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAllDevices", _context.Devices);
        }

        


        public IActionResult Index()
        {
            return View();
        }
    }
}
