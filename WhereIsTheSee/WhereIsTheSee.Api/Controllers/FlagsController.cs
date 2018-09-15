using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Cors;
using System.Web.Http;
using System.Web.Http.Description;
using WhereIsTheSee.Data;
using WhereIsTheSee.Model;

namespace WhereIsTheSee.Api.Controllers
{
  public class FlagsController : BaseApiController
  {
    // GET: api/Flags
    public IQueryable<Flag> GetFlags()
    {
      return this.dbContext.Flags;
    }

    // GET: api/Flags/5
    [ResponseType(typeof(Flag))]
    public IHttpActionResult GetFlag(int id)
    {
      Flag flag = this.dbContext.Flags.Find(id);
      if (flag == null)
      {
        return NotFound();
      }

      return Ok(flag);
    }

    // PUT: api/Flags/5
    [ResponseType(typeof(void))]
    public IHttpActionResult PutFlag(int id, Flag flag)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != flag.Id)
      {
        return BadRequest();
      }

      this.dbContext.Entry(flag).State = EntityState.Modified;

      try
      {
        this.dbContext.SaveChanges();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!FlagExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return StatusCode(HttpStatusCode.NoContent);
    }

    // POST: api/Flags
    [ResponseType(typeof(Flag))]
    public IHttpActionResult PostFlag(Flag flag)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      this.dbContext.Flags.Add(flag);
      this.dbContext.SaveChanges();

      return CreatedAtRoute("DefaultApi", new { id = flag.Id }, flag);
    }

    // DELETE: api/Flags/5
    [ResponseType(typeof(Flag))]
    public IHttpActionResult DeleteFlag(int id)
    {
      Flag flag = this.dbContext.Flags.Find(id);
      if (flag == null)
      {
        return NotFound();
      }

      this.dbContext.Flags.Remove(flag);
      this.dbContext.SaveChanges();

      return Ok(flag);
    }

    protected override void Dispose(bool disposing)
    {
      if (disposing)
      {
        this.dbContext.Dispose();
      }
      base.Dispose(disposing);
    }

    private bool FlagExists(int id)
    {
      return this.dbContext.Flags.Count(e => e.Id == id) > 0;
    }
  }
}
