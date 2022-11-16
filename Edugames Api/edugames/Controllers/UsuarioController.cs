
using Microsoft.AspNetCore.Mvc;

namespace edugames.Controllers
{
   [ApiController]
   [Route("api/[controller]")]

    public class UsuarioController : ControllerBase
    {
       [HttpGet]
        public string aluno(){
            return "Aluno";
        }
        
    }
}