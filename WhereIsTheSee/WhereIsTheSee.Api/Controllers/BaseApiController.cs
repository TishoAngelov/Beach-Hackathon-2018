using System.Web.Http;
using WhereIsTheSee.Data;

namespace WhereIsTheSee.Api.Controllers
{
  public class BaseApiController : ApiController
  {
    protected ApplicationDbContext dbContext;

    public BaseApiController()
    {
        this.dbContext = ApplicationDbContext.Create();
    }
  }
}
