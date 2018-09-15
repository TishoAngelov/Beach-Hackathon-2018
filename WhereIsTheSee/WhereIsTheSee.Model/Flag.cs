using System;
using System.ComponentModel.DataAnnotations;
using WhereIsTheSee.Api.Enums;

namespace WhereIsTheSee.Model
{
  public class Flag
  {
    public Flag()
    {
      this.DateCreated = DateTime.Now;
    }

    [Key]
    public int Id { get; set; }

    [Required]
    public string LocationName { get; set; }

    public string BeachName { get; set; }

    public double Lat { get; set; }

    public double Long { get; set; }

    public EFlagType FlagType { get; set; }

    public string Description { get; set; }

    public DateTime DateCreated { get; set; }
  }
}