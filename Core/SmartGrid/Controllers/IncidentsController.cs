using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartGrid.Data;
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
    }
}
