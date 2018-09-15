using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WhereIsTheSee.Api.Models;

namespace WhereIsTheSee.Api.Controllers
{
  public class HomeController : Controller
  {
    public ApplicationDbContext dbcontext;

    public HomeController()
    {
      this.dbcontext = ApplicationDbContext.Create();
    }

    public ActionResult Index()
    {
      ViewBag.Title = "Home Page";

      ViewBag.Users = this.dbcontext.Users.Select(u => u.Email).ToList<string>();

      return View();
    }
  }
}
