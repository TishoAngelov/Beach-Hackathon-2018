using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using WhereIsTheSee.Data.Migrations;
using WhereIsTheSee.Model;

namespace WhereIsTheSee.Data
{
  public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
  {
    public ApplicationDbContext()
      : base("DefaultConnection")
    {
      Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext, Configuration>());
    }

    public static ApplicationDbContext Create()
    {
      return new ApplicationDbContext();
    }

    public IDbSet<Flag> Flags { get; set; }
  }
}
