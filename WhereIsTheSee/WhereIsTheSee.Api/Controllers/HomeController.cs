using System.Web.Mvc;
using WhereIsTheSee.Data;
using System.Linq;

namespace WhereIsTheSee.Api.Controllers
{
  public class HomeController : Controller
  {
    public ApplicationDbContext dbContext;

    public HomeController()
    {
      this.dbContext = ApplicationDbContext.Create();
    }

    public ActionResult Index()
    {
      ViewBag.Title = "Home Page";

      ViewBag.Flags = this.dbContext.Flags.Select(f => f.LocationName).ToList<string>();

      return View();
    }
  }
}
