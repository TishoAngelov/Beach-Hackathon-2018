using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using WhereIsTheSee.Model;

namespace WhereIsTheSee.Data
{
  public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
  {
    public ApplicationDbContext()
      : base("DefaultConnection")
    {

    }

    public static ApplicationDbContext Create()
    {
      return new ApplicationDbContext();
    }
  }
}
