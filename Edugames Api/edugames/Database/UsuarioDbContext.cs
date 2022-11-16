using Microsoft.EntityFrameworkCore;
using edugames.Controllers.Model;



namespace edugames.Database
{
    public class UsuarioDbContext : DbContext
    {

        public UsuarioDbContext(DbContextOptions<UsuarioDbContext>options) : base(options) {

        }
        
    }
}